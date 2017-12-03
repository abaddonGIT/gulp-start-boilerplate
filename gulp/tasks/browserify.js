const gulp = require('gulp');
const browserify = require('browserify');
const config = require('../config').browserify;
const error = require('../errors.js');
const source = require('vinyl-source-stream');

gulp.task("browserify", function () {
  return browserify(config.src)
    .bundle().on('error', error.browserifyErrors)
    .pipe(source(config.compileName))
    .pipe(gulp.dest(config.dest));
});