/**
 * Created by abaddon on 01.10.2017.
 */
const gulp = require('gulp');
const less = require('gulp-less');
const config = require('../config').less;

gulp.task('less', function () {
    return gulp.src(config.src)
        .pipe(less())
        .pipe(gulp.dest(config.dist))
});