/**
 * Created by abaddon on 27.01.2015.
 */
/*
 *Минификация изображений
 */
var gulp = require('gulp'),
    changed = require('gulp-changed'),
    imagemin = require('gulp-imagemin'),
    config = require('../config').forImage;

gulp.task('imagemin', function () {
    gulp.src(config.src)
        .pipe(changed(config.dest))
        .pipe(imagemin())
        .pipe(gulp.dest(config.dest));
});