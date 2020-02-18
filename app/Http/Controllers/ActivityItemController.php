<?php

namespace App\Http\Controllers;

use Illuminate\Auth\Access\AuthorizationException;
use Illuminate\Http\Request;

use App\Http\Requests;

use App\ActivityItem;

use App\Http\Requests\StoreActivityItem;

use App\ActivityItemOption;

use App\ActivityItemPair;

use App\Options\ZooGeolocationOptions;
use App\Options\QuestionTypeOptions;
use App\Options\ZooOptions;
use App\Options\LanguageOptions;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\DB;
use App\Services\ImageService;

use Illuminate\Support\Facades\Log;

class ActivityItemController extends Controller
{
  /**
   * Where to redirect users after login.
   *
   * @var string
   */
  protected $redirectTo = '/login';

  /**
   * Create a new controller instance.
   *
   * @return void
   */
  public function __construct()
  {
      $this->middleware('auth', ['except' => ['index', 'show']]);
  }

  /**
   * Process uploaded image as needed and move to a correct location.
   * @param  \App\Services\ImageService       $imageService ImageService instance
   * @param  \App\Http\Requests\StoreActivity $request      Request instance
   * @param  string                           $name         Uploaded file name
   * @param  string                           $path         Directory path
   * @return string                                         Image file name
   */
  private function processUploadedOptionImage(&$imageService, &$request, $name, $path) {
      $originalExtension = $request->file($name)->getClientOriginalExtension();
      $fileName = $imageService->generateUniqueFileName('activity_item_image_', $originalExtension);

      $imageService->process($request->file($name)->getRealPath(), $path, $fileName, 500);

      return $fileName;
  }

  /**
   * Process uploaded image as needed and move to a correct location.
   * @param  \App\Services\ImageService           $imageService
   * @param  \App\Http\Requests\StoreActivityItem $request
   * @param  string                               $path         Directory path
   * @return string                               Image file name
   */
  private function processUploadedImage(&$imageService, &$request, $path) {
      $originalExtension = $request->file('image')->getClientOriginalExtension();
      $fileName = $imageService->generateUniqueFileName('image_', $originalExtension);

      $imageService->process($request->file('image')->getRealPath(), $path, $fileName, 800);

      return $fileName;
  }

  /**
   * [deleteRemovedOptions description]
   * @param  [type] $request         [description]
   * @param  [type] $current_options [description]
   * @return [type]                  [description]
   */
  private function deleteRemovedOptions(&$request, &$current_options) {
      foreach ( $current_options as $id => $option ) {
          if ( !in_array($id, $request->ids) ) {
              $option->deleteImage();
              $option->delete();
          }
      }
  }

  /**
   * [deleteRemovedPairs description]
   * @param  [type] $request       [description]
   * @param  [type] $current_pairs [description]
   * @return [type]                [description]
   */
  private function deleteRemovedPairs(&$request, &$current_pairs) {
      foreach ( $current_pairs as $id => $item ) {
          if ( !in_array($id, $request->ids ) ) {
              $item->deleteImage();
              $item->deleteImageMatch();
              $item->delete();
          }
      }
  }

    /**
     * Display a listing of ActivityItems.
     *
     * @return Response
     */
  public function index()
  {
      // Hide activity items list and redirect to activities list
      return redirect(route('activity.index'));
  }

