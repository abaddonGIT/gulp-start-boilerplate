/**
 * Created by Abaddon on 02.03.2016.
 */
var gulp = require("gulp"),
    fs = require("fs"),
    file = require('gulp-file'),
    config = require('../config').fonts,
    ttf2eot = require('gulp-ttf2eot'),
    cssfont64 = require('gulp-cssfont64'),
    ttf2woff = require('gulp-ttf2woff');

/*
 * Create woff file
 */
gulp.task("woff", function () {
    return gulp.src([config.src])
        .pipe(ttf2woff())
        .pipe(gulp.dest(config.dist));
});
/*
 * Create eot file
 */
gulp.task('eot', function () {
    return gulp.src([config.src])
        .pipe(ttf2eot())
        .pipe(gulp.dest(config.dist));
});

gulp.task('prepare', ['woff', 'eot'], function () {
    return gulp.src(config.woff)
        .pipe(cssfont64())
        .pipe(gulp.dest(config.dist));
});

gulp.task('fonts', ['prepare'], function () {
    var code = "";

    function getFolders() {
        return fs.readdirSync('./src/fonts')
            .filter(function (file) {
                var f = file.split(".");
                if (f.indexOf("woff") !== -1) {

                    code += '@font-face {' +
                        'font-family: "' + f[0] + '";' +
                        'src: local("' + f[0] + '"), data-uri("../fonts/' + f[0] + '.' + f[1] + '") format("woff");' +
                        '}' +
                        '.' + f[0] + '{' +
                        'font-family: ' + '"' + f[0] + '";' +
                        '}';
                }
            });
    }

    getFolders();

    return file('fonts.less', code).pipe(gulp.dest('./src/fonts'));
});