/**
 * Created by abaddon on 27.01.2015.
 */
const gulp = require('gulp');
const cleanCSS = require('gulp-clean-css');
const size = require('gulp-filesize');
const config = require('../config').cssmin;

gulp.task('mincss', function () {
  return gulp.src(config.src)
    .pipe(cleanCSS({compatibility: 'ie9'}))
    .pipe(gulp.dest(config.dest))
    .pipe(size());
});