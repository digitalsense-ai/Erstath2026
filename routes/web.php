<?php

use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return response()->json([
        'data' => [
            'status' => 'ok',
            'service' => 'erstatningshjaelp-web',
        ],
        'meta' => [],
        'errors' => [],
    ]);
});
