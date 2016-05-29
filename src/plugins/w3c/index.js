/**
 * Created by Abaddon on 28.05.2016.
 */
'use strict';

var through = require('through2');
var w3cjs = require('w3cjs');
var gutil = require('gulp-util');
var merge = require('object-assign');
var fs = require("fs");

/**
 * Handles messages.
 *
 * @param file The file array.
 * @param messages Array of messages returned by w3cjs.
 * @return boolean Return false if errors have occurred.
 */

var TAG = "gulp-w3c-validate";

var showError = function (response, file) {
    console.log(response);
};

function prefixStream(prefixText) {
    var stream = through();
    stream.write(prefixText);
    return stream;
}

var validate = function (params) {
    if (params == null) {
        params = {};
    }
    params = merge(params, {
        type: ['css', 'html'],
        view: "page",//page
        showJsPath: ""
    });


    return through.obj(function (file, enc, callback) {
        var self = this;
        if (file.isNull()) {
            callback(null, file);
        }

        if (file.isStream()) {
            return callback(new gutil.PluginError('gulp-w3cjs', 'Streaming not supported'));
        }

        w3cjs.validate({
            input: file.contents,
            output: 'json',
            callback: function (res) {
                showError(res, file);
                //if (params.view === "page") {
                //    var content = file.contents.toString(), join = '</footer>';
                //    var code = content.split(join);
                //    if (code[0].indexOf("w3cShow") == -1) {
                //        if (code.length < 2) {
                //            join = '</body>';
                //        }
                //        code = content.split(join);
                //        code[0] += '<script src="' + __dirname + '\w3cShow.js"></script>';
                //        file.contents = prefixStream(code.join(join));
                //    }
                //}

                callback(null, file);
            }
        });
    });
};

module.exports = validate;