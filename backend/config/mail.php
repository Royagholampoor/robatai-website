<?php

return [
    'from' => [
        'address' => env('MAIL_FROM_ADDRESS', 'noreply@robatai.com'),
        'name' => env('MAIL_FROM_NAME', 'Robatai'),
    ],
    'host' => env('MAIL_HOST', 'smtp.mailtrap.io'),
    'port' => env('MAIL_PORT', 2525),
    'username' => env('MAIL_USERNAME'),
    'password' => env('MAIL_PASSWORD'),
];
