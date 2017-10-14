/**
 * Created by Abaddon on 08.07.2016.
 */
const AOS = require('../venders/aos/aos.js');

class Animate {
  static init() {
    AOS.init({
      offset: 200,
      duration: 600,
      easing: 'ease-in-sine',
      delay: 100,
    });
  }
}

export default new Animate();
