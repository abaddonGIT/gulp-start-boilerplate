/**
 * Created by Abaddon on 02.03.2016.
 */
var gulp = require("gulp"),
    fs = require("fs"),
    file = require('gulp-file'),
    config = require('../config').fonts;


gulp.task('fonts', function () {
    var code = "";

    function getFolders() {
        return fs.readdirSync('./src/css/fonts')
            .filter(function (file) {
                code += `@font-face {
                        font-family: "${file}";
                        src: url("./fonts/${file}/${file}.eot");
                        src: url("./fonts/${file}/${file}.eot?#iefix")format("embedded-opentype"),
                        url("./fonts/${file}/${file}.woff") format("woff"),
                        url("./fonts/${file}/${file}.ttf") format("truetype");
                        font-style: normal;
                        font-weight: normal;
                    }`;
            });
    }

    getFolders();

    return file('fonts.less', code).pipe(gulp.dest('./src/css'));
});
