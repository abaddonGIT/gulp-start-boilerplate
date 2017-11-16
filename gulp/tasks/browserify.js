/**
 * Created by abaddon on 27.01.2015.
 */
const gulp = require('gulp');
const browserify = require('browserify');
const config = require('../config').browserify;
const source = require('vinyl-source-stream');
const plumber = require('gulp-plumber');

gulp.task("browserify", function () {
  return browserify(config.src)
    .pipe(plumber())
    .pipe(source(config.compileName))
    .pipe(gulp.dest(config.dest));
});