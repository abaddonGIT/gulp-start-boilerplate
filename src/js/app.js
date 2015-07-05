/*!
 * Created by Abaddon (abaddongit@gmail.com)
 */
/*global window, document, console*/
"use strict";

class App {
    constructor() {
        this.w = window;
        this.d = document;
        this.$ = jQuery;
    }

    run() {
        this.$(this.d).ready(this._siteHandler.bind(this));
    }

    _siteHandler() {
        //Init animations
    }
}

var app = new App();
app.run();
