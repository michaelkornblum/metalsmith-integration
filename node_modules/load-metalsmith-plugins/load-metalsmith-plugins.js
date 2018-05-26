'use strict';
var path = require('path');
var findup = require('findup-sync');
var multimatch = require('multimatch');

module.exports = function(options) {
  var plugins = [];
  var pkg = require(findup('package.json'));
  var scope = ['dependencies', 'devDependencies', 'peerDependencies'];

  var names = scope.reduce(function(result, prop) {
    return result.concat(Object.keys(pkg[prop] || {}));
  }, []);

  multimatch(names, 'metalsmith-*').forEach(function(name) {
    var requireAs = camelCase(name.replace('metalsmith-',''));
    plugins[requireAs] = require(name);
  });

  return plugins;
};

function camelCase(str) {
  return str.split('-').map(function (word, i) {
    if (i === 0) { return word.toLowerCase(); }
    return word.charAt(0).toUpperCase() + word.substr(1);
  }).join('');
}

