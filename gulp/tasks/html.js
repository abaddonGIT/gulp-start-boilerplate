/**
 * Created by abaddon on 27.01.2015.
 */
const gulp = require('gulp'),
  config = require('../config').html;

gulp.task("html", function () {
  gulp.src(config.src).pipe(gulp.dest(config.dest));
  gulp.src("./src/css/style.css").pipe(gulp.dest('./dist/css/'));

  gulp.src("./src/css/fonts/**").pipe(gulp.dest("./dist/css/fonts"));
  gulp.src("./src/js/vendors/badIe.js").pipe(gulp.dest("./dist/js/vendors/"));
  gulp.src("./src/js/vendors/jquery/jquery.min.js").pipe(gulp.dest("./dist/js/vendors/jquery/"));
  gulp.src("./src/js/app.compile.js").pipe(gulp.dest("./dist/js/"));
});