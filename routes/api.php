<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::get('/user', static function (Request $request) {
    return $request->user();
})->middleware('auth:api');

Route::group(['prefix' => 'games'], static function ()
{
    Route::post('answer', 'GameController@answer');
    Route::post('position', 'GameController@logPlayerPosition');
    Route::get('{game}/voucher', 'GameController@voucher');
    Route::get('{game}/get-count-of-ungraded-answers', 'GameController@getCountOfUngradedAnswers');
    Route::post('start-answering-timer', 'GameController@startAnsweringTimer');
    Route::post('close-question', 'GameController@closeQuestion');
    Route::post('get-position-of-players-who-play-my-game', 'GameController@getPositionOfPlayersWhoPlayMyActivity');
    Route::post('{game}/start-stop-flash-exercise', 'GameController@startStopFlashExercise');
    Route::get('{game}/get-active-flash-exercise', 'GameController@getActiveFlashExercise');
    Route::get('{game}/get-game-data', 'GameController@getGameData');
    Route::get('{game}/start-stop-game', 'GameController@startStopGame');
    Route::get('{game}/send-question-answer-to-lrs/{item}', 'GameController@sendQuestionAnswerToLrs');
    Route::get('{game}/send-game-completed-to-lrs', 'GameController@sendGameCompletedToLrs');
    Route::get('{game}/get-player-positions', 'GameController@getPlayerPositions');
    Route::get('{game}/add-rating/{rating}', 'GameController@addRating');
    Route::get('{game}/get-all-messages', 'GameController@getAllMessages');
    Route::post('{game}/add-new-message', 'GameController@addNewMessage');
    Route::get('{game}/delete-message/{id}', 'GameController@deleteMessage');
    Route::get('{game}/start-question/{id}', 'GameController@startQuestion');
});

Route::group(['prefix' => 'tasks'], static function () {
    Route::get('search', 'ActivityItemController@search');
    Route::get('{game}/send-game-started-to-lrs', 'ActivityController@sendGameStartedToLrs');
});

Route::group(['prefix' => 'manage', 'middleware' => 'auth.admin'], static function ()
{
    Route::delete('users/{user}/roles/{role}', 'UserController@removeRole');
    Route::get('google-analytics-rows', 'StatisticsController@getGaRows');
});

Route::group(['prefix' => 'badges'], static function ()
{
    Route::get('issuer', 'BadgeController@issuer')->name('api.badge.issuer');
    Route::get('key', 'BadgeController@publicKey')->name('api.badge.key');
    Route::get('mine', 'BadgeController@mine')->name('api.badge.mine');
    Route::post('mine', 'BadgeController@sent');
    Route::get('{badge}', 'BadgeController@badge')->name('api.badge.show');
    Route::get('{badge}/user/{user}', 'BadgeController@assertion')->name('api.badge.assertion');
});

Route::group(['prefix' => 'vouchers'], static function ()
{
    Route::delete('{voucher}', 'UserController@spendDiscountVoucher');
});

Route::group(['prefix' => 'game'], static function ()
{
    Route::get('{activity}/qrcode', 'ActivityController@qrCode')->name('api.activity.qrcode');
    Route::post('find-instructors', 'ActivityController@findInstructors');
    Route::post('find-game', 'ActivityController@findGame');
});

Route::group(['prefix' => 'grading'], static function () {
    Route::post('/{activity}/{answer}/update', 'GradingController@update');
    Route::get('get-question-data/{activityItem}', 'GradingController@getQuestionData');
    Route::get('get-other-graded-answers/{answer}', 'GradingController@getOtherGradedAnswers');
});

Route::group(['prefix' => 'dashboard'], static function() {
  Route::get('/user', static function (Request $request) {
      $user = $request->user();

      return [
          'id' => $user->id,
          'name' => $user->name,
          'email' => $user->email,
      ];
  })->middleware('auth:tokenapi');
  Route::get('/all', 'DashboardApiController@all');
});
