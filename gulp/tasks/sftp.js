/**
 * Created by Abaddon on 18.09.2015.
 */
var gulp = require('gulp'),
    config = require('../config').sftp,
    sftp = require('gulp-sftp');

gulp.task('sftp', ['production'], function () {
    return gulp.src(config.dest)
        .pipe(sftp({
            host: config.host,
            user: config.user,
            pass: config.pass,
            remotePath: config.remotePath
        }));
});