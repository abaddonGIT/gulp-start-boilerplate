/**
 * Created by abaddon on 18.12.2014.
 */
var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var csso = require('gulp-csso');
var imagemin = require('gulp-imagemin');
var autoprefix = require('gulp-autoprefixer');
var spritesmith = require('gulp.spritesmith');
//Оптимизация сериптов
gulp.task("js", function () {
    gulp.src("js/*.js")
        .pipe(concat("all.min.js"))
        .pipe(uglify())
        .pipe(gulp.dest("dist/js/"));
});
//Оптимизация стилей
gulp.task("css", function () {
    gulp.src("css/*.css")
        .pipe(concat("style.min.css"))
        .pipe(autoprefix({
            browsers: ['last 2 versions']
        }))
        .pipe(csso())
        .pipe(gulp.dest("dist/css/"));
});
//Оптимизация изображений
gulp.task("img", function () {
    //Создание спрайтов
    var sprite = gulp.src("img/sp/*.png")
        .pipe(spritesmith({
            imgName: "sp.png",
            cssName: "sp.less",
            cssFormat: "less",
            padding: 5,
            engineOpts: {
                "imagemagick": true
            }
        }));
    sprite.img.pipe(gulp.dest('img/'));
    sprite.css.pipe(gulp.dest('css/'));
    //Минификация изображений
    gulp.src(['img/*.jpg', 'img/*.png', 'img/*.gif'])
        .pipe(imagemin())
        .pipe(gulp.dest("dist/img/"));
});