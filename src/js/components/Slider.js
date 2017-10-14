/**
 * Created by Abaddon on 07.07.2016.
 */
require('../venders/flex/jquery.flexslider-min.js');

class Slider {
  constructor() {
    this.slider = document.querySelector('.slider');
  }

  init() {
    if (!this.slider) return;
    $(this.slider).flexslider({
      animation: 'slide',
    });
  }
}

export default new Slider();
