/******/ (() => { // webpackBootstrap
/*!**************************************!*\
  !*** ./resources/assets/js/login.js ***!
  \**************************************/
$(document).ready(function () {
  var signInWithEmailForm = $('#sign-in-with-email');
  $('.email-sign-in').on('click', function () {
    signInWithEmailForm.slideToggle();
  });
  $('#register-account').on('click', function (e) {
    var email = $('#email').val();

    if (email.trim()) {
      e.preventDefault();
      window.location = $(this).attr('href') + '?email=' + email.trim();
    }
  });
});
/******/ })()
;