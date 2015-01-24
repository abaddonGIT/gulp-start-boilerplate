/**
 * Created by abaddon on 18.12.2014.
 */
(function (require) {
    "use strict";
    var gulp = require('gulp'),
        fs = require('fs'),
        exec = require('child_process').exec,
        projectPath = process.cwd(),
        bowerFolder = "bower_components",
        bowerJson = fs.readFileSync('bower.json', 'utf8'),
        gulpLoadPlugins = require('gulp-load-plugins'),
        del = require('del'),
        Q = require('q'),
        plugins = gulpLoadPlugins();

    /*
     *Оптимизация сериптов
     */
    gulp.task("js", function () {
        gulp.src("js/*.js")
            .pipe(plugins.jshint(".jshintrc"))
            .pipe(plugins.jshint.reporter("default"))
            .pipe(plugins.concat("base.min.js"))
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
    gulp.task("sp", function () {
        var sprite = gulp.src("img/sp/*.png")
            .pipe(plugins.spritesmith({
                imgName: "sp.png",
                cssName: "sp.less",
                imgPath: "../img/sp.png",
                cssFormat: "less",
                padding: 5,
                engineOpts: {
                    "imagemagick": true
                }
            }));
        sprite.img.pipe(gulp.dest('img/'));
        sprite.css.pipe(gulp.dest('css/'));
    });
    /*
     *Минификация изображений
     */
    gulp.task("imagemin", function () {
        gulp.src(['img/*.jpg', 'img/*.png', 'img/*.gif'])
            .pipe(plugins.cache(plugins.imagemin({optimizationLevel: 5, progressive: true, interlaced: true})))
            .pipe(gulp.dest("dist/img/"));
    });

    gulp.task("img", ['sp', 'imagemin']);
    /*
     *Замена адресов и перенос файлов
     */
    gulp.task("html", ['venders'], function () {
        gulp.src("*.html")
            .pipe(plugins.replace(/style.css/g, "style.min.css"))
            .pipe(plugins.replace(/base.js/g, "base.min.js"))
            .pipe(gulp.dest("dist/"));
    });
    gulp.task('venders', function () {
        gulp.src("js/venders/**").pipe(gulp.dest("dist/js/venders"));
    });
    /*
     * Подрузка компонентов
     */
    gulp.task('bower', function () {
        var defer = Q.defer();
        exec('bower install', {cwd: projectPath}, function (err, stdout, stderr) {
            var bowerArray = JSON.parse(bowerJson), sources = bowerArray['overrides'];
            if (sources) {
                var venderNames = Object.keys(sources), vendersCount = venderNames.length, targets = [];
                var _copy = function (i) {
                    if (i < targets.length) {
                        var vender = targets[i];
                        gulp.src(vender.from).pipe(gulp.dest(vender.where)).on('end', function () {
                            i++;
                            _copy(i);
                        });
                    } else {
                        del([bowerFolder]);
                        defer.resolve();
                    }
                };

                for (var i in sources) {
                    var venderName = i;
                    for (var j in sources[i]) {
                        var where = j, ln = sources[i][j].length;
                        while (ln--) {
                            var target = sources[i][j][ln], from = bowerFolder + '/' + venderName + '/' + target;
                            targets.push({
                                from: from,
                                where: where
                            });
                        }
                    }
                }

                setTimeout(function () {
                    _copy(0);
                }, 50);
            } else {
                defer.reject("Отсутствует bower.json или секция overrides!");
            }
            return defer.promise;
        });
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