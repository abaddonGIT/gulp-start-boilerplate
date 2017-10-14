/**
 * Created by Abaddon (abaddongit@gmail.com)
 */
/* global window, document, console */

import Uses from './UsesFunctions';

$(function (d, w, $) {
  class App {
    constructor() {
      this.body = $('body');
    }

    run() {
      if (Uses.isMobile()) {
        this.body.addClass('is-mobile');
      }
    }
  }

  const app = new App();
  app.run();
}(document, window, jQuery));
