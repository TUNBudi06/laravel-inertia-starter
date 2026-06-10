<?php

use Illuminate\Support\Facades\Route;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

Route::get('/', [\App\Http\Controllers\Auth\MainController::class, 'index'])->name('login');
Route::post('/login',[\App\Http\Controllers\Auth\MainController::class,'loginForm'])->name('login-post');

Route::prefix('dashboard')->middleware('auth')->group(function (){
    Route::get('/', [\App\Http\Controllers\DashboardController::class, 'index'])->name('dashboard');
    Route::get('member', [\App\Http\Controllers\MemberController::class, 'index'])->name('member.index');
    Route::post('member/store', [\App\Http\Controllers\MemberController::class, 'store'])->name('member.store');
    Route::put('member/{member}', [\App\Http\Controllers\MemberController::class, 'update'])->name('member.update');
    Route::delete('member/{member}', [\App\Http\Controllers\MemberController::class, 'destroy'])->name('member.destroy');
    Route::get('logout',[\App\Http\Controllers\Auth\MainController::class,'logout'])->name('login-logout');
});
