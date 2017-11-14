<?php

return [

    /*
    |--------------------------------------------------------------------------
    | Authentication Language Lines
    |--------------------------------------------------------------------------
    |
    | The following language lines are used during authentication for various
    | messages that we need to display to the user. You are free to modify
    | these language lines according to your application's requirements.
    |
    */

    'failed' => 'Käyttäjänimi tai salasana on väärä.',
    'throttle' => 'Liian monta kirjautumisyritystä. Yrita uudestaan  :seconds sekunnin kuluttua.',
    'general' => [
        'email' => 'Sähköpostiosoite',
        'password' => 'Salasana',
        'confirm-password' => 'Vahvista salasana',
        'captcha' => 'CAPTCHA',
    ],
    'login' => [
        'form' => [
            'heading' => 'Kirjaudu sisään',
            'text' => 'Käveleskele eläintarhassa ja vastaa kysymykset.',
            'remember' => 'Muista minut',
            'btn' => [
                'login' => 'Kirjaudu sisään',
                'reset' => 'Unohditko salasanasi?',
                'google' => 'Kirjaudu sisään Google-käyttäjänimelläsi',
                'facebook' => 'Kirajudi sisään Facebook-käyttäjanimelläsi',
            ],
            'social-networks'=> 'Kirjaudi sisään sosiaalsten verkkojen kautta',
        ],
    ],
    'register' => [
        'form' => [
            'heading' => 'Rekisteröydy',
            'name' => 'Nimi',
            'btn' => [
                'register' => 'Rekisteröydy',
            ],
        ],
    ],
    'reset' => [
        'form' => [
            'heading' => 'Aseta salasana uudelleen',
            'btn' => [
                'send-password-reset-link' => 'Läheta linkki salasanan uudistamiseen',
                'reset-password' => 'Aseta salasana uudelleen',
            ],
        ],
    ],
    'logout' => [
        'form' => [
            'btn' => [
                'logout' => 'Kirjaudu ulos',
            ],
        ],
    ],

];