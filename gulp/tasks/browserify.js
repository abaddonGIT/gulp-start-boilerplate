/**
 * Created by abaddon on 27.01.2015.
 */
var gulp = require('gulp'),
    browserify = require('browserify'),
    config = require('../config').browserify,
    babelify = require('babelify'),
    error = require('../errors.js'),
    source = require('vinyl-source-stream');


//gulp.task("browserify", function () {
//    return browserify({
//        entries: config.src,
//        debug: true
//    }).transform(babelify, {presets: ["es2015"]}).on('error', error.browserifyErrors)
//        .bundle()
//        .pipe(source(config.compileName))
//        .pipe(gulp.dest(config.dest));
//});

gulp.task("browserify", function () {
    return browserify(config.src)
        .bundle().on('error', error.browserifyErrors)
        .pipe(source(config.compileName))
        .pipe(gulp.dest(config.dest));
});