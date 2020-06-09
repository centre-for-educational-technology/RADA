<?php

return [

    /*
    |--------------------------------------------------------------------------
    | Third Party Services
    |--------------------------------------------------------------------------
    |
    | This file is for storing the credentials for third party services such
    | as Stripe, Mailgun, SparkPost and others. This file provides a sane
    | default location for this type of information, allowing packages
    | to have a conventional place to find your various credentials.
    |
    */

    'mailgun' => [
        'domain' => env('MAILGUN_DOMAIN'),
        'secret' => env('MAILGUN_SECRET'),
    ],

    'ses' => [
        'key' => env('SES_KEY'),
        'secret' => env('SES_SECRET'),
        'region' => 'us-east-1',
    ],

    'sparkpost' => [
        'secret' => env('SPARKPOST_SECRET'),
    ],

    'stripe' => [
        'model' => App\User::class,
        'key' => env('STRIPE_KEY'),
        'secret' => env('STRIPE_SECRET'),
    ],

    'google' => [
        'client_id' => env('GOOGLE_CLIENT_ID'),
        'client_secret' => env('GOOGLE_CLIENT_SECRET'),
        'redirect' => env('GOOGLE_REDIRECT'),
        'analytics' => env('GOOGLE_ANALYTICS_KEY', null),
    ],
    'facebook' => [
        'client_id' => env('FACEBOOK_CLIENT_ID'),
        'client_secret' => env('FACEBOOK_CLIENT_SECRET'),
        'redirect' => env('FACEBOOK_REDIRECT'),
    ],
    'maps' => [
        'google' => [
            'api_key' => env('GOOGLE_MAPS_API_KEY'),
            'enable_street_view' => env('MAPS_ENABLE_STREET_VIEW', false),
        ],
        'allowed_distance' => env('MAPS_ALLOWED_DISTANCE', 25), // Allowed distance radius value, used within a Game
    ],
    'userreport' => [
        'key' => env('USERREPORT_KEY', null),
    ],
    'sentry' => [
        'dsn' => env('SENTRY_DSN', null),
    ],
    'activity' => [
        'pin_length' => env('ACTIVITY_PIN_LENGTH', 5),
    ],

];
