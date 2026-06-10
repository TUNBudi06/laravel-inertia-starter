<?php

use Illuminate\Support\Facades\Route;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

Route::get('/', [\App\Http\Controllers\Auth\MainController::class, 'index'])->name('login');
Route::post('/login',[\App\Http\Controllers\Auth\MainController::class,'loginForm'])->name('login-post');


Route::prefix('dashboard')->middleware('auth')->group(function (){
    Route::get('/', [\App\Http\Controllers\DashboardController::class, 'index'])->name('dashboard');
});
