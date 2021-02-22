<?php

namespace App;

use Illuminate\Database\Eloquent\Collection;
use Illuminate\Database\Eloquent\Model;
use Spatie\Activitylog\Traits\LogsActivity;

use App\Options\ZooOptions;
use App\Options\QuestionTypeOptions;
use App\Options\LanguageOptions;

use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Auth;

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
        'current_user_can_edit',
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
            8 => 'missing-word'
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
     * Determines if current user can edit ActivityItem.
     *
     * @return boolean
     */
    public function getCurrentUserCanEditAttribute()
    {
        return Auth::check() ? Auth::user()->can('update', $this) : false;
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
     * @return bool
     */
    public function isPhotoAnswer()
    {
        return $this->isQuestionOfType(QuestionTypeOptions::PHOTO);
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
        $points = $this->points;
        if ($this->isOneCorrectAnswer() || $this->isMultipleCorrectAnswers() || $this->isMatchPairs()) {
            $points = json_decode($points, true);
        }
        if ( $this->isOneCorrectAnswer() || $this->isMultipleCorrectAnswers() )
        {
            return $this->options()->get(['id', 'option', 'correct', 'image', 'activity_item_id'])->each(function($item, $key) use ($points) {
                $item->correct = (bool)$item->correct;
                $item->points = $points[$key] ?? '';
            });
        }
        else if ( $this->isMatchPairs() )
        {
            return $this->pairs()->get(['id', 'option', 'image', 'option_match', 'image_match', 'activity_item_id'])->each(function($item, $key) use ($points) {
                $item->points = $points[$key] ?? '';
            });
        }

        return [];
    }

    /**
     * @param GameAnswer $gameAnswer
     * @return bool|int|mixed
     */
    public function calculateTotalPoints(GameAnswer $gameAnswer)
    {
        $totalPoints = 0;
        $answerObject = $gameAnswer->answer !== null ? json_decode($gameAnswer->answer, true) : null;
        if ($answerObject !== null) {
            if ($this->isFreeformAnswer() || $this->isEmbeddedContent() || $this->isPhotoAnswer()) {
                return false;
            }
            $points = $this->points;
            if ($this->isOneCorrectAnswer()) {
                $points = json_decode($points, true);
                $answers = $answerObject['options'] ?? null;
                $options = $this->options()->get();
                /** @var ActivityItemOption $option */
                foreach ($options as $key => $option) {
                    if ($option->isCorrect()) {
                        $tmpPoints = $points[$key];
                        if (in_array($option->id, $answers)) {
                            $totalPoints += $tmpPoints;
                        }
                    }
                }
            } else if ($this->isMultipleCorrectAnswers()) {
                $points = json_decode($points, true);
                $answers = $answerObject['options'] ?? null;
                /** @var Collection $options */
                $options = $this->options()->get();
                $index = 0;
                $maxPoints = $options->sum(static function(ActivityItemOption $option) use ($points, &$index) {
                    $index ++;
                    return $option->isCorrect() ? (int) $points[$index-1] : 0;
                });
                $countCorrectOptions = $options->filter(static function(ActivityItemOption $option) {
                    return $option->isCorrect();
                })->count();
                $avgPoints = $maxPoints / $countCorrectOptions;
                $index = 0;
                $totalPoints = $options->sum(static function(ActivityItemOption $option) use ($avgPoints, $answers, $points, &$index) {
                    $index ++;
                    $inArray = in_array((int) $option->id, $answers, true);
                    return $option->isCorrect() && $inArray ? $points[$index-1] : ($inArray ? - $avgPoints : 0);
                });
                if ($totalPoints < 0) {
                    $totalPoints = 0;
                }
            } else if ($this->isMissingWord()) {
                $answer = $answerObject['text'] ?? null;
                if ($answer !== null) {
                    $text = \mb_strtoupper(\preg_replace('/\s+/', '', $this->missing_word));
                    if ($text === \mb_strtoupper(\preg_replace('/\s+/', '', $answer))) {
                        $totalPoints +=  (int) $points;
                    }
                }
            } else {
                $totalPoints = (int) $points;
            }
        } else if($this->isMatchPairs()) {
            $points = json_decode($this->points, true);
            foreach ($points as $point) {
                $totalPoints += (int) $point;
            }
        }
        return $totalPoints;
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

    public static function getMaxPoints(?string $points): int
    {
        if ($points === null) {
            return 0;
        }

        $array = json_decode($points, true);
        if (is_array($array)) {
            return array_sum($array);
        }

        return is_scalar($points) ? $points : 0;
    }

    public static function getMissingWordText(string $missingWord, string $questionMissingWord = '')
    {
        preg_match_all('/{[A-Za-z0-9\.\s-]+}/', $missingWord,  $matches);
        preg_match_all('/{[A-Za-z0-9\.\s-]+}/', $questionMissingWord,  $questionMatches);
        foreach($matches as $rowIndex => $row) {
            $equalCount = isset($questionMatches[$rowIndex]) && count($row) === count($questionMatches[$rowIndex]);
            foreach($row as $index => $match) {
                if ($equalCount) {
                    $questionMatch = null;
                    if($questionMissingWord !== '') {
                        $questionMatch = $questionMatches[$rowIndex][$index];
                    }
                    if ($match === $questionMatch) {
                        $word = str_replace(array('{', '}'), array('{<strong style="color:green;">', '</strong>}'), $match);
                    } else {
                        $questionWord = str_replace(array('{', '}'), array('<strong style="color:green;">', '</strong>}'), $questionMatch);
                        $word = str_replace(array('{', '}'), array('{<strong style="color:red;">', '</strong>'), $match);
                        $word .= ' | ' . $questionWord;
                    }
                } else {
                    $word = str_replace(array('{', '}'), array('{<strong style="color:green;">', '</strong>}'), $match);
                }
                $missingWord = implode($word, explode($match, $missingWord, 2));
            }
        }

        return $missingWord;
    }
}
