/**
 * Created by Abaddon on 28.05.2016.
 */
'use strict';

import through from 'through2';
import w3cjs from 'w3cjs';
import gutil from 'gulp-util';
import merge from 'object-assign';
import dot from 'dot';
import tpl from './template-compiled';
/**
 * Handles messages.
 *
 * @param file The file array.
 * @param messages Array of messages returned by w3cjs.
 * @return boolean Return false if errors have occurred.
 */

const TAG = "gulp-w3c-validate";

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
var showHtmlMessages = function (response, content) {
    let join = '</body>',
        validateText = "",
        htmlParts = content.split(join),
        messages = response.messages,
        msLen = messages.length;

    if (htmlParts.length > 1) {
        validateText = "<!--VALIDATE-->";
        //messages.extract = messages.extract.replace(/</g, "&lt;");
        //messages.extract = messages.extract.replace(/>/g, "&gt;");
        let items = dot.template(tpl.messageItems)(messages);
        items = items.replace(/<!--/g, "");
        items = items.replace(/-->/g, "");
        //validateText += dot.template(tpl.messageWrap)(items);
        validateText += "<!--VALIDATE-->";
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
            var w3cPart = content.split('<!--VALIDATE-->');

            if (w3cPart.length > 1) {
                w3cPart.splice(1, 1);
                content = w3cPart.join("");
            }
        }

        w3cjs.validate({
            input: file.contents,
            output: 'json',
            callback: function (res) {
                switch (params.view) {
                    case "html":
                        file.contents = showHtmlMessages(res, content);
                        break;
                    case "console":
                        showConsoleMessages(res, content);
                        break;
                }

                callback(null, file);
            }
        });
    });
};

export default validate;