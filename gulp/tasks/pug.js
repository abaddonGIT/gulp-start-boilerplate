/**
 * Created by abaddon on 01.10.2017.
 */
const pug = require('gulp-pug');
const gulp = require('gulp');
const config = require('../config').pug;

gulp.task('pug', function () {
    return gulp.src(config.src)
        .pipe(pug())
        .pipe(gulp.dest(config.dist))
});