    /**
     * Show the form for creating a new ActivityItem.
     *
     * @param ZooGeolocationOptions $zooGeolocationOptions
     * @param QuestionTypeOptions $questionTypeOptions
     * @param ZooOptions $zooOptions
     * @param LanguageOptions $languageOptions
     * @return Response
     * @throws AuthorizationException
     */
  public function create(ZooGeolocationOptions $zooGeolocationOptions, QuestionTypeOptions $questionTypeOptions, ZooOptions $zooOptions, LanguageOptions $languageOptions)
  {
      $this->authorize('create', ActivityItem::class);

      $questionData = [];

      if ( (int)old('type') === 2 || (int)old('type') === 3 )
      {
          $correct = is_array( old('correct') ) ? old('correct') : [ old('correct') ];

          foreach ( old('options') as $index => $option )
          {
              $questionData[] = [
                  'id' => 0,
                  'option' => $option,
                  'correct' => in_array($index, $correct),
                  'image' => '',
              ];
          }
      } else if ( (int)old('type') === 5 )
      {
          foreach( old('options') as $index => $option )
          {
              $questionData[] = [
                  'id' => 0,
                  'option' => $option,
                  'image' => '',
                  'option_match' => old('matches')[$index],
                  'image_match' => '',
              ];
          }
      }

      return view('activity_items/create')->with([
          'zooGeolocationOptions' => $zooGeolocationOptions->options(),
          'questionTypeOptions' => $questionTypeOptions->options(),
          'zooOptions' => $zooOptions->options(),
          'languageOptions' => $languageOptions->options(),
          'questionData' => $questionData,
      ]);
  }

  /**
   * Store newly created activity in database.
   *
   * @param \App\Http\Requests\StoreActivityItem';
   * @return Response
   */
  public function store(StoreActivityItem $request, ImageService $imageService)
  {
      $item = new ActivityItem;

      $item->title = $request->title;
      $item->description = $request->description;
      $item->type = $request->type;
      $item->is_flash = $request->is_flash ?? false;

      $points = $request->points;
      if (is_array($points) && in_array($item->type, [
              QuestionTypeOptions::ONE_CORRECT_ANSWER,
              QuestionTypeOptions::MULTIPLE_CORRECT_ANSWERS,
              QuestionTypeOptions::MATCH_PAIRS
          ])) {
          $item->points = json_encode($points);
      } else if (is_scalar($points) && in_array($item->type, [
              QuestionTypeOptions::FREEFORM_ANSWER,
              QuestionTypeOptions::MISSING_WORD,
              QuestionTypeOptions::PHOTO
          ])) {
          $item->points = $points;
      } else {
          $item->points = 0;
      }

      if ( $item->isEmbeddedContent() && $request->{'embedded-content'} ) {
          $item->embedded_content = $request->{'embedded-content'};
      } else if ( $item->isMissingWord() && $request->{'missing-word'} ) {
          $item->missing_word = trim(preg_replace('/[^\S\r\n]+/', ' ',$request->{'missing-word'}));
      }

      $item->zoo = ZooOptions::DEFAULT_OPTION;
      $item->language = $request->language;
      $item->latitude = $request->latitude;
      $item->longitude = $request->longitude;
      $item->answering_time_check = $request->answering_time_check ? $request->answering_time_check : false;
      $item->answering_time = $request->answering_time ? $request->answering_time : 0;

      if ( $request->has('access_code') )
      {
          $item->access_code = $request->access_code;
      }

      if ( $request->has('access_code_clues') )
      {
          $item->access_code_clues = $request->access_code_clues;
      }

      if ( $request->has('read_more') )
      {
          $item->read_more = $request->read_more;
      }

      $item->user()->associate( auth()->user() );

      $item->save();

      $path = $item->getStoragePath();

      if ( $request->hasFile('image') )
      {
          $fileName = $this->processUploadedImage($imageService, $request, $path);
          DB::table('activity_items')
              ->where('id', $item->id)
              ->update(['image' => $fileName]);
      }

      // TODO It might make sense to move contents of these blocks to standalone
      // functions, as they act after item has alreayd been created
      if ( $item->isOneCorrectAnswer() ) {
          $options = [];
          $correct = -1;

          if ( $request->has('correct') ) {
              $correct = (int)$request->correct;
          }

          foreach ( $request->options as $key => $option ) {
              $tmp =  new ActivityItemOption;

              $tmp->option = $option;
              $tmp->correct = (int)( $key === $correct );
              if ( $request->hasFile('option-image-' . $key) ) {
                  $tmp->image = $this->processUploadedOptionImage($imageService, $request, 'option-image-' . $key, $path);
              }

              $options[] = $tmp;
          }

          $item->options()->saveMany($options);
      }

      if ( $item->isMultipleCorrectAnswers() ) {
          $options = [];
          $correct = [];

          if ( $request->has('correct') ) {
              $correct = $request->correct;
          }
          foreach ( $request->options as $key => $option ) {
              $tmp = new ActivityItemOption;

              $tmp->option = $option;
              $tmp->correct = (int)in_array($key, $correct);
              if ( $request->hasFile('option-image-' . $key) ) {
                  $tmp->image = $this->processUploadedOptionImage($imageService, $request, 'option-image-' . $key, $path);
              }

              $options[] = $tmp;
          }

          $item->options()->saveMany($options);
      }

      if ( $item->isMatchPairs() ) {
          $pairs = [];

          foreach ( $request->options as $key => $option ) {
              $tmp = new ActivityItemPair;

              $tmp->option = $option;
              $tmp->option_match = $request->matches[$key];
              if ( $request->hasFile('option-image-' . $key) ) {
                  $tmp->image = $this->processUploadedOptionImage($imageService, $request, 'option-image-' . $key, $path);
              }
              if ( $request->hasFile('option-match-image-' . $key) ) {
                  $tmp->image_match = $this->processUploadedOptionImage($imageService, $request, 'option-match-image-' . $key, $path);
              }


              $pairs[] = $tmp;
          }

          $item->pairs()->saveMany($pairs);
      }

      // This one is used to determine if message should be sent or not
      // Used by the creation of Activity, when opening a new window to
      // create an ActivityItem
      $request->session()->flash('activityItemCreated', 'true');

      return redirect()->route('activity_item.show', [ 'activity_item' => $item->id ]);
  }

