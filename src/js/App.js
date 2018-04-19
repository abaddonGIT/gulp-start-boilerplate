/**
 * Created by Abaddon (abaddongit@gmail.com)
 */
/* global window, document, console */

import { isMobile } from './UsesFunctions';
const SvgEvery = require('svg4everybody');
const AOS = require('aos');

class App {
  constructor() {
    this.body = $('body');
  }

  run() {
    if (isMobile()) {
      this.body.addClass('is-mobile');
    }
    // Анимация для страницы
    if (document.querySelector('.has-anim')) {
      const AOS = require('aos');
      AOS.init({
        disable: 'mobile',
        offset: 200,
        duration: 600,
        easing: 'ease-in-sine',
        delay: 100,
      });
    }

    SvgEvery();
  }
}

export default new App();
