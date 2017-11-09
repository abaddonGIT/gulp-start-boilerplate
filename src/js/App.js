/**
 * Created by Abaddon (abaddongit@gmail.com)
 */
/* global window, document, console */

import {isMobile, onloadCSS, afterLoadCSS} from './UsesFunctions';
const SvgEvery = require('svg4everybody');
const AOS = require('aos');
const {
  loadCSS,
} = require('fg-loadcss');

class App {
  constructor() {
    this.body = $('body');
  }

  run() {
    if (isMobile()) {
      this.body.addClass('is-mobile');
    }
    const css = loadCSS('css/style.css');
    onloadCSS(css, () => {
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
      afterLoadCSS();
    });

    SvgEvery();
  }
}

export default new App();