    /**
     * Display the specified ActivityItem.
     *
     * @param ActivityItem $activity_item
     * @return Response
     */
  public function show(ActivityItem $activity_item)
  {
      // XXX This seems to fail for guests
      //$this->authorize('view', $activity_item);

      // This one is neede to force preloading for JSON encoding the object
      $activity_item->options;
      $activity_item->pairs;

      return view('activity_items/show')->with('activity_item', $activity_item);
  }

    /**
     * Show the form for editing the specified activity.
     *
     * @param ActivityItem $activity_item
     * @param ZooGeolocationOptions $zooGeolocationOptions
     * @param QuestionTypeOptions $questionTypeOptions
     * @param ZooOptions $zooOptions
     * @param LanguageOptions $languageOptions
     * @return Response
     * @throws AuthorizationException
     */
  public function edit(
      ActivityItem $activity_item,
      ZooGeolocationOptions $zooGeolocationOptions,
      QuestionTypeOptions $questionTypeOptions,
      ZooOptions $zooOptions,
      LanguageOptions $languageOptions
  )
  {
      $this->authorize('update', $activity_item);

      $questionData = static::getQuestionData($activity_item);

      return view('activity_items/edit')->with([
          'activity_item' => $activity_item,
          'zooGeolocationOptions' => $zooGeolocationOptions->options(),
          'questionTypeOptions' => $questionTypeOptions->options(),
          'zooOptions' => $zooOptions->options(),
          'languageOptions' => $languageOptions->options(),
          'questionData' => $questionData ? $questionData : $activity_item->getQuestionData(),
      ]);
  }

