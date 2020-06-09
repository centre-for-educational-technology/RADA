const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.js('resources/assets/js/app.js', 'public/js')
    .js('resources/assets/js/create_edit_activity_item.js', 'public/js')
    .js('resources/assets/js/create_edit_activity.js', 'public/js')
    .js('resources/assets/js/play.js', 'public/js')
    .js('resources/assets/js/stopped.js', 'public/js')
    .js('resources/assets/js/monitoring.js', 'public/js')
    .js('resources/assets/js/statistics.js', 'public/js')
    .js('resources/assets/js/profile.js', 'public/js')
    .js('resources/assets/js/welcome.js', 'public/js')
    .js('resources/assets/js/search_activities.js', 'public/js')
    .js('resources/assets/js/qr_code_modal.js', 'public/js')
    .js('resources/assets/js/login.js', 'public/js')
    .js('resources/assets/js/discount_vouchers.js', 'public/js')
    .js('resources/assets/js/manage_users.js', 'public/js')
    .js('resources/assets/js/grading.js', 'public/js')
    .js('resources/assets/js/edit_profile.js', 'public/js')
    .sass('resources/assets/sass/app.scss', 'public/css')
    .copy('node_modules/bootstrap-sass/assets/fonts', 'public/build/fonts')
    .copy('node_modules/mdi/fonts', 'public/build/fonts');

if (mix.inProduction()) {
    mix.version();
}
