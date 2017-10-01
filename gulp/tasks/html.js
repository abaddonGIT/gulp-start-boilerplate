/**
 * Created by abaddon on 27.01.2015.
 */
var gulp = require('gulp'),
    config = require('../config').html;

gulp.task("html", function () {
    gulp.src(config.src).pipe(gulp.dest(config.dest));
    gulp.src("./src/css/**/*.css").pipe(gulp.dest('./dist/css'));

    gulp.src("./src/css/fonts/**").pipe(gulp.dest("./dist/css/fonts"));
    gulp.src(config.vendorsSrc).pipe(gulp.dest(config.vendorsDest));
    gulp.src(config.fontsSrc).pipe(gulp.dest(config.fontsDest));
});