  public static function getQuestionData(ActivityItem $activity_item): array
  {
      $questionData = [];

      if ( (int)old('type') === QuestionTypeOptions::ONE_CORRECT_ANSWER || (int)old('type') === QuestionTypeOptions::MULTIPLE_CORRECT_ANSWERS )
      {
          $correct = is_array( old('correct') ) ? old('correct') : [ old('correct') ];
          $options = $activity_item->options->keyBy('id');
          $points = $activity_item->points;
          if (in_array($activity_item->type, [
              QuestionTypeOptions::ONE_CORRECT_ANSWER,
              QuestionTypeOptions::MULTIPLE_CORRECT_ANSWERS,
              QuestionTypeOptions::MATCH_PAIRS
          ], true)) {
              $points = json_decode($points);
          }

          foreach ( old('options') as $index => $option )
          {
              $optionId = old('ids')[$index];
              /** @var ActivityItemOption $optionObject */
              $optionObject = $options->get($optionId);

              $questionData[] = [
                  'id' => $optionId,
                  'option' => $option,
                  'correct' => in_array($index, $correct, true),
                  'image' => $optionObject ? $optionObject->image : '',
                  'image_url' => ( $optionObject && $optionObject->hasImage() ) ? $optionObject->getImageUrl() : '',
                  'activity_item_id' => $activity_item->id,
                  'points' => $points[$index] ?? ''
              ];
          }
      } else if ( (int)old('type') === QuestionTypeOptions::MATCH_PAIRS )
      {
          $pairs = $activity_item->pairs->keyBy('id');

          foreach( old('options') as $index => $option )
          {
              $pairId = old('ids')[$index];
              $pair = $pairs->get($pairId);

              $questionData[] = [
                  'id' => $pairId,
                  'option' => $option,
                  'image' => $pair ? $pair->image : '',
                  'image_url' => ( $pair && $pair->hasImage() ) ? $pair->getOptionImageUrl() : '',
                  'option_match' => old('matches')[$index],
                  'image_match' => $pair ? $pair->image_match : '',
                  'image_match_url' => ( $pair && $pair->hasImageMatch() ) ? $pair->getOptionMatchImageUrl($pair->image_match) : '',
                  'activity_item_id' => $activity_item->id,
                  'points' => $points[$index] ?? ''
              ];
          }
      }

      return $questionData;
  }

