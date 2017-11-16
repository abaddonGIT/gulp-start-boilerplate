/**
 * Created by abaddon on 01.10.2017.
 */
const gulp = require('gulp');
const less = require('gulp-less');
const config = require('../config').less;
const plumber = require('gulp-plumber');
const autoprefixer = require('gulp-autoprefixer');

gulp.task('less', function () {
  return gulp.src(config.src)
    .pipe(plumber())
    .pipe(less())
    .pipe(autoprefixer({
      browsers: config.versions
    }))
    .pipe(gulp.dest(config.dist))
});