/**
 * Created by abaddon on 27.01.2015.
 */
var gulp = require('gulp'),
    config = require('../config').html;

gulp.task("html", function () {
    gulp.src(config.src).pipe(gulp.dest(config.dest));
    gulp.src("./src/css/**").pipe(gulp.dest('./dist/css'));

    gulp.src(config.vendorsSrc).pipe(gulp.dest(config.vendorsDest));
    gulp.src(config.fontsSrc).pipe(gulp.dest(config.fontsDest));
});