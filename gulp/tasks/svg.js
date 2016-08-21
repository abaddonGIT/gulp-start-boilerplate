/**
 * Created by Abaddon on 20.08.2016.
 */
"use strict";
var gulp = require('gulp'),
    config = require('../config').svg,
    svgmin = require('gulp-svgmin'),
    cheerio = require('gulp-cheerio'),
    svgSymbols = require('gulp-svg-symbols');

gulp.task('svg', function () {
    return gulp.src(config.src)
        .pipe(svgmin({
            js2svg: {
                pretty: true
            }
        }))
        .pipe(svgSymbols({
            svgClassname: 'svg-icons',
            id: 'icon-%f',
            className: '.icon-%f',
            transformData: function (svg, defaultData, options) {
                let id = defaultData.id;
                if (defaultData.style) {
                    defaultData.style = defaultData.style.replace(/cls/g, `${id}`);
                }
                return defaultData;
            }
        }))
        .pipe(gulp.dest(config.dist));
});

gulp.task("buildSvg", ['svg'], function () {
    return gulp.src(config.rebuildSrc)
        .pipe(cheerio({
            run: function ($) {
                $('symbol').each(function () {
                    let id = $(this).attr("id");
                    if ($(this).children().length) {
                        let i = 1;
                        $(this).children().each(function () {
                            let className = `${id}-${i}`;
                            $(this).attr("class", className);
                            i++;
                        });
                    }
                });
            },
            parserOptions: {xmlMode: true}
        }))
        .pipe(gulp.dest(config.dist));
});