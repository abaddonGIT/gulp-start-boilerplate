(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

require('./venders/device');

exports.default = {
  /**
   * Check mobile device
   */
  isMobile: function isMobile() {
    return device.mobile();
  },

  /**
   * Set max height
   * @param selector
   * @returns {boolean}
   */
  autoHeight: function autoHeight(selector) {
    var all = document.querySelectorAll(selector);
    var ln = all.length;
    if (!ln) return false;
    var max = 0;
    for (var i = 0; i < ln; i += 1) {
      var item = all[i];
      item.style.cssText += 'height: auto;';
      var height = $(item).innerHeight();
      if (max < height) {
        max = height;
      }
    }

    for (var _i = 0; _i < ln; _i += 1) {
      var _item = all[_i];
      _item.style.cssText += 'height: ' + max + ' px;';
    }
    return true;
  },

  /**
   * Get random number
   * @param min
   * @param max
   * @returns {*}
   */
  random: function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
}; /**
    * Created by abaddon on 26.05.2016.
    */
/* global device */

},{"./venders/device":3}],2:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Created by Abaddon (abaddongit@gmail.com)
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      */
/* global window, document, console */

var _UsesFunctions = require('./UsesFunctions');

var _UsesFunctions2 = _interopRequireDefault(_UsesFunctions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

$(function (d, w, $) {
  var App = function () {
    function App() {
      _classCallCheck(this, App);

      this.body = $('body');
    }

    _createClass(App, [{
      key: 'run',
      value: function run() {
        if (_UsesFunctions2.default.isMobile()) {
          this.body.addClass('is-mobile');
        }
      }
    }]);

    return App;
  }();

  var app = new App();
  app.run();
}(document, window, jQuery));

},{"./UsesFunctions":1}],3:[function(require,module,exports){
"use strict";

/*! device.js 0.1.58 */
(function () {
    var a, b, c, d, e, f, g, h, i, j;
    a = window.device, window.device = {}, c = window.document.documentElement, j = window.navigator.userAgent.toLowerCase(), device.ios = function () {
        return device.iphone() || device.ipod() || device.ipad();
    }, device.iphone = function () {
        return d("iphone");
    }, device.ipod = function () {
        return d("ipod");
    }, device.ipad = function () {
        return d("ipad");
    }, device.android = function () {
        return d("android");
    }, device.androidPhone = function () {
        return device.android() && d("mobile");
    }, device.androidTablet = function () {
        return device.android() && !d("mobile");
    }, device.blackberry = function () {
        return d("blackberry") || d("bb10") || d("rim");
    }, device.blackberryPhone = function () {
        return device.blackberry() && !d("tablet");
    }, device.blackberryTablet = function () {
        return device.blackberry() && d("tablet");
    }, device.windows = function () {
        return d("windows");
    }, device.windowsPhone = function () {
        return device.windows() && d("phone");
    }, device.windowsTablet = function () {
        return device.windows() && d("touch");
    }, device.fxos = function () {
        return (d("(mobile;") || d("(tablet;")) && d("; rv:");
    }, device.fxosPhone = function () {
        return device.fxos() && d("mobile");
    }, device.fxosTablet = function () {
        return device.fxos() && d("tablet");
    }, device.meego = function () {
        return d("meego");
    }, device.mobile = function () {
        return device.androidPhone() || device.iphone() || device.ipod() || device.windowsPhone() || device.blackberryPhone() || device.fxosPhone() || device.meego();
    }, device.tablet = function () {
        return device.ipad() || device.androidTablet() || device.blackberryTablet() || device.windowsTablet() || device.fxosTablet();
    }, device.portrait = function () {
        return 90 !== Math.abs(window.orientation);
    }, device.landscape = function () {
        return 90 === Math.abs(window.orientation);
    }, device.noConflict = function () {
        return window.device = a, this;
    }, d = function d(a) {
        return -1 !== j.indexOf(a);
    }, f = function f(a) {
        var b;
        return b = new RegExp(a, "i"), c.className.match(b);
    }, b = function b(a) {
        return f(a) ? void 0 : c.className += " " + a;
    }, h = function h(a) {
        return f(a) ? c.className = c.className.replace(a, "") : void 0;
    }, device.ios() ? device.ipad() ? b("ios ipad tablet") : device.iphone() ? b("ios iphone mobile") : device.ipod() && b("ios ipod mobile") : device.android() ? device.androidTablet() ? b("android tablet") : b("android mobile") : device.blackberry() ? device.blackberryTablet() ? b("blackberry tablet") : b("blackberry mobile") : device.windows() ? device.windowsTablet() ? b("windows tablet") : device.windowsPhone() ? b("windows mobile") : b("desktop") : device.fxos() ? device.fxosTablet() ? b("fxos tablet") : b("fxos mobile") : device.meego() ? b("meego mobile") : b("desktop"), e = function e() {
        return device.landscape() ? (h("portrait"), b("landscape")) : (h("landscape"), b("portrait"));
    }, i = "onorientationchange" in window, g = i ? "orientationchange" : "resize", window.addEventListener ? window.addEventListener(g, e, !1) : window.attachEvent ? window.attachEvent(g, e) : window[g] = e, e();
}).call(undefined);

},{}]},{},[2]);
