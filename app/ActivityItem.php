<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Spatie\Activitylog\Traits\LogsActivity;

use App\Options\ZooOptions;
use App\Options\QuestionTypeOptions;
use App\Options\LanguageOptions;

use Illuminate\Support\Facades\File;

class ActivityItem extends Model
{
    use LogsActivity;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'user_id',
    ];

    /**
     * Attributes that are appendable to JSON.
     *
     * @var array
     */
    protected $appends = [
        'icon_url',
        'image_url',
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'access_code',
        'access_code_clues',
        'created_at',
        'updated_at',
        'user_id',
    ];

    /**
     * Define attributes to be logged
     * @var array
     */
    protected static $logAttributes = ['title',];

    /**
     * Sets icon_url attribute to icon URL value.
     * @return string Icon URL
     */
    public function getIconUrlAttribute()
    {
        $iconUrl = asset('img/logos/logo-square.png');
        $typeMap = [
            1 => 'information',
            2 => 'one-correct-answer',
            3 => 'multiple-correct-answers',
            4 => 'freeform-answer',
            5 => 'match-pairs',
            6 => 'embedded-content',
            7 => 'photo',
        ];

        if ( array_key_exists( (int)$this->type, $typeMap ) )
        {
            $iconUrl = asset('img/icons/item/' . $typeMap[(int)$this->type] . '.png');
        }

        return $this->attributes['icon_url'] = $iconUrl;
    }

    /**
     * Sets image_url attribute based on image value.
     * @return string Image URL
     */
    public function getImageUrlAttribute()
    {
        return $this->attributes['image_url'] = $this->getImageUrl();
    }

    /**
     * Returns question type title
     * @return string Question type title or key
     */
    public function getQuestionType()
    {
        return resolve(QuestionTypeOptions::class)->value($this->type);

    }

    /**
     * Returns Zoo title
     * @return string Zoo title or key
     */
    public function getZoo()
    {
        return resolve(ZooOptions::class)->value($this->zoo);
    }

    /**
     * Returns language title
     * @return string Language title or key
     */
    public function getLanguage()
    {
        return resolve(LanguageOptions::class)->value($this->language);
    }

    /**
     * Determines if question is of certain type
     * @param  int     $type Question type identifier
     * @return boolean
     */
    private function isQuestionOfType(int $type)
    {
        return (int)$this->type === $type;
    }

    /**
     * Determines if question has type of embedded-content
     * @return boolean
     */
    public function isEmbeddedContent()
    {
        return $this->isQuestionOfType(6);
    }

    public function isMissingWord()
    {
        return $this->isQuestionOfType(8);
    }

    /**
     * Determines if question has type of one-correct-answer
     * @return boolean
     */
    public function isOneCorrectAnswer()
    {
        return $this->isQuestionOfType(2);
    }

    /**
     * Determines if question has type of multiple-correct-answers
     * @return boolean
     */
    public function isMultipleCorrectAnswers()
    {
        return $this->isQuestionOfType(3);
    }

    /**
     * Determines if question has type of match-pairs
     * @return boolean
     */
    public function isMatchPairs()
    {
        return $this->isQuestionOfType(5);
    }

    /**
     * Determines if question has type of freeform-answer
     * @return boolean
     */
    public function isFreeformAnswer()
    {
        return $this->isQuestionOfType(4);
    }

    /**
     * Get user account current social one belongs to.
     * @return User Application local user account
     */
    public function user()
    {
        return $this->belongsTo(User::class);
    }

    /**
     * Get options that belong to current ActivityItem
     * @return [type] [descripion]
     */
    public function options()
    {
        return $this->hasMany(ActivityItemOption::class);
    }

    /**
     * [pairs description]
     * @return [type] [description]
     */
    public function pairs()
    {
        return $this->hasMany(ActivityItemPair::class);
    }

    /**
     * Returns storage path hash for the ActivityItem
     * @return string SHA1 hash used for storage path
     */
    public function getStoragePath()
    {
        return self::getStoragePathForId($this->id);
    }

    /**
     * [getStoragePathForId description]
     * @param  int    $id [description]
     * @return [type]     [description]
     */
    public static function getStoragePathForId(int $id)
    {
        return 'activity_items/' . $id . '/';
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

    /**
     * Get question data if available, with limited selected columns.
     * This method is useful for construction of edit form.
     * @return array Array with data objects or an empty one
     */
    public function getQuestionData()
    {
        if ( $this->isOneCorrectAnswer() || $this->isMultipleCorrectAnswers() )
        {
            return $this->options()->get(['id', 'option', 'correct', 'image', 'activity_item_id'])->each(function($item, $key) {
                $item->correct = (bool)$item->correct;
            });
        }
        else if ( $this->isMatchPairs() )
        {
            return $this->pairs()->get(['id', 'option', 'image', 'option_match', 'image_match', 'activity_item_id']);
        }

        return [];
    }

    /**
     * Determines if Activity Item has an Image
     * @return boolean
     */
    public function hasImage() {
        return !!$this->image;
    }

    /**
     * Get full URL for image from public storage or respond with NULL
     * @return mixed Full public URL to image file or NULL
     */
    public function getImageUrl() {
        if ( $this->hasImage() ) {
            return asset('uploads/images/' . $this->getStoragePath() . $this->image);
        }

        return NULL;
    }

    /**
     * Deletes an image from storage if there is one.
     * Does not set the corresponding attribute to an empty value.
     * @return boolean
     */
    public function deleteImage()
    {
        if ( $this->hasImage() ) {
            return File::delete( public_path('uploads/images/' . $this->getStoragePath() . $this->image) );
        }

        return false;
    }

    /**
     * @return Activity|null
     */
    public function getActivity(): ?Activity
    {
        $activity = $this->activities()->first();
        if ($activity instanceof Activity) {
            return $activity;
        }
        return null;
    }
}