  /**
   * Update the specified activity in database.
   *
   * @param \App\Http\Requests\StoreActivityItem;
   * @param ActivityItem
   * @return Response
   */
  public function update(StoreActivityItem $request, ActivityItem $activity_item, ImageService $imageService)
  {
      $path = $activity_item->getStoragePath();

      $activity_item->title = $request->title;
      $activity_item->description = $request->description;
      $activity_item->answering_time_check = $request->answering_time_check ? $request->answering_time_check : false;
      $activity_item->answering_time = $request->answering_time ? $request->answering_time : 0;
      $activity_item->is_flash = $request->is_flash ?? false;

      $points = $request->points;
      if (is_array($points) && in_array($activity_item->type, [
              QuestionTypeOptions::ONE_CORRECT_ANSWER,
              QuestionTypeOptions::MULTIPLE_CORRECT_ANSWERS,
              QuestionTypeOptions::MATCH_PAIRS
          ])) {
          $activity_item->points = json_encode($points);
      } else if (is_scalar($points) && in_array($activity_item->type, [
              QuestionTypeOptions::FREEFORM_ANSWER,
              QuestionTypeOptions::MISSING_WORD,
              QuestionTypeOptions::PHOTO
          ])) {
          $activity_item->points = $points;
      } else {
          $activity_item->points = 0;
      }

      if ( $request->hasFile('image') ) {
          if ( $activity_item->hasImage() )
          {
              $activity_item->deleteImage();
              $activity_item->image = null;
          }

          $fileName = $this->processUploadedImage($imageService, $request, $path);
          $activity_item->image = $fileName;
      }
      else if ( $request->remove_image && $activity_item->hasImage() )
      {
          $activity_item->deleteImage();
          $activity_item->image = null;
      }

      if ( $activity_item->isEmbeddedContent() ) {
          $activity_item->embedded_content = $request->input('embedded-content', '');
      } else if ( $activity_item->isMissingWord() ) {
          $activity_item->missing_word = trim(preg_replace('/[^\S\r\n]+/', ' ',$request->input('missing-word', '')));
      }

      if ( auth()->user()->can('changeZoo', $activity_item) ) {
          $activity_item->zoo = ZooOptions::DEFAULT_OPTION;
      }

      $activity_item->language = $request->language;
      $activity_item->latitude = $request->latitude;
      $activity_item->longitude = $request->longitude;

      if ( $request->has('access_code') )
      {
          $activity_item->access_code = $request->access_code;
      }
      else
      {
          $activity_item->access_code = NULL;
      }

      if ( $request->has('access_code_clues') )
      {
          $activity_item->access_code_clues = $request->access_code_clues;
      }
      else
      {
          $activity_item->access_code_clues = NULL;
      }

      if ( $request->has('read_more') )
      {
          $activity_item->read_more = $request->read_more;
      }
      else
      {
          $activity_item->read_more = '';
      }

      $activity_item->save();

      // TODO It might make sense to move contents of these blocks to standalone
      // functions, as they act after item has alreayd been created
      if ( $activity_item->isOneCorrectAnswer() ) {
          $current_options = $activity_item->options->getDictionary();
          $options = [];
          $correct = -1;
          $removedOptionsImages = $request->get('removed-option-images');

          if ( $request->has('correct') ) {
              $correct = (int)$request->correct;
          }

          foreach ( $request->options as $key => $option ) {
              if ( $request->ids[$key] ) {
                  $tmp = $current_options[$request->ids[$key]];

                  $tmp->option = $option;
                  $tmp->correct = (int)( $key === $correct );
                  if ( $request->hasFile('option-image-' . $key) ) {
                      if ( $tmp->image ) {
                          $tmp->deleteImage();
                      }
                      $tmp->image = $this->processUploadedOptionImage($imageService, $request, 'option-image-' . $key, $path);
                  }
                  else if ( $removedOptionsImages && is_array($removedOptionsImages) && in_array($tmp->id, $removedOptionsImages) && $tmp->hasImage() )
                  {
                      $tmp->deleteImage();
                      $tmp->image = null;
                  }

                  $options[] = $tmp;
              } else {
                  $tmp =  new ActivityItemOption;

                  $tmp->option = $option;
                  $tmp->correct = (int)( $key === $correct );
                  if ( $request->hasFile('option-image-' . $key) ) {
                      $tmp->image = $this->processUploadedOptionImage($imageService, $request, 'option-image-' . $key, $path);
                  }

                  $options[] = $tmp;
              }
          }

          $this->deleteRemovedOptions($request, $current_options);

          $activity_item->options()->saveMany($options);
      }

      if ( $activity_item->isMultipleCorrectAnswers() ) {
          $current_options = $activity_item->options->getDictionary();
          $options = [];
          $correct = [];
          $removedOptionsImages = $request->get('removed-option-images');

          if ( $request->has('correct') ) {
              $correct = $request->correct;
          }
          foreach ( $request->options as $key => $option ) {
              if ( $request->ids[$key] ) {
                  $tmp = $current_options[$request->ids[$key]];

                  $tmp->option = $option;
                  $tmp->correct = (int)in_array($key, $correct);
                  if ( $request->hasFile('option-image-' . $key) ) {
                      if ( $tmp->image ) {
                          $tmp->deleteImage();
                      }
                      $tmp->image = $this->processUploadedOptionImage($imageService, $request, 'option-image-' . $key, $path);
                  }
                  else if ( $removedOptionsImages && is_array($removedOptionsImages) && in_array($tmp->id, $removedOptionsImages) && $tmp->hasImage() )
                  {
                      $tmp->deleteImage();
                      $tmp->image = null;
                  }

                  $options[] = $tmp;
              } else {
                  $tmp = new ActivityItemOption;

                  $tmp->option = $option;
                  $tmp->correct = (int)in_array($key, $correct);
                  if ( $request->hasFile('option-image-' . $key) ) {
                      $tmp->image = $this->processUploadedOptionImage($imageService, $request, 'option-image-' . $key, $path);
                  }

                  $options[] = $tmp;
              }
          }

          $this->deleteRemovedOptions($request, $current_options);

          $activity_item->options()->saveMany($options);
      }

      if ( $activity_item->isMatchPairs() ) {
          $current_pairs = $activity_item->pairs->getDictionary();
          $removedOptionsImages = $request->get('removed-option-images');
          $removedOptionsMatchImages = $request->get('removed-option-match-images');

          $pairs = [];

          foreach ( $request->options as $key => $option ) {
              if ( $request->ids[$key] ) {
                  $tmp = $current_pairs[$request->ids[$key]];

                  $tmp->option = $option;
                  $tmp->option_match = $request->matches[$key];

                  if ( $request->hasFile('option-image-' . $key) )
                  {
                      if ( $tmp->image ) {
                          $tmp->deleteImage();
                      }
                      $tmp->image = $this->processUploadedOptionImage($imageService, $request, 'option-image-' . $key, $path);
                  }
                  else if ( $removedOptionsImages && is_array($removedOptionsImages) && in_array($tmp->id, $removedOptionsImages) && $tmp->hasImage() )
                  {
                      $tmp->deleteImage();
                      $tmp->image = null;
                  }

                  if ( $request->hasFile('option-match-image-' . $key) )
                  {
                      if ( $tmp->image_match ) {
                          $tmp->deleteImageMatch();
                      }
                      $tmp->image_match = $this->processUploadedOptionImage($imageService, $request, 'option-match-image-' . $key, $path);
                  }
                  else if ( $removedOptionsMatchImages && is_array($removedOptionsMatchImages) && in_array($tmp->id, $removedOptionsMatchImages) && $tmp->hasImageMatch() )
                  {
                      $tmp->deleteImageMatch();
                      $tmp->image_match = null;
                  }

                  $pairs[] = $tmp;
              } else {
                  $tmp = new ActivityItemPair;

                  $tmp->option = $option;
                  $tmp->option_match = $request->matches[$key];
                  if ( $request->hasFile('option-image-' . $key) ) {
                      $tmp->image = $this->processUploadedOptionImage($imageService, $request, 'option-image-' . $key, $path);
                  }
                  if ( $request->hasFile('option-match-image-' . $key) ) {
                      $tmp->image_match = $this->processUploadedOptionImage($imageService, $request, 'option-match-image-' . $key, $path);
                  }

                  $pairs[] = $tmp;
              }
          }

          $this->deleteRemovedPairs($request, $current_pairs);

          $activity_item->pairs()->saveMany($pairs);
      }

      return redirect()->route('activity_item.show', [ 'activity_item' => $activity_item->id ]);
  }

