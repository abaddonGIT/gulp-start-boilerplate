/**
 * Created by abaddon on 27.01.2015.
 */
var gulp = require('gulp'),
    spritesmith = require('gulp.spritesmith'),
    config = require('../config').sprites;

gulp.task('sprites', function () {
    var sprite = gulp.src(config.src)
        .pipe(spritesmith({
            imgName: config.name,
            cssName: config.cssName,
            imgPath: config.imagePath + config.name,
            cssFormat: config.type,
            padding: config.padding,
            engineOpts: {
                "imagemagick": true
            }
        }));
    sprite.img.pipe(gulp.dest(config.dest));
    sprite.css.pipe(gulp.dest(config.cssPath));
});