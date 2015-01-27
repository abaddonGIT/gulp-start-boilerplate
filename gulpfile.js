/**
 * Created by abaddon on 18.12.2014.
 */
(function (require) {
    "use strict";
    var gulp = require('gulp');
    var requireDir = require('require-dir');
    requireDir('./gulp/tasks', { recurse: true });

    gulp.task('watch', function () {
        gulp.watch('src/css/*.css', ['prefix']);
        gulp.watch('src/js/*.js', ['browserify']);
    });

    gulp.task('production', ['sprites', 'imagemin', 'mincss', 'uglifyJs', 'html']);
}(require));