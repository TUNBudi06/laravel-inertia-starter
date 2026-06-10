<?php

use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Support\Facades\Auth;

uses(RefreshDatabase::class);

test('login page is displayed', function () {
    $response = $this->get('/');

    $response->assertStatus(200);
});

test('users can authenticate with remember me', function () {
    $user = User::factory()->create([
        'username' => 'testuser',
        'password' => bcrypt('password'),
    ]);

    $response = $this->post('/', [
        'username' => 'testuser',
        'password' => 'password',
        'remember' => 'on',
    ]);

    $this->assertAuthenticatedAs($user);
    $response->assertRedirect('/');

    $response->assertCookie(Auth::guard()->getRecallerName());
});
