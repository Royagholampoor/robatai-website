<?php

return [
    'driver' => env('REDIS_DRIVER', 'file'),
    'host' => env('REDIS_HOST', 'localhost'),
    'password' => env('REDIS_PASSWORD', null),
    'port' => env('REDIS_PORT', 6379),
];
