<?php

namespace App\Http\Controllers;

use App\ActivityInstructor;
use App\HT2Labs\XApi\LrsService;
use App\HT2Labs\XApi\StatementData;
use App\Jobs\ProcessLrsRequest;
use App\Options\AgeOfParticipantsOptions;
use App\Options\SubjectOptions;
use App\User;
use App\Utils\RandomStringGenerator;
use App\Utils\RandomUniqueNumberGenerator;
use Exception;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use App\Http\Requests\StoreActivity;

use App\Activity;
use App\ActivityItem;
use App\Game;
use App\DiscountVoucher;

use Auth;

use App\Options\ZooOptions;
use App\Options\LanguageOptions;
use App\Options\QuestionTypeOptions;
use App\Options\DifficultyLevelOptions;
use App\Services\ImageService;

use SimpleSoftwareIO\QrCode\Facades\QrCode;

use Carbon\Carbon;

use Illuminate\Support\Facades\DB;

use Illuminate\Support\Facades\Log;

class ActivityController extends Controller
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
        $this->middleware('auth', [
            'except' => [
                'promotedIndex',
                'show',
                'start',
                'qrCode',
                'qrCodeDownload',
                'findGame',
                'sendGameStartedToLrs'
            ]
        ]);
    }

    /**
     * Process uploaded image as needed and move to a correct location.
     * @param  \App\Services\ImageService       $imageService
     * @param  \App\Http\Requests\StoreActivity $request
     * @param  string                           $path
     * @return string                                         Image file name
     */
    private function processFeaturedImage(&$imageService, &$request, $path) {
        $originalExtension = $request->file('featured_image')->getClientOriginalExtension();
        $fileName = $imageService->generateUniqueFileName('featured_image_', $originalExtension);

        $imageService->process($request->file('featured_image')->getRealPath(), $path, $fileName, 800);

        return $fileName;
    }

    /**
     * Returns options to use with select field for discount voucher.
     * @param boolean $onlyActive Only return active discount vouchers
     * @return array An aerray with an additional empty option at the top
     */
    private function getDiscountVoucherOptions($onlyActive = true)
    {
        $discountVoucherOptions = [ 'NULL' => '',];

        $query = DiscountVoucher::orderBy('created_at', 'asc');

        if ( $onlyActive )
        {
            $query->where('status', '=', 1);
        }

        $vouchers = $query->get();

        if ( $vouchers )
        {
            foreach ( $vouchers as $voucher )
            {
                $discountVoucherOptions[$voucher->id] = $voucher->title;

                if ( !(boolean) $voucher->status )
                {
                    $discountVoucherOptions[$voucher->id] .= ' (' . trans('general.discount-voucher-status.inactive') . ')';
                }
            }
        }

        return $discountVoucherOptions;
    }

    /**
     * Determines if passed id should be treated as an empty field
     * @param  string  $id Dicount voucher identifier
     * @return boolean
     */
    private function isEmptyDiscountVoucher($id)
    {
        return $id === 'NULL';
    }

    /**
     * Returns date object if parsing succeeded
     * @param  string                   $parameterName Parameter name
     * @param  \Illuminate\Http\Request $request       Request object
     * @return mixed                                   Carbon date object or NULL
     */
    private function getParsedDateFromRequest($parameterName, &$request)
    {
        $dateObject = NULL;

        if ( $request->has($parameterName) && $request->get($parameterName) )
        {
            try {
                $dateObject = Carbon::parse($request->get($parameterName));
            }
            catch (Exception $e)
            {
                // Parsing failed, nothing to be done
            }
        }

        return $dateObject;
    }

    /**
     * Returns the browser input friendly DateTime string
     * @param  \Carbon\Carbon $date Date object
     * @return string               DateTime string suitable for datetime-local input
     */
    private function toBrowserInputFriendlyDateTime(Carbon $date)
    {
        return "{$date->toDateString()}T{$date->toTimeString()}";
    }

    /**
     * Display a listing of activities.
     *
     * @param Request                $request
     * @param ZooOptions             $zooOptions
     * @param LanguageOptions        $languageOptions
     * @param DifficultyLevelOptions $difficultyLevelOptions
     *
     * @return \Illuminate\Http\Response
     */
    public function index(
        Request $request,
        ZooOptions $zooOptions,
        LanguageOptions $languageOptions,
        DifficultyLevelOptions $difficultyLevelOptions
    ) {
        $search = [
            'search-text' => $request->has('search-text') ? $request->get('search-text') : '',
            'difficulty-level' => $request->has('difficulty-level') ? $request->get('difficulty-level') : '',
            'zoo' => $request->has('zoo') ? $request->get('zoo') : '',
            'language' => $request->has('language') ? $request->get('language') : '',
            'search-submitted' => $request->has('search-submitted') && (int)$request->get('search-submitted') === 1,
        ];

        /** @var Builder $query */
        $query = Activity::orderBy('promoted', 'desc')->orderBy('activities.id', 'desc')->with(['user', 'discountVoucher',]);

        if ( $request->has('search-text') && trim($request->get('search-text')) )
        {
            $query->where(static function(Builder $query) use ($request) {
                $query->where('activities.title', 'like', '%' . trim($request->get('search-text')) . '%')
                    ->orWhere('activities.description', 'like', '%' . trim($request->get('search-text')) . '%');
            });
        }

        if ( $request->has('zoo') && (int)$request->get('zoo') !== 0 )
        {
            $query->where('activities.zoo', '=', (int)$request->get('zoo'));
        }

        if ( $request->has('language') && $request->get('language') !== '0' )
        {
            $query->where('activities.language', '=', $request->get('language'));
        }

        $user = auth()->user();
        if ( Auth::check() && $user->isAdmin() === false) {
            $query->leftJoin('activity_instructors', 'activity_instructors.activity_id', '=', 'activities.id');
            $query->select('activities.*');
            // If instructor and game creator are same person
            $query->groupBy('activities.id');
            $query->where(static function (Builder $subQuery) use ($user) {
                $subQuery->where('promoted', 1)
                    ->orWhere('activities.user_id', $user->id)
                    ->orWhere('activity_instructors.user_id', $user->id);
            });
        } else if (!Auth::check()) {
            $query->where('promoted', 1);
        }

        if ($request->request->has('promoted-index')) {
            $promotedQuery = clone $query;
            $activities = $promotedQuery
                ->where('promoted', 1)
                ->where('is_template', 0)
                ->paginate(5);
            $templates = null;
        } else {
            $templatesQuery = clone $query;
            $templates = $templatesQuery
                ->where('is_template', 1)
                ->paginate(5, ['*'], 'page2');
            $activitiesQuery = clone $query;
            $activities = $activitiesQuery
                ->where('is_template', 0)
                ->where('promoted', 0)
                ->paginate(5);
        }


        if ( $search['search-submitted'] )
        {
            $activities->appends($search);
            $activities->fragment('search-results');
        } else if ( $request->has('zoo') && $request->get('zoo') )
        {
            $activities->appends([
                'zoo' => $request->get('zoo'),
            ]);
        }

        return view('activities/index')->with([
            'activities' => $activities,
            'templates' => $templates,
            'zooOptions' => $zooOptions->options(),
            'languageOptions' => $languageOptions->options(),
            'difficultyLevelOptions' => $difficultyLevelOptions->options(),
            'search' => $search,
        ]);
    }

    public function promotedIndex(
        Request $request,
        ZooOptions $zooOptions,
        LanguageOptions $languageOptions,
        DifficultyLevelOptions $difficultyLevelOptions
    ) {
        $request->request->set('promoted-index', true);

        return $this->index($request, $zooOptions, $languageOptions, $difficultyLevelOptions);
    }

    /**
     * Show the form for creating a new activity.
     *
     * @param ZooOptions               $zooOptions
     * @param LanguageOptions          $languageOptions
     * @param QuestionTypeOptions      $questionTypeOptions
     * @param DifficultyLevelOptions   $difficultyLevelOptions
     * @param SubjectOptions           $subjectOptions
     * @param AgeOfParticipantsOptions $ageOfParticipantsOptions
     *
     * @return \Illuminate\Http\Response
     * @throws \Illuminate\Auth\Access\AuthorizationException
     */
    public function create(
        ZooOptions $zooOptions,
        LanguageOptions $languageOptions,
        QuestionTypeOptions $questionTypeOptions,
        DifficultyLevelOptions $difficultyLevelOptions,
        SubjectOptions $subjectOptions,
        AgeOfParticipantsOptions $ageOfParticipantsOptions
    ) {
        $this->authorize('create', Activity::class);

        return view('activities/create')->with([
            'zooOptions' => $zooOptions->options(),
            'languageOptions' => array_merge(['' => '-'], $languageOptions->options()),
            'questionTypeOptions' => $questionTypeOptions->options(),
            'difficultyLevelOptions' => $difficultyLevelOptions->options(),
            'activity_items' => old('activity_items') ? ActivityItem::find(old('activity_items')) : [],
            'discountVoucherOptions' => $this->getDiscountVoucherOptions(true),
            'subjectOptions' => $subjectOptions->options(),
            'ageOfParticipantsOptions' => $ageOfParticipantsOptions->options()
        ]);
    }

    /**
     * Store newly created activity in database.
     *
     * @param \App\Http\Requests\StoreActivity
     * @param \App\Services\ImageService
     * @return \Illuminate\Http\Response
     */
    public function store(StoreActivity $request, ImageService $imageService)
    {
        $activity = $this->storeActivity($request, $imageService);

        return redirect()->route('activity.show', [ 'activity' => $activity->id ]);
    }

    /**
     * Display the specified activity.
     *
     * @param \App\Activity
     * @return \Illuminate\Http\Response
     */
    public function show(Activity $activity)
    {
        // XXX This seems to fail for guests
        //$this->authorize('view', $activity);

        return view('activities/show')->with('activity', $activity);
    }

    /**
     * Show the form for editing the specified activity.
     *
     * @param \App\Activity
     * @param ZooOptions               $zooOptions
     * @param LanguageOptions          $languageOptions
     * @param QuestionTypeOptions      $questionTypeOptions
     * @param DifficultyLevelOptions   $difficultyLevelOptions
     *
     * @param SubjectOptions           $subjectOptions
     * @param AgeOfParticipantsOptions $ageOfParticipantsOptions
     *
     * @return \Illuminate\Http\Response
     * @throws \Illuminate\Auth\Access\AuthorizationException
     */
    public function edit(
        Activity $activity,
        ZooOptions $zooOptions,
        LanguageOptions $languageOptions,
        QuestionTypeOptions $questionTypeOptions,
        DifficultyLevelOptions $difficultyLevelOptions,
        SubjectOptions $subjectOptions,
        AgeOfParticipantsOptions $ageOfParticipantsOptions
    ) {
        $this->authorize('update', $activity);

        $itemPositions = [];
        /** @var ActivityItem $activityItem */
        foreach ($activity->activityItems as $activityItem) {
            $relations = $activityItem->pivot;
            $itemPositions[] = $relations->getAttribute('position');
        }

        return view('activities/edit')->with([
            'activity' => $activity,
            'zooOptions' => $zooOptions->options(),
            'languageOptions' => array_merge(['' => '-'], $languageOptions->options()),
            'questionTypeOptions' => $questionTypeOptions->options(),
            'difficultyLevelOptions' => $difficultyLevelOptions->options(),
            'activity_items' => old('activity_items') ? ActivityItem::find(old('activity_items')) : $activity->activityItems,
            'activity_item_positions' => $itemPositions,
            'discountVoucherOptions' => $this->getDiscountVoucherOptions(false),
            'subjectOptions' => $subjectOptions->options(),
            'ageOfParticipantsOptions' => $ageOfParticipantsOptions->options()
        ]);
    }

    /**
     * Update the specified activity in database.
     *
     * @param \App\Http\Requests\StoreActivity
     * @param \App\Activity
     * @param \App\Services\ImageService
     * @return \Illuminate\Http\Response
     */
    public function update(StoreActivity $request, Activity $activity, ImageService $imageService)
    {
        $activity->title = $request->title;
        $activity->description = $request->description;
        $activity->difficulty_level = DifficultyLevelOptions::DEFAULT_LEVEL;
        $activity->playing_time = $request->playing_time;
        $activity->language = $request->language;
        $activity->contact_information = $request->contact_information;
        $activity->keywords = $request->keywords;
        $activity->subject = $request->subject ? $request->subject : '';
        $activity->age_of_participants = $request->age_of_participants ? json_encode($request->age_of_participants) : '';
        $activity->is_template = (bool) $request->is_template;

        $this->saveInstructors($request, $activity);

        if ( $request->hasFile('featured_image') ) {
            if ( $activity->hasFeaturedImage() )
            {
                $activity->deleteFeaturedImage();
                $activity->featured_image = null;
            }

            $fileName = $this->processFeaturedImage($imageService, $request, $activity->getStoragePath());
            $activity->featured_image = $fileName;
        }
        else if ( $request->remove_featured_image && $activity->hasFeaturedImage() )
        {
            $activity->deleteFeaturedImage();
            $activity->featured_image = null;
        }
        if ( auth()->user()->can('changeZoo', $activity) )
        {
            $activity->zoo = ZooOptions::DEFAULT_OPTION;
        }

        if ( $request->has('proximity_check') )
        {
            $activity->proximity_check = true;
            if ( $request->has('proximity_radius') && (int)$request->proximity_radius )
            {
                $activity->proximity_radius = (int)$request->proximity_radius;
            } else {
                $activity->proximity_radius = null;
            }
        } else {
            $activity->proximity_check = false;
            $activity->proximity_radius = null;
        }

        if ( auth()->user()->can('changeDiscountVoucher', $activity) && $request->has('discount_voucher') ) {
            $voucherId = $request->discount_voucher;

            if ( $this->isEmptyDiscountVoucher($voucherId) )
            {
                if ( $activity->discountVoucher )
                {
                    $activity->discountVoucher()->dissociate();
                }
            } else {
                $voucher = DiscountVoucher::find($voucherId);

                if ( $voucher ) {
                    if ( $activity->discountVoucher ) {
                        $activity->discountVoucher()->dissociate();
                    }

                    $activity->discountVoucher()->associate($voucher);
                }
            }
        }

        if ( auth()->user()->can('changePromoted', $activity) && $request->has('promoted') )
        {
            $activity->promoted = (bool)$request->promoted;
        }

        if ($request->has('enforce_items_order')) {
            $activity->enforce_items_order = (int) $request->enforce_items_order;
        } else {
            $activity->enforce_items_order = 0;
        }

        $activity->save();

        if ( ( $request->has('activity_items') && $request->has('order') ) ||
            ( $request->has('activity_items') && !$request->has('enforce_items_order') ) ) {
            $items = [];
            foreach( $request->activity_items as $index => $item ) {
                $items[$item] = [ 'position' => $request->order[$index] ?? ($index + 1) ];

            }

            $activity->activityItems()->sync($items);
        } else {
            $activity->activityItems()->detach();
        }

        return redirect()->route('activity.show', [ 'activity' => $activity->id ]);
    }

    /**
     * Remove the specified activity from database.
     *
     * @param \App\Activity
     * @return \Illuminate\Http\Response
     */
    public function destroy(Activity $activity)
    {
        $this->authorize('delete', $activity);

        if ( $activity->games->count() > 0 )
        {
            $activity->delete();
        } else {
            $activity->forceDelete();
            $activity->deleteFileStorage();
        }

        return redirect()->route('activity.index');
    }

    /**
     * [start description]
     *
     * @param Request  $request
     * @param Activity $activity [description]
     *
     * @return RedirectResponse [type]             [description]
     */
    public function start(Request $request, Activity $activity)
    {
        $game = null;

        if ( Auth::check() ) {
            $game = Game::where([
                'activity_id' => $activity->id,
                'user_id' => auth()->user()->id
            ])->first();
        }

        if ( !$game ) {
            $game = new Game;

            if ( Auth::check() )
            {
                $game->user()->associate( auth()->user() );
            } else {
                $game->nickname = $request->get('nickname');
            }
            $game->activity()->associate($activity);
            $game->save();
        }

        $routeParams = [
            'game' => $game->id,
        ];

        if ( $request->has('exit_url') )
        {
            $routeParams['exit_url'] = $request->get('exit_url');
        }

        $this->sendGameStartedToLrs($game);

        return redirect()->route('game.play', $routeParams);
    }

    /**
     * Display a listing of activities with results.
     *
     * @return \Illuminate\Http\Response
     */
    public function resultsIndex(ZooOptions $zooOptions)
    {
        $this->authorize('viewResultsList', Activity::class);

        $zooIds = [];
        if ( Auth::user()->isAdmin() )
        {
            $zooIds = array_keys($zooOptions->options());
        }
        else if ( Auth::user()->roles )
        {
            foreach ( Auth::user()->roles as $role ) {
                if ( $role->pivot->zoo && !in_array( $role->pivot->zoo, $zooIds ) ) {
                    $zooIds[] = (int)$role->pivot->zoo;
                }
            }
        }

        return view('activities/results-index')->with([
            'activities' => Activity::whereIn('zoo', $zooIds)->orderBy('id', 'desc')->paginate( config('paginate.limit') ),
            'zoos' => array_map(function($id) use ($zooOptions) { return $zooOptions->value($id); }, $zooIds),
        ]);
    }

    /**
     * Display the results for specified activity.
     *
     * @param Illuminate\Http\Request $request  Request object
     * @param \App\Activity           $activity Activity object
     * @return \Illuminate\Http\Response
     */
    public function results(Request $request, Activity $activity)
    {
        $this->authorize('viewResults', $activity);

        $search = [
            'incognito' => ( $request->has('incognito') && (int)$request->incognito === 0 ) ? false : true,
            'incomplete' => ( $request->has('incomplete') && (int)$request->incomplete === 0 ) ? false : true,
            'from' => ( $request->has('from') && $request->from ) ? $this->getParsedDateFromRequest('from', $request) : '',
            'until' => ( $request->has('until') && $request->until ) ? $this->getParsedDateFromRequest('until', $request) : '',
        ];

        $gamesQuery = $activity->games()->orderBy('created_at', 'desc');

        if ( !$search['incognito'] )
        {
            $gamesQuery->whereNotNull('user_id');
        }

        if ( !$search['incomplete'] )
        {
            $gamesQuery->where('complete', '=', 1);
        }

        if ( $search['from'] && $search['until'] )
        {
            $gamesQuery->where(function($gamesQuery) use ($search) {
                $gamesQuery->where('created_at', '>=', $search['from'])->where('created_at', '<=', $search['until']);
            });
        }
        else if ( $search['from'] )
        {
            $gamesQuery->where('created_at', '>=', $search['from']);
        }
        else if ( $search['until'] )
        {
            $gamesQuery->where('created_at', '<=', $search['until']);
        }

        $games = $gamesQuery->paginate( config('paginate.limit') );

        // Turn dates into strings, make sure the result is suitable from the borowser input
        if ( $search['from'] )
        {
            $search['from'] = $this->toBrowserInputFriendlyDateTime($search['from']);
        }
        if ( $search['until'] )
        {
            $search['until'] = $this->toBrowserInputFriendlyDateTime($search['until']);
        }

        if ( !$search['incomplete'] || !$search['incognito'] || $search['from'] || $search['until'] )
        {
            $games->appends($search);
        }

        return view('activities/results')->with([
            'activity' => $activity,
            'games' => $games,
            'filters' => $search,
        ]);
    }

    /**
     * Responds with activity QR Code formatted as SVG.
     * @param  \App\Activity $activity Activity model
     * @return \Illuminate\Http\Response
     */
    public function qrCode(Activity $activity)
    {
        $url = route('activity.show', ['activity' => $activity->id]);
        $qrCode = QrCode::size(500)->errorCorrection('H')->generate($url);

        return [
            'qrcode' => $qrCode,
        ];
    }

    /**
     * Responds with activity QR Code image formatted as PNG.
     * @param  \Appp\Activity $activity Activity model object
     * @return \Illuminate\Http\Response
     */
    public function qrCodeDownload(Activity $activity)
    {
        $headers = [
            'Content-type' => 'image/png',
            'Content-Disposition' => 'attachment; filename=activity-' . $activity->id . '-qr-code.png',
            'Pragma' => 'no-cache',
            'Cache-Control' => 'must-revalidate, post-check=0, pre-check=0',
            'Expires' => '0',
        ];

        $callback = function() use ($activity)
        {
            $handle = fopen('php://output', 'w');

            $url = route('activity.show', ['activity' => $activity->id]);
            $qrCode = QrCode::format('png')->size(500)->errorCorrection('H')->generate($url);

            fwrite($handle, $qrCode);
            fclose($handle);
        };

        return response()->stream($callback, 200, $headers);
    }

    /**
     * @param Activity                 $activity
     * @param ZooOptions               $zooOptions
     * @param LanguageOptions          $languageOptions
     * @param QuestionTypeOptions      $questionTypeOptions
     * @param DifficultyLevelOptions   $difficultyLevelOptions
     * @param SubjectOptions           $subjectOptions
     * @param AgeOfParticipantsOptions $ageOfParticipantsOptions
     *
     * @return \Illuminate\Contracts\View\Factory|\Illuminate\View\View
     * @throws \Illuminate\Auth\Access\AuthorizationException
     */
    public function duplicate(
        Activity $activity,
        ZooOptions $zooOptions,
        LanguageOptions $languageOptions,
        QuestionTypeOptions $questionTypeOptions,
        DifficultyLevelOptions $difficultyLevelOptions,
        SubjectOptions $subjectOptions,
        AgeOfParticipantsOptions $ageOfParticipantsOptions
    ) {
        $this->authorize('duplicate', Activity::class);

        $itemPositions = [];
        /** @var ActivityItem $activityItem */
        foreach ($activity->activityItems as $activityItem) {
            $relations = $activityItem->pivot;
            $itemPositions[] = $relations->getAttribute('position');
        }

        return view('activities/duplicate')->with(
        [
            'activity' => $activity,
            'zooOptions' => $zooOptions->options(),
            'languageOptions' => array_merge(['' => '-'], $languageOptions->options()),
            'questionTypeOptions' => $questionTypeOptions->options(),
            'difficultyLevelOptions' => $difficultyLevelOptions->options(),
            'activity_items' => old('activity_items') ? ActivityItem::find(old('activity_items')) : $activity->activityItems,
            'activity_item_positions' => $itemPositions,
            'discountVoucherOptions' => $this->getDiscountVoucherOptions(false),
            'subjectOptions' => $subjectOptions->options(),
            'ageOfParticipantsOptions' => $ageOfParticipantsOptions->options()
        ]);
    }

    public function storeDuplication(Activity $activity, Request $request, ImageService $imageService)
    {
        $newActivity = $this->storeActivity($request, $imageService);
        $newActivity->parent_id = $activity->id;
        $newActivity->is_template = false;

        if ( $request->hasFile('featured_image') === false && $request->remove_featured_image && $newActivity->hasFeaturedImage() )
        {
            $newActivity->deleteFeaturedImage();
            $newActivity->featured_image = null;
        }

        $newActivity->save();

        return redirect()->route('activity.show', [ 'activity' => $newActivity->id ]);
    }

    protected function storeActivity(Request $request, ImageService $imageService)
    {
        $activity = new Activity;
        $randomStringGenerator = new RandomStringGenerator(implode(range('A', 'Z')) . implode(range(0, 9)));

        $activity->title = $request->title;
        $activity->description = $request->description;
        $activity->difficulty_level = DifficultyLevelOptions::DEFAULT_LEVEL;
        $activity->playing_time = $request->playing_time;
        $activity->language = $request->language;
        $activity->contact_information = $request->contact_information;
        $activity->zoo = ZooOptions::DEFAULT_OPTION;
        $activity->keywords = $request->keywords ? $request->keywords : '';
        $activity->subject = $request->subject ? $request->subject : '';
        $activity->age_of_participants = $request->age_of_participants ? json_encode($request->age_of_participants) : '';
        $activity->is_template = (bool) $request->is_template;

        if ( $request->has('proximity_check') )
        {
            if ( $request->has('proximity_radius') && (int)$request->proximity_radius )
            {
                $activity->proximity_radius = (int)$request->proximity_radius;
            }
        } else {
            $activity->proximity_check = false;
        }

        $activity->user()->associate( auth()->user() );

        if ( auth()->user()->can('addDiscountVoucher', Activity::class) && $request->has('discount_voucher') )
        {
            $voucherId = $request->discount_voucher;

            if ( !$this->isEmptyDiscountVoucher($voucherId) )
            {
                $voucher = DiscountVoucher::find($request->discount_voucher);

                if ( $voucher ) {
                    $activity->discountVoucher()->associate($voucher);
                }
            }
        }

        if ( auth()->user()->can('addPromoted', Activity::class) && $request->has('promoted') )
        {
            $activity->promoted = (bool)$request->promoted;
        }

        if ($request->has('enforce_items_order')) {
            $activity->enforce_items_order = (int) $request->enforce_items_order;
        } else {
            $activity->enforce_items_order = 0;
        }

        $activity->pin = 0;
        $activity->save();
        $activity->pin = RandomUniqueNumberGenerator::generate($activity->id, 6);
        $activity->save();

        $this->saveInstructors($request, $activity);

        if ( $request->hasFile('featured_image') )
        {
            $fileName = $this->processFeaturedImage($imageService, $request, $activity->getStoragePath());
            DB::table('activities')
                ->where('id', $activity->id)
                ->update(['featured_image' => $fileName]);
        }

        if ( $request->has('activity_items') ) {
            $items = [];
            foreach( $request->activity_items as $index => $item ) {
                $items[$item] = [ 'position' => $index + 1 ];

            }

            if ( $items && count($items) > 0 ) {
                $activity->activityItems()->attach($items);
            }
        }

        return $activity;
    }

    protected function saveInstructors(Request $request, Activity $activity)
    {
        $foundInstructors = [];
        if ($request->instructors) {
            foreach($request->instructors as $userId) {
                $instructor = ActivityInstructor::where('user_id', $userId)->where('activity_id', $activity->id)->first();
                if (!$instructor) {
                    $instructor = new ActivityInstructor();
                    $instructor->activity_id = $activity->id;
                    $instructor->user_id = $userId;
                    $instructor->save();
                    $foundInstructors[] = $instructor->id;
                } else {
                    $foundInstructors[] = $instructor->id;
                }
            }
        }

        $allInstructors = ActivityInstructor::where('activity_id', $activity->id)->get();
        foreach ($allInstructors as $instructor) {
            if (in_array($instructor->id, $foundInstructors) === false) {
                $instructor->delete();
            }
        }
    }

    public function markStarted(Activity $activity)
    {
        if (auth()->user()->can('startStop', $activity)) {
            $activity->started = true;
            $activity->save();
        }

        return redirect()->route('activity.show', [
            'activity' => $activity->id
        ]);
    }

    public function markStopped(Activity $activity)
    {
        if (auth()->user()->can('startStop', $activity)) {
            $activity->started = false;
            $activity->save();
        }

        return redirect()->route('activity.show', [
            'activity' => $activity->id
        ]);
    }

    public function findInstructors(Request $request)
    {
        $response = [];
        $query = $request->get('query');
        if ($query && trim($query) !== '') {
            $users = User::where('name', $query)->orWhere('email', $query)->get();
            /** @var User $user */
            foreach ($users as $user) {
                $response[] = [
                    'user_id' => $user->id,
                    'name' => $user->name,
                    'email' => $user->email
                ];
            }
        }

        return $response;
    }

    public function findGame(Request $request)
    {
        $response = [
            'id' => null,
            'url' => null,
            'name' => null,
            'error' => null
        ];
        $pin = strtoupper($request->get('pin'));
        $nickname = $request->get('nickname', null);
        if ($pin && trim($pin) !== '') {
            $activity = Activity::where('pin', $pin)->first();
            if ($activity && $activity->started) {

                $response['name'] = $activity->title;
                $game = null;

                if ( Auth::check() ) {
                    $game = Game::where([
                        'activity_id' => $activity->id,
                        'user_id' => auth()->user()->id
                    ])->first();
                }

                if ( !$game ) {
                    $game = new Game;

                    if ( Auth::check() )
                    {
                        $game->user()->associate( auth()->user() );
                    } else if($nickname !== null) {
                        $game->nickname = $nickname;
                    }
                    $game->activity()->associate($activity);
                    $game->save();
                }

                $routeParams = [
                    'game' => $game->id,
                ];
                $response['url'] = route('game.play', $routeParams);
                $response['id'] = (string) $game->id;
            } else if($activity && Auth::check()) {
                $game = Game::where([
                    'activity_id' => $activity->id,
                    'user_id' => auth()->user()->id
                ])->first();
                if ($game) {
                    $routeParams = [
                        'game' => $game->id,
                    ];
                    $response['url'] = route('game.play', $routeParams);
                    $response['id'] = (string) $game->id;
                } else {
                    sleep(2);
                    $response['error'] = trans('general.messages.error.game-not-found');
                }
            } else {
                sleep(2);
                $response['error'] = trans('general.messages.error.game-not-found');
            }
        } else {
            sleep(2);
            $response['error'] = trans('general.messages.error.invalid-pin-code');
        }

        return response()->json($response);
    }

    public function sendGameStartedToLrs(Game $game)
    {
        $name = $game->getUserName();
        $email = $game->getUserEmail();
        $actor = new StatementData\Actor($name, $email);
        $verb = new StatementData\Verb(StatementData\Verb::TYPE_STARTED);
        $object = new StatementData\ObjectData(StatementData\ObjectData::TYPE_ACTIVITY, url('game.play', [
            'game' => $game->id
        ]), $game->activity()->first()->title);
        $statementData = new StatementData($actor, $verb, $object);

        ProcessLrsRequest::dispatch($statementData);
    }

    public function startMonitoring(Activity $activity)
    {
        $game = null;

        if ( Auth::check() ) {
            $game = Game::where([
                'activity_id' => $activity->id,
                'user_id' => auth()->user()->id
            ])->first();

            if ( !$game ) {
                $game = new Game;
                $game->user()->associate( auth()->user() );
                $game->activity()->associate($activity);
                $game->save();
            }

            return redirect()->route('game.monitoring', [
                'game' => $game->id
            ]);
        }

        return redirect()->route('activity.show', [
            'activity' => $activity->id
        ]);
    }
}
