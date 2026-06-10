<?php

use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;

uses(RefreshDatabase::class);

test('login page is displayed', function () {
    $response = $this->get(route('login'));

    $response->assertStatus(200);
});

test('user cannot login with invalid credentials', function () {
    $response = $this->post(route('login-post'), [
        'username' => 'wronguser',
        'password' => 'wrongpassword',
    ]);

    $response->assertSessionHasErrors('username');
    $this->assertGuest();
});

test('user can login with valid credentials', function () {
    $user = User::factory()->create([
        'username' => 'testuser',
        'password' => bcrypt('password123'),
    ]);

    $response = $this->post(route('login-post'), [
        'username' => 'testuser',
        'password' => 'password123',
    ]);

    $response->assertRedirect('/');
    $this->assertAuthenticatedAs($user);
});
