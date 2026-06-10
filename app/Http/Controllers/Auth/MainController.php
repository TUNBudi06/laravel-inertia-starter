<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
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

    public function logout(Request $request)
    {
        Auth::logout();
        $request->session()->invalidate();
        $request->session()->regenerateToken();
        return redirect()->route('login-logout');
    }
}
