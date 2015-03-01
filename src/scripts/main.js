// Require Node modules in the browser thanks to Browserify: http://browserify.org
var bespoke = require('bespoke'),
  greeny = require('bespoke-theme-greeny'),
  keys = require('bespoke-keys'),
  touch = require('bespoke-touch'),
  progress = require('bespoke-progress'),
  forms = require('bespoke-forms');

// Bespoke.js
bespoke.from('article', [
  greeny.theme(),
  greeny.scale(),
  keys(),
  touch(),
  progress(),
  forms()
]);
