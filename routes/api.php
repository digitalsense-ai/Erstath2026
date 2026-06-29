<?php

use Illuminate\Support\Facades\Route;

Route::get('/health', function () {
    return response()->json([
        'data' => [
            'status' => 'ok',
            'service' => 'erstatningshjaelp-api',
        ],
        'meta' => [],
        'errors' => [],
    ]);
});
