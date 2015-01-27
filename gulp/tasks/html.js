/**
 * Created by abaddon on 27.01.2015.
 */
var gulp = require('gulp'),
    config = require('../config').html;

gulp.task("html", function () {
    gulp.src(config.src)
        .pipe(gulp.dest(config.dest));

    gulp.src(config.vendorsSrc).pipe(gulp.dest(config.vendorsDest));
});