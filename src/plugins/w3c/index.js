/**
 * Created by Abaddon on 28.05.2016.
 */
'use strict';

var through = require('through2');
var w3cjs = require('w3cjs');
var gutil = require('gulp-util');
var merge = require('object-assign');
//var fs = require("fs");

/**
 * Handles messages.
 *
 * @param file The file array.
 * @param messages Array of messages returned by w3cjs.
 * @return boolean Return false if errors have occurred.
 */

var TAG = "gulp-w3c-validate";

/**
 * Create and show console messages view
 * @param response
 * @param file
 */
var showConsoleMessages = function (response, file) {
    console.log(response);
};

/**
 * Create and view html messsages view
 * @param response
 */
var showHtmlMessages = function (response, file) {
    var content = file.contents.toString(), join = '</body>', validateText = "";
    var htmlParts = content.split(join);
    //console.log(htmlParts);
    if (htmlParts.length > 1) {
        validateText = "<!------------------VALIDATE---------------->EBA<!------------------VALIDATE---------------->";
    }
    htmlParts[0] += validateText;

    return prefixStream(htmlParts.join(join));
};

/**
 * Create and return file like stream
 * @param prefixText
 * @returns {*}
 */
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
        view: "html",//console
        showJsPath: ""
    });


    return through.obj(function (file, enc, callback) {
        var content = file.contents.toString();

        if (file.isNull()) {
            callback(null, file);
        }

        if (file.isStream()) {
            return callback(new gutil.PluginError('gulp-w3cjs', 'Streaming not supported'));
        }

        if (params.view === "html") {
            var w3cPart = content.split('<!------------------VALIDATE---------------->');
            //console.log(w3cPart.length);
            if (w3cPart.length > 1) {
                w3cPart.splice(1, 1);
                console.log(w3cPart);
                file.contents = prefixStream(w3cPart.join(""));
            }
        }

        w3cjs.validate({
            input: file.contents,
            output: 'json',
            callback: function (res) {
                switch (params.view) {
                    case "html":
                        file.contents = showHtmlMessages(res, file);
                        break;
                    case "console":
                        showConsoleMessages(res, file);
                        break;
                }
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