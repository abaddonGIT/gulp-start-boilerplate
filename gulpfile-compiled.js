/**
 * Created by abaddon on 18.12.2014.
 */

'use strict';

(function (require) {
    'use strict';
    var gulp = require('gulp');
    var requireDir = require('require-dir');
    var browserSync = require('browser-sync');
    var reload = browserSync.reload;
    var w3c = require('./src/plugins/w3c/index-compiled.js');
    requireDir('./gulp/tasks', { recurse: true });

    gulp.task('browser-sync', function () {
        browserSync({
            server: {
                baseDir: './src/',
                index: 'htdocs/index.html'
            },
            browser: ['chrome']
        });
    });

    gulp.task('watch', ['browser-sync'], function () {
        gulp.watch('src/css/*.css', ['prefix']);
        gulp.watch('src/js/app.js', ['browserify', browserSync.reload]);
        gulp.watch('src/htdocs/*.html').on('change', browserSync.reload);
    });

    gulp.task('validate', function () {
        gulp.src('./src/htdocs/*.html').pipe(w3c({ showJsPath: './src/js/' })).pipe(gulp.dest('./src/htdocs/'));
    });

    gulp.task('production', ['sprites', 'imagemin', 'mincss', 'uglifyJs', 'html']);
})(require);

//# sourceMappingURL=gulpfile-compiled.js.map