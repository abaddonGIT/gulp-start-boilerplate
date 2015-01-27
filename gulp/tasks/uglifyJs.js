/**
 * Created by abaddon on 27.01.2015.
 */
var gulp = require('gulp'),
    uglify = require('gulp-uglify'),
    size = require('gulp-filesize'),
    config = require('../config').uglify;

gulp.task('uglifyJs', ['browserify'], function () {
    return gulp.src(config.src)
        .pipe(uglify())
        .pipe(gulp.dest(config.dest))
        .pipe(size());
});