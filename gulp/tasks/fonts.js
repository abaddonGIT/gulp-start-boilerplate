/**
 * Created by Abaddon on 02.03.2016.
 */
var gulp = require("gulp"),
    fs = require("fs"),
    file = require('gulp-file'),
    config = require('../config').fonts,
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


gulp.task('prepare', ['woff'], function () {
    return gulp.src(config.woff)
        .pipe(cssfont64())
        .pipe(gulp.dest(config.dist));
});

gulp.task('fonts', ['prepare'], function () {
    var code = "";

    function getFolders() {
        return fs.readdirSync('./src/css/fonts')
            .filter(function (file) {
                var f = file.split(".");
                if (f.indexOf("woff") !== -1) {
                    code += '@font-face { font-family: "' + f[0] + '"; src: url("./fonts/' + f[0] + '.woff2") format("woff2"), url("./fonts/' + f[0] + '.woff") format("woff");';
                    code += "font-weight: normal; font-style: normal;}";
                }
            });
    }

    getFolders();

    return file('fonts.less', code).pipe(gulp.dest('./src/css'));
});
