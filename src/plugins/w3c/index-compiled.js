/**
 * Created by Abaddon on 28.05.2016.
 */
'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _through2 = require('through2');

var _through22 = _interopRequireDefault(_through2);

var _w3cjs = require('w3cjs');

var _w3cjs2 = _interopRequireDefault(_w3cjs);

var _gulpUtil = require('gulp-util');

var _gulpUtil2 = _interopRequireDefault(_gulpUtil);

var _objectAssign = require('object-assign');

var _objectAssign2 = _interopRequireDefault(_objectAssign);

var _dot = require('dot');

var _dot2 = _interopRequireDefault(_dot);

var _templateCompiled = require('./template-compiled');

var _templateCompiled2 = _interopRequireDefault(_templateCompiled);

/**
 * Handles messages.
 *
 * @param file The file array.
 * @param messages Array of messages returned by w3cjs.
 * @return boolean Return false if errors have occurred.
 */

var TAG = 'gulp-w3c-validate';

/**
 * Create and show console messages view
 * @param response
 * @param file
 */
var showConsoleMessages = function showConsoleMessages(response, file) {
    console.log(response);
};

/**
 * Create and view html messsages view
 * @param response
 */
var showHtmlMessages = function showHtmlMessages(response, content) {
    var join = '</body>',
        validateText = '',
        htmlParts = content.split(join),
        messages = response.messages,
        msLen = messages.length;

    if (htmlParts.length > 1) {
        validateText = '<!--VALIDATE-->';
        //messages.extract = messages.extract.replace(/</g, "&lt;");
        //messages.extract = messages.extract.replace(/>/g, "&gt;");
        var items = _dot2['default'].template(_templateCompiled2['default'].messageItems)(messages);
        items = items.replace(/<!--/g, '');
        items = items.replace(/-->/g, '');
        //validateText += dot.template(tpl.messageWrap)(items);
        validateText += '<!--VALIDATE-->';
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
    var stream = (0, _through22['default'])();
    stream.write(prefixText);
    return stream;
}

var validate = function validate(params) {
    if (params == null) {
        params = {};
    }
    params = (0, _objectAssign2['default'])(params, {
        type: ['css', 'html'],
        view: 'html', //console
        showJsPath: ''
    });

    return _through22['default'].obj(function (file, enc, _callback) {
        var content = file.contents.toString();

        if (file.isNull()) {
            _callback(null, file);
        }

        if (file.isStream()) {
            return _callback(new _gulpUtil2['default'].PluginError('gulp-w3cjs', 'Streaming not supported'));
        }

        if (params.view === 'html') {
            var w3cPart = content.split('<!--VALIDATE-->');

            if (w3cPart.length > 1) {
                w3cPart.splice(1, 1);
                content = w3cPart.join('');
            }
        }

        _w3cjs2['default'].validate({
            input: file.contents,
            output: 'json',
            callback: function callback(res) {
                switch (params.view) {
                    case 'html':
                        file.contents = showHtmlMessages(res, content);
                        break;
                    case 'console':
                        showConsoleMessages(res, content);
                        break;
                }

                _callback(null, file);
            }
        });
    });
};

exports['default'] = validate;
module.exports = exports['default'];

//# sourceMappingURL=index-compiled.js.map