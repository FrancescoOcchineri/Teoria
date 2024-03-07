<?php

    // Rotta predefinita di Laravel

use Illuminate\Support\Facades\Route;
    // Creo un gruppo di rotte separate da quelle in web
    Route::get('/testAdmin', function () {
        return view('admin');
    });

    Route::get('/testAdmin/{name}/{lastname}/{age?}', function (string $name, string $lastname, int $age=18) {
        $u = new stdClass();
        /* $u -> name = 'Mario';
        $u -> lastname = 'Rossi';
        $u -> city = 'San Francisco'; */
        $u->name = $name;
        $u->lastname = $lastname;
        $u->age = $age;
        
        return view('user', ['obj' => $u]);
    });