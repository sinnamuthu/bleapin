// webpack.mix.js
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

mix.react('resources/js/app.js', 'public/js')
   .react('resources/js/dashboard-app.js', 'public/js')
   .sass('resources/sass/app.scss', 'public/css');

// --- Add this block to properly handle .mjs (ES modules) coming from node_modules.
// This tells Webpack 4 to treat .mjs as javascript/auto and adds .mjs to resolvable extensions.
mix.webpackConfig({
  resolve: {
    extensions: ['.js', '.jsx', '.json', '.mjs']
  },
  module: {
    rules: [
      {
        test: /\.mjs$/,
        include: /node_modules/,
        type: 'javascript/auto'
      }
    ]
  }
});
