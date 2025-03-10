
<?php

use Illuminate\Support\Facades\Route;
use App\Models\User;
use Illuminate\Http\Request;

Route::get('/users', function () {
    return User::all();
});

Route::get('/users/{id}', function ($id) {
    return User::find($id);
});

Route::post('/user', function (Request $request) {
    $request->validate(
        [
            'first_name' => 'required',
            'last_name' => 'required',
            'email' => 'required|unique:users',
            'password' => 'required'
        ],
        [
            'first_name.required' => 'O primeiro nome é obrigatório',
            'last_name.required' => 'O último nome é obrigatório',
            'email.required' => 'O email é obrigatório',
            'email.unique' => 'O email já está em uso',
            'email.required' => 'O email é obrigatório',
            'password.required' => 'A senha é obrigatória'
        ]
    );

});