  /**
   * Remove the specified activity from database.
   *
   * @param ActivityItem
   * @return Response
   */
  public function destroy(ActivityItem $activity_item)
  {
      $this->authorize('delete', $activity_item);

      $activity_item->delete();
      $activity_item->deleteFileStorage();

      return redirect()->route('activity_item.index');
  }

  /**
   * Returns paginated ActivityItem results matching search criteria
   * @param  \Illuminate\Http\Request $request Request object
   * @return Response
   */
  public function search(Request $request)
  {
      $query = ActivityItem::with(['options', 'pairs'])->select();

      if ( $request->has('keywords') && trim($request->get('keywords')) ) {
          $query->where(function($query) use ($request) {
              $query->where('title', 'like', '%' . trim($request->get('keywords')) . '%')
                    ->orWhere('description', 'like', '%' . trim($request->get('keywords')) . '%');
          });
      }
      if ( $request->has('zoo') && (int)$request->get('zoo') !== 0 ) {
          $query->where('zoo', '=', (int)$request->get('zoo'));
      }
      if ( $request->has('questionType') && (int)$request->get('questionType') !== 0 ) {
          $query->where('type', '=', (int)$request->get('questionType'));
      }
      if ( $request->has('language') && $request->get('language') !== '0' ) {
          $query->where('language', '=', $request->get('language'));
      }

      return $query->paginate( config('paginate.limit') );
  }
}
