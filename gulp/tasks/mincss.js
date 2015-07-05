/**
 * Created by abaddon on 27.01.2015.
 */
var gulp = require('gulp'),
    mincss = require('gulp-minify-css'),
    size = require('gulp-filesize'),
    config = require('../config').cssmin;

gulp.task('mincss', ['prefix'], function () {
    return gulp.src(config.src)
        .pipe(mincss({keepBreaks: true, keepSpecialComments: '*'}))
        .pipe(gulp.dest(config.dest))
        .pipe(size());
});