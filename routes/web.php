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

Route::view('/intake', 'frontend-experience.intake')->name('frontend-experience.intake');
Route::redirect('/prototype/frontend', '/intake');
