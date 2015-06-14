/**
 * Created by abaddon on 27.01.2015.
 */
var gulp = require('gulp'),
    autoprefixer = require('gulp-autoprefixer'),
    error = require('../errors.js'),
    config = require('../config').prefix;

var browserSync = require("browser-sync");

gulp.task('prefix', function () {
    return gulp.src(config.src)
        .pipe(autoprefixer({
            browsers: config.versions
        }))
        .on('error', error.standartError)
        .pipe(gulp.dest(config.dest)).pipe(browserSync.reload({stream: true}));
});