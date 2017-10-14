/**
 * Created by abaddon on 26.05.2016.
 */
/* global device */
import './venders/device';

export default {
  /**
   * Check mobile device
   */
  isMobile() {
    return device.mobile();
  },
  /**
   * Set max height
   * @param selector
   * @returns {boolean}
   */
  autoHeight(selector) {
    const all = document.querySelectorAll(selector);
    const ln = all.length;
    if (!ln) return false;
    let max = 0;
    for (let i = 0; i < ln; i += 1) {
      const item = all[i];
      item.style.cssText += 'height: auto;';
      const height = $(item).innerHeight();
      if (max < height) {
        max = height;
      }
    }

    for (let i = 0; i < ln; i += 1) {
      const item = all[i];
      item.style.cssText += `height: ${max} px;`;
    }
    return true;
  },
  /**
   * Get random number
   * @param min
   * @param max
   * @returns {*}
   */
  random(min, max) {
    return Math.floor(Math.random() * ((max - min) + 1)) + min;
  },
};
