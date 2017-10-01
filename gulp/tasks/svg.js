/**
 * Created by abaddon on 21.04.2017.
 * Для svg спрайтов
 */
const gulp = require('gulp'),
    svgSprite = require('gulp-svg-sprite'),
    svgmin = require('gulp-svgmin'),
    cheerio = require('gulp-cheerio'),
    replace = require('gulp-replace'),
    config = require('../config').svg;

gulp.task('svg', function () {
    return gulp.src(config.src)
        .pipe(svgmin({
            js2svg: {
                pretty: true
            }
        }))
        //Сносимненужные тэги со стилями
        .pipe(cheerio({
            run: function ($) {
                $('[fill]').removeAttr('fill');
                $('[stroke]').removeAttr('stroke');
                $('[style]').removeAttr('style');
                $('defs').remove();
                $('style').remove();
            },
            parseOptions: {xmlMode: true}
        }))
        .pipe(replace('&gt;', '>'))
        //Тут строим прайс
        .pipe(svgSprite({
            mode: {
                symbol: {
                    sprite: "../../sprite.svg",
                    render: {
                        less: {
                            dest: '../../../css/svgSprite.less',
                            template: './src/css/template/sprite_template.less'
                        }
                    }
                }
            }
        }))
        .pipe(gulp.dest(config.dist));
});