/**
 * Created by abaddon on 27.01.2015.
 */
var gulp = require('gulp'),
    cleanCSS = require('gulp-clean-css'),
    size = require('gulp-filesize'),
    config = require('../config').cssmin;

gulp.task('mincss', ['prefix'], function () {
    return gulp.src(config.src)
        .pipe(cleanCSS({compatibility: 'ie9'}))
        .pipe(gulp.dest(config.dest))
        .pipe(size());
});