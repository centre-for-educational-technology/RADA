<?php

namespace App\Http\Controllers;

use App\Activity;
use App\User;
use Illuminate\Http\Request;

use App\Http\Requests;

use App\Game;

use App\GameAnswer;

use App\ActivityItem;

use App\PlayerPosition;

use App\DiscountVoucher;

use Illuminate\Support\Str;
use Intervention\Image\Facades\Image;

use Illuminate\Support\Facades\File;

use Illuminate\Support\Facades\Validator;

use App\Services\ImageService;

use Auth;

use Illuminate\Support\Facades\Event;

use Carbon\Carbon;

use Illuminate\Support\Facades\DB;

class GameController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('game.verify', ['except' => ['play', 'voucher', 'downloadPlayerPositions']]);
    }

    /**
     * Display game page for the specified activity.
     *
     * @param \App\Activity
     * @return \Illuminate\Http\Response
     */
    public function play(Request $request, Game $game)
    {
        if ( !$game->activity ) {
            abort(404);
        }

        if ( $game->user_id ) {
            if ( !( Auth::check() && Auth::user()->id === $game->user_id ) ) {
                abort(403);
            }
        }

        if ( auth()->user()->can('playGame', $game->activity) === false ) {
            abort(404);
        }

        $exitUrl = route('activity.index');
        if ( $request->has('exit_url') )
        {
            if ( Str::startsWith( $request->get('exit_url'), url('/') ) )
            {
                $exitUrl = $request->get('exit_url');
            }
        }

        return view('activities/play')->with([
            'game_data' => $game->getGameData(),
            'exit_url' => $exitUrl,
        ]);
    }

    /**
     * Answer a question
     * @param  \Illuminate\Http\Request   $request      Request object
     * @param  \App\Services\ImageService $imageService ImageService instance
     * @param  \App\Game                  $game         Game object
     * @return \Illuminate\Http\Response
     */
    public function answer(Request $request, ImageService $imageService, Game $game)
    {
        /** @var Activity $activity */
        $activity = $game->activity;

        /** @var ActivityItem $item */
        $item = $activity->activityItems()->where('id', $request->get('question_id'))->first();

        $answer = GameAnswer::where('game_id', $game->id)->where('activity_item_id', $item->id)->first();
        if (!$answer) {
            $answer = new GameAnswer();

            $answer->game()->associate( $game );
            $answer->activityItem()->associate( $item );
        }
        $answer->correct = true;
        $answer->is_answered = true;

        if ( $item->type === 2 || $item->type === 3 )
        {
            $chosenOptionIds = $request->get('options');
            if ( !is_array($chosenOptionIds) ) {
                $chosenOptionIds = [$chosenOptionIds];
            }
            $answer->answer = json_encode([
                'options' => $chosenOptionIds,
            ]);
            $correctOptionIds = [];
            foreach ( $item->options as $option ) {
                if ( $option->correct ) {
                    $correctOptionIds[] = $option->id;
                }
            }
            $answer->correct = ( count($correctOptionIds) === count($chosenOptionIds) && count( array_intersect($correctOptionIds, $chosenOptionIds) ) === count($correctOptionIds) );
        }
        else if ( $item->type === 4 || $item->type === 6 )
        {
            $answer->answer = json_encode([
                'text' => $request->get('text'),
            ]);
        }
        else if ( $item->type === 7 )
        {
            $validator = Validator::make(
                [
                    'file' => $request->file('image')
                ],
                [
                    'file' => 'required|image|mimes:jpeg,jpg,png',
                ]
            );

            if ( $validator->fails() ) {
                return response()->json(['error' => 'Missing or wrong image type.'], 403);
            }

            $originalExtension = $request->file('image')->getClientOriginalExtension();
            $fileName = $imageService->generateUniqueFileName('game_answer_image_', $originalExtension);

            $directoryPath = $game->getStoragePath();
            $imageService->process($request->file('image')->getRealPath(), $directoryPath, $fileName, 800);

            $answer->image = $fileName;
        }

        $answer->save();

        // Determine completion status and mark as completed
        $itemIds = $activity->belongsToMany(ActivityItem::class)->select('id')->pluck('id');
        $answeredItemIds = $game->answers()->select('activity_item_id')->pluck('activity_item_id');
        $unansweredItemIds = array_diff($itemIds->toArray(), $answeredItemIds->toArray());
        if ( count($unansweredItemIds) === 0 ) {
            $game->complete = true;
            $game->save();
        }

        return $answer->getGameData();
    }

    /**
     * @param Request $request
     * @param Game $game
     * @return array
     */
    public function startAnsweringTimer(Request $request, Game $game)
    {
        $activity = $game->activity;

        /** @var ActivityItem $activityItem */
        $activityItem = $activity->activityItems()->where('id', $request->get('question_id'))->first();

        $date = Carbon::now('UTC');
        $date->setTimezone('Europe/Tallinn');
        $answer = new GameAnswer();
        $answer->correct = false;
        $answer->is_answered = false;
        $answer->answering_start_time = $date;
        $answer->answer = json_encode([
            'options' => [],
        ]);
        $answer->game()->associate( $game );
        $answer->activityItem()->associate( $activityItem );

        $answer->save();

        return $answer->getGameData();
    }

    public function closeQuestion(Request $request, Game $game)
    {
        /** @var Activity $activity */
        $activity = $game->activity;

        /** @var ActivityItem $item */
        $item = $activity->activityItems()->where('id', $request->get('question_id'))->first();
        $answer = GameAnswer::where('game_id', $game->id)->where('activity_item_id', $item->id)->first();
        $answer->correct = false;
        $answer->is_answered = true;
        $answer->answer = json_encode([
            'options' => [],
        ]);
        $answer->save();

        // Determine completion status and mark as completed
        $itemIds = $activity->belongsToMany(ActivityItem::class)->select('id')->pluck('id');
        $answeredItemIds = $game->answers()->select('activity_item_id')->pluck('activity_item_id');
        $unansweredItemIds = array_diff($itemIds->toArray(), $answeredItemIds->toArray());
        if ( count($unansweredItemIds) === 0 ) {
            $game->complete = true;
            $game->save();
        }

        return $answer->getGameData();
    }

    public function getPositionOfPlayersWhoPlayMyActivity(Request $request, Game $game)
    {
        $players = [];
        /** @var Activity $activity */
        $activity = $game->activity;
        if ($activity->user_id !== null && $activity->user_id === $game->user_id) {
            $tenMinutesAgo = Carbon::now()->subMinutes(10)->toDateTimeString();
            $fiveMinutesAgo = Carbon::now()->subMinutes(5);
            $games = Game::where('activity_id', $activity->id)->where('complete', 0)->where('id', '<>', $game->id)->get();
            /** @var Game $game */
            foreach ($games as $_game) {
                /** @var User $player */
                $player = User::find($_game->user_id);
                $positions = PlayerPosition::where('game_id', $_game->id)
                    ->where('created_at', '>', $tenMinutesAgo)
                    ->orderBy('created_at', 'DESC')
                    ->take(1)
                    ->get();
                /** @var PlayerPosition $position */
                foreach ($positions as $position) {
                    $players[] = [
                        'game_id' => $position->game_id,
                        'lat' => $position->latitude,
                        'lng' => $position->longitude,
                        'status' => Carbon::parse($position->created_at) > $fiveMinutesAgo ? 'active' : 'inactive',
                        'name' => $player ? $player->name : '-'
                    ];
                }
            }
        } else {
            return 'false';
        }

        return $players;
    }

    /**
     * Log player position
     * @param  \Illuminate\Http\Request $request Request object
     * @param  \App\Game                $game    Game object
     * @return \Illuminate\Http\Response
     */
    public function logPlayerPosition(Request $request, Game $game)
    {
        $position = $request->get('position');

        if ( !$position )
        {
            return response()->json(['error' => 'Position data is missing.'], 400);
        }

        $playerPosition = new PlayerPosition();
        $playerPosition->game()->associate($game);
        $playerPosition->latitude = $position['coords']['latitude'];
        $playerPosition->longitude = $position['coords']['longitude'];
        if ( isset($position['coords']['heading']) )
        {
            $heading = (int)$position['coords']['heading'];
            if ( $heading >= 0 && $heading < 360 )
            {
                $playerPosition->heading = $heading;
            }
        }
        $playerPosition->timestamp = Carbon::createFromTimestamp((int)$position['timestamp'] / 1000);
        $playerPosition->created_at = Carbon::now();
        $playerPosition->save();

        return $playerPosition;
    }

    /**
     * Answer a question
     * @param  \Illuminate\Http\Request   $request      Request object
     * @param  \App\Game                  $game         Game object
     * @return \Illuminate\Http\Response
     */
    public function voucher(Request $request, Game $game)
    {
        if ( $game->user_id ) {
            if ( !( Auth::check() && Auth::user()->id === $game->user_id ) ) {
                return response()->json(['error' => 'Forbidden.'], 403);
            }
        }

        if ( !$game->user )
        {
            return response()->json(['error' => 'Forbidden.'], 403);
        }

        $responseData = [
            'hasVoucher' => false,
        ];
        $discountVoucher = $game->user->belongsToMany(DiscountVoucher::class)
            ->where('game_id', '=', $game->id)
            ->first();

        if ( $discountVoucher )
        {
            $responseData['hasVoucher'] = true;
            $responseData['voucher'] = [
                'title' => $discountVoucher->title,
            ];
        }

        return response()->json($responseData);
    }

    /**
     * Trigger download of CSV file with player positions
     * @param  \App\Game   $game Game object
     * @return \Illuminate\Http\Response
     */
    public function downloadPlayerPositions(Game $game)
    {
        $this->authorize('downloadPlayerPositions', $game->activity);

        $headers = [
            'Content-type' => 'text/csv',
            'Content-Disposition' => 'attachment; filename=game-' . $game->id . '-player-positions.csv',
            'Pragma' => 'no-cache',
            'Cache-Control' => 'must-revalidate, post-check=0, pre-check=0',
            'Expires' => '0',
        ];
        $columns = ['Latitude', 'Longitude', 'Heading', 'Timestamp',];
        $playerPositions = DB::table('player_positions')
                               ->select('latitude', 'longitude', 'heading', 'timestamp')
                               ->where('game_id', $game->id)
                               ->orderBy('timestamp', 'asc')
                               ->get();
        $callback = function() use ($playerPositions, $columns)
        {
            $handle = fopen('php://output', 'w');
            fputcsv($handle, $columns);

            if ( $playerPositions->count() > 0 )
            {
                foreach ($playerPositions as $position)
                {
                    fputcsv($handle, [$position->latitude, $position->longitude, $position->heading, $position->timestamp,]);
                }
            }

            fclose($handle);
        };

        return response()->stream($callback, 200, $headers);
    }
}
