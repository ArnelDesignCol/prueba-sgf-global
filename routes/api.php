<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/**
 * Users Route.
 */
Route::prefix('users')->group(function(){
    Route::post('/saveEmail', 'UsersController@saveEmail');
});

/**
 * Banners Route.
 */
Route::prefix('banners')->group(function(){
    Route::post('/getBanners', 'BannersController@getBanners');
});

/**
 * Complements Routes.
 */
Route::prefix('complements')->group(function(){
    Route::get('/getCities', 'ComplementsController@getCities');
});

/**
 * Products Routes.
 */
Route::prefix('products')->group(function(){
    Route::post('/getProducts', 'ProductsController@getProducts');
});