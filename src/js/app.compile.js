(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
/**
 * Created by abaddon on 26.05.2016.
 */
exports.default = {
    /**
     * Check mobile device
     */
    isMobile: {
        Android: function Android() {
            return navigator.userAgent.match(/Android/i);
        },

        BlackBerry: function BlackBerry() {
            return navigator.userAgent.match(/BlackBerry/i);
        },

        iOS: function iOS() {
            return navigator.userAgent.match(/iPhone|iPad|iPod/i);
        },

        Opera: function Opera() {
            return navigator.userAgent.match(/Opera Mini/i);
        },

        Windows: function Windows() {
            return navigator.userAgent.match(/IEMobile/i);
        },

        any: function any() {
            return this.Android() || this.BlackBerry() || this.iOS() || this.Opera() || this.Windows();
        }
    }
};

},{}],2:[function(require,module,exports){
/*!
 * Created by Abaddon (abaddongit@gmail.com)
 */
/*global window, document, console*/
"use strict";

var _UsesFunctions = require("./UsesFunctions");

var _UsesFunctions2 = _interopRequireDefault(_UsesFunctions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function (d, w) {})(document, window);

},{"./UsesFunctions":1}]},{},[2]);
