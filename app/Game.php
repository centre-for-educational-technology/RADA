<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Spatie\Activitylog\Traits\LogsActivity;

use App\Traits\UuidModel;

use Illuminate\Support\Facades\Log;

use App\Activity;

use Illuminate\Support\Facades\File;

/**
 * Class Game
 * @package App
 * @property $id
 * @property $activity_id
 * @property $user_id
 * @property $complete
 * @property $created_at
 * @property $updated_at
 * @property $activity
 * @property $user
 * @property $answers
 */
class Game extends Model
{
    use UuidModel;
    use LogsActivity;

    /**
     * The "type" of the primary key ID.
     *
     * @var string
     */
    protected $keyType = 'string';

    /**
     * Define that model does not use increments
     * @var boolean
     */
    public $incrementing = false;

    /**
     * Define attributes to be logged
     * @var array
     */
    protected static $logAttributes = ['activity_id', 'user_id', 'complete',];

    /**
     * Determine if game has been completed.
     * @return boolean Game completion status
     */
    public function isComplete() {
        return (bool)$this->complete;
    }

    /**
     * Get Activity current Game is connected with,.
     * @return App\Activity Activity object.
     */
    public function activity() {
        return $this->belongsTo(Activity::class);
    }

    /**
     * Get user account current social one belongs to.
     * @return App\User Application local user account
     */
    public function user()
    {
        return $this->belongsTo(User::class);
    }

    /**
     * Get answers for the current game.
     * @return App\GameAnswer [description]
     */
    public function answers()
    {
        return $this->hasMany(GameAnswer::class);
    }

    /**
     * [hasAnswerTo description]
     * @param  int     $id [description]
     * @return boolean     [description]
     */
    public function hasAnswerTo(int $id)
    {
        return $this->answers->keyBy('activity_item_id')->has($id);
    }

    /**
     * [getAnswerTo description]
     * @param  int    $id [description]
     * @return [type]     [description]
     */
    public function getAnswerTo(int $id)
    {
        return $this->answers->keyBy('activity_item_id')->get($id);
    }

    /**
     * Returns structure with data used for the game.
     * @return array All the data required for the game
     */
    public function getGameData() {
        /** @var Activity $activity */
        $activity = $this->activity;
        $userId = $this->user_id;
        $instructors = $activity->getInstructors()->filter(static function (ActivityInstructor $instructor) use ($userId) {
            return $instructor->user_id === $userId;
        });
        $data = [
            'id' => $this->id,
            'complete' => (bool)$this->complete,
            'answers' => [],
            'rating' => $this->rating,
            'player' => [
                'id' => $this->user_id,
                'is_admin' => Auth::check() && auth()->user()->isAdmin(),
                'is_instructor' => $instructors->count() > 0
            ]
        ];

        if ( $this->answers ) {
            /** @var GameAnswer $answer */
            foreach ( $this->answers as $answer ) {
                $data['answers'][$answer->activity_item_id] = $answer->getGameData();
            }
        }
        // Force answers to be interpreted as an object if empty
        if ( count($data['answers']) === 0 ) {
            $data['answers'] = (object)$data['answers'];
        }

        $data['activity'] = [
            'id' => $activity->id,
            'title' => $activity->title,
            'description' => $activity->description,
            'difficulty_level' => $activity->getDifficultyLevel(),
            'playing_time' => $activity->playing_time,
            'language' => $activity->getLanguage(),
            'contact_information' => $activity->contact_information,
            'featured_image' => $activity->getFeaturedImageUrl(),
            'zoo' => $activity->getZoo(),
            'proximity_check' => (bool)$activity->proximity_check,
            'proximity_radius' => $activity->proximity_radius ? $activity->proximity_radius : (int)config('services.maps.allowed_distance'),
            'questions' => [],
            'enforce_items_order' => (int) $activity->enforce_items_order > 0 ? 1 : 0,
            'started' => $activity->started
        ];

        if ( $activity->activityItems ) {
            $position = 1;
            foreach( $activity->activityItems as $item ) {
                if ( $item->pivot ) {
                    $position = $item->pivot->getAttribute('position');
                }

                $tmp = [
                    'id' => $item->id,
                    'title' => $item->title,
                    'description' => $item->description,
                    'image_url' => $item->getImageUrl(),
                    'embedded_content' => $item->embedded_content,
                    'missing_word' => $item->missing_word,
                    'type' => $item->type,
                    'latitude' => $item->latitude,
                    'longitude' => $item->longitude,
                    'access_code' => $item->access_code,
                    'access_code_clues' => $item->access_code_clues,
                    'read_more' => $item->read_more,
                    'options' => [],
                    'pairs' => [],
                    'position' => $position,
                    'answering_time_check' => $item->answering_time_check,
                    'answering_time' => $item->answering_time,
                    'is_flash' => $item->is_flash
                ];

                if ( $item->options ) {
                    foreach( $item->options as $option ) {
                        $tmp['options'][] = [
                            'id' => $option->id,
                            'option' => $option->option,
                            'image_url' => $option->getImageUrl(),
                            'correct' => (bool) $option->correct,
                        ];
                    }
                }

                if ( $item->pairs ) {
                    foreach( $item->pairs as $pair ) {
                        $tmp['pairs'][] = [
                            'id' => $pair->id,
                            'option' => $pair->option,
                            'image_url' => $pair->getOptionImageUrl(),
                            'option_match' => $pair->option_match,
                            'image_match_url' => $pair->getOptionMatchImageUrl(),
                        ];
                    }
                }

                $data['activity']['questions'][] = $tmp;

                $position ++;
            }
        }

        return $data;
    }

    /**
     * Get game completion percentage.
     * @return bool
     */
    public function getCompletionPercentage() {
        if ( $this->isComplete() )
        {
            return 100;
        }

        $itemIds = $this->activity->belongsToMany(ActivityItem::class)->select('id')->pluck('id');

        if ( count($itemIds) === 0 )
        {
            return 0;
        }

        $answersCount = $this->answers()->whereIn('activity_item_id', $itemIds)->count();

        return round($answersCount / count($itemIds) * 100, 0, PHP_ROUND_HALF_UP);
    }

    /**
     * Returns storage path hash for the ActivityItem
     * @return string Storage path
     */
    public function getStoragePath()
    {
        return Activity::getStoragePathForId($this->activity_id) . $this->id . '/';
    }

    /**
     * Delete storage if one exists
     * @return boolean
     */
    public function deleteFileStorage()
    {
        $fullPath = public_path('uploads/images/' . $this->getStoragePath());

        if ( File::exists($fullPath) && File::isDirectory($fullPath) )
        {
            File::deleteDirectory($fullPath);
        }

        return false;
    }

    public function getUserName()
    {
        if ($this->user_id) {
            return $this->user->name;
        }

        return $this->nickname;
    }

    public function getUserEmail()
    {
        if ($this->user_id) {
            return $this->user->email;
        }

        return 'no-mail@mail.dev';
    }

    public function getUserRole()
    {
        return Auth::check() && auth()->user()->isAdmin() ? 'admin' : 'user';
    }
}
