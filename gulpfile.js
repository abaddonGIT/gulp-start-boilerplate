/**
 * Created by abaddon on 18.12.2014.
 */
(function (require) {
    "use strict";
    var gulp = require('gulp');

    var gulpLoadPlugins = require('gulp-load-plugins');
    var plugins = gulpLoadPlugins();

    /*
     *Оптимизация сериптов
     */
    gulp.task("js", function () {
        gulp.src("js/*.js")
            .pipe(plugins.jshint(".jshintrc"))
            .pipe(plugins.jshint.reporter("default"))
            .pipe(plugins.concat("all.min.js"))
            .pipe(plugins.uglify())
            .pipe(gulp.dest("dist/js/"));
    });
    /*
     *Оптимизация стилей
     */
    gulp.task("css", function () {
        gulp.src("css/*.css")
            .pipe(plugins.concat("style.min.css"))
            .pipe(plugins.autoprefixer({
                browsers: ['last 2 versions']
            }))
            .pipe(plugins.csso())
            .pipe(gulp.dest("dist/css/"));
    });
    /*
     *Оптимизация изображений
     */
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
            .pipe(plugins.cache(plugins.imagemin({optimizationLevel: 5, progressive: true, interlaced: true})))
            .pipe(gulp.dest("dist/img/"));
    });
    /*
     *Замена адресов и перенос файлов
     */
    gulp.task("html", function () {
        gulp.src("*.html")
            .pipe(plugins.replace(/style.css/g, "style.min.css"))
            .pipe(plugins.replace(/base.js/g, "base.min.js"))
            .pipe(gulp.dest("dist/"));
    });
    /*
     * Наблюдатель
     */
    gulp.task("watch", function () {
        gulp.watch("css/*.css", ['css']);
        gulp.watch("js/*js", ['js']);
        gulp.watch("img/**/*", ['img']);
    });
    /*
     *Сборка проекта
     */
    gulp.task("default", function () {
        gulp.start("js", "css", "img", "html");
    });
}(require));