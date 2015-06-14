/**
 * Created by Abaddon on 14.06.2015.
 */
var Notification = require('node-notifier');
var util = require('gulp-util');

var Error = {
    standartError: function (err) {
        Notification.notify({message: 'Error: ' + err.message});
        util.log(util.colors.red('Error'), err.message);
    },
    browserifyErrors: function (err) {
        Error.standartError(err);
        this.emit('end');
    }
};

module.exports = Error;