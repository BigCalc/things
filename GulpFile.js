// © 2014 QUILLU INC.
// things GulpFile
'use strict';

var gulp     = require('gulp'),
    jsonlint = require('gulp-json-lint'),
    jshint   = require('gulp-jshint'),
    shell    = require('gulp-shell'),
    sloc = require('gulp-sloc');

gulp.task('install', shell.task([
  'npm install',
  'npm prune'
]));

gulp.task('test', function () {
  return gulp.src('test.js')
    .pipe(shell([
      'node  <%= file.path %>'
    ], {ignoreErrors: true}));
});

gulp.task('jsonlint', function () {
  gulp.src('./*.json')
    .pipe(jsonlint())
    .pipe(jsonlint.report('verbose'));
});

gulp.task('jshint', function () {
  return gulp.src('./*.js')
    .pipe(jshint())
    .pipe(jshint.reporter('default'));
});

gulp.task('sloc', function () {
  gulp.src(['./*.js'])
    .pipe(sloc());
});

gulp.task('tdd', ['test'], function () {
  gulp.watch('./*.js', ['test']);
});

// Default Task
gulp.task('default', ['jsonlint', 'jshint', 'test']);
