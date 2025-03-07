
<?php
use Illuminate\Support\Facades\Route;
use App\Models\User;

Route::get('/users', function () {
    return User::all();
});

Route::get('/users/{id}', function ($id) {
    return User::find($id);
});