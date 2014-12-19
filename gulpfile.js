/**
 * Created by abaddon on 18.12.2014.
 */
var gulp = require('gulp');

var gulpLoadPlugins = require('gulp-load-plugins');
var replace = require('gulp-html-replace');
var plugins = gulpLoadPlugins();
console.log(plugins);
//Оптимизация сериптов
gulp.task("js", function () {
    gulp.src("js/*.js")
        .pipe(plugins.concat("all.min.js"))
        .pipe(plugins.uglify())
        .pipe(gulp.dest("dist/js/"));
});
//Оптимизация стилей
gulp.task("css", function () {
    gulp.src("css/*.css")
        .pipe(plugins.concat("style.min.css"))
        .pipe(plugins.autoprefixer({
            browsers: ['last 2 versions']
        }))
        .pipe(plugins.csso())
        .pipe(gulp.dest("dist/css/"));
});
//Оптимизация изображений
gulp.task("img", function () {
    //Создание спрайтов
    var sprite = gulp.src("img/sp/*.png")
        .pipe(plugins.spritesmith({
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
        .pipe(plugins.imagemin())
        .pipe(gulp.dest("dist/img/"));
});
//Перенос файлов
gulp.task("html", function () {
    gulp.src("*.html")
        .pipe(replace({
            css: "css/style.min.css",
            js: "js/all.min.js"
        }))
        .pipe(gulp.dest("dist/"));
});