<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;
use Inertia\Inertia;

class MainController extends Controller
{
    public function index(Request $request){
        return Inertia::render("Auth/LoginPage");
    }

    public function loginForm(Request $request)
    {
        $credentials = $request->validate([
            'username' => 'required',
            'password' => 'required',
            'remember' => 'nullable|boolean',
        ]);

        $user = User::where('username', $credentials['username'])->first();

        if (!$user || !($user->password === $credentials['password'])) {
            return response()->json([
                'errors' => [
                    'username' => 'Invalid credentials',
                ]
            ], 422);
        }

        auth()->login($user, $credentials['remember'] ?? false);

        return response()->json([
            'message' => 'Login successful',
        ]);
    }
}
