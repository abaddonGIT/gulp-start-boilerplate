/**
 * Created by abaddon on 27.01.2015.
 */
var gulp = require('gulp'),
    del = require('del'),
    fs = require('fs'),
    projectPath = process.cwd(),
    bowerFolder = "bower_components",
    bowerJson = fs.readFileSync('./bower.json', 'utf8'),
    exec = require('child_process').exec;

gulp.task('bower', function () {
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
        }
    });
});