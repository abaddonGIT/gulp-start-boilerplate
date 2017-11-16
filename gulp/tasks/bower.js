/**
 * Created by abaddon on 27.01.2015.
 */
const gulp = require('gulp'),
  del = require('del'),
  fs = require('fs'),
  projectPath = process.cwd(),
  bowerFolder = "bower_components",
  bowerJson = fs.readFileSync('./bower.json', 'utf8'),
  exec = require('child_process').exec;

gulp.task('bower', function () {
  exec('bower install', {cwd: projectPath}, function (err, stdout, stderr) {
    const bowerArray = JSON.parse(bowerJson), sources = bowerArray['overrides'];
    if (sources) {
      const venderNames = Object.keys(sources), vendersCount = venderNames.length, targets = [];
      const _copy = function (i) {
        if (i < targets.length) {
          const vender = targets[i];
          gulp.src(vender.from).pipe(gulp.dest(vender.where)).on('end', function () {
            i++;
            _copy(i);
          });
        } else {
          del([bowerFolder]);
        }
      };

      for (let i in sources) {
        for (let j in sources[i]) {
          let ln = sources[i][j].length;
          while (ln--) {
            const target = sources[i][j][ln], from = bowerFolder + '/' + i + '/' + target;
            targets.push({
              from: from,
              where: j
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