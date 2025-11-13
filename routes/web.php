<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

Auth::routes();

Route::get('register', function(){
	abort(403, 'Unauthorized action.');
});

Route::post('register', function(){
	abort(403, 'Unauthorized action.');
});
// Route::get('/home', 'HomeController@index')->name('home');

Route::get('/contact-table', 'HomeController@dataTables')->name('contact-table');

Route::get('export-contacts', 'HomeController@exportContacts');

Route::post('join-us', 'ContactController@joinUs');

/*Route::get('/home', function(){
    return view('home');
} )->where('path', '.*')->name('home')->middleware('auth');*/

Route::get('/dashboard', 'HomeController@index')->name('home');

Route::get('/dashboard/add-lead', 'HomeController@index')->name('addlead');

Route::get('/not-found', function(){
    abort(404);
});

Route::get('/{path?}', function(){
    return view('welcome');
} )->where('path', '.*');

Route::get('/login', function(){
    return view('welcome');
} )->where('path', '.*')->name('login');

// Route::post('/leads', function(){
//     return view('welcome');
// } )->where('path', '.*')->name('login');

Route::resource('contact', 'ContactController');