<?php

namespace App\Traits;

use Webpatser\Uuid\Uuid;

trait UuidModel
{
    public static function bootUuidModel()
    {
        static::creating(function($model) {
            $model->{$model->getKeyName()} = Uuid::generate(4);
        });

        static::saving(function($model) {
            $original = $model->getRawOriginal($model->getKeyName());

            if ( $original !== $model->id ) {
                $model->id = $original;
            }
        });
    }
}
