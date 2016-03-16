/**
 * Created by abaddon on 16.03.2016.
 */
var gulp = require("gulp"),
    svgstore = require("gulp-svgstore"),
    config = require("../config").svg,
    path = require("path"),
    cheerio = require('gulp-cheerio'),
    svgmin = require("gulp-svgmin");

gulp.task('svg', function () {
    return gulp
        .src(config.src)
        .pipe(cheerio({
            run: function ($) {
                $('[fill]').removeAttr('fill');
            },
            parserOptions: {xmlMode: true}
        }))
        .pipe(svgmin(function (file) {
            var prefix = path.basename(file.relative, path.extname(file.relative));
            return {
                plugins: [{
                    cleanupIDs: {
                        prefix: prefix + '-',
                        minify: true
                    }
                }]
            }
        }))
        .pipe(svgstore())
        .pipe(gulp.dest(config.dist));
});