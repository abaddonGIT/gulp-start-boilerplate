/**
 * Created by abaddon on 26.05.2016.
 */
/* global device */
import './vendors/device';
/**
 * Check mobile device
 */
export const isMobile = function () {
  return device.mobile();
};
/**
 * Set max height
 * @param selector
 * @returns {boolean}
 */
export const autoHeight = function (selector) {
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
};
/**
 * Get random number
 * @param min
 * @param max
 * @returns {*}
 */
export const random = function (min, max) {
  return Math.floor(Math.random() * ((max - min) + 1)) + min;
};

export const linkSupportsPreload = function (tokenList, token) {
  if (!tokenList || !tokenList.supports) {
    return false;
  }
  try {
    return tokenList.supports(token);
  } catch (e) {
    return false;
  }
};

export const onloadCSS = function (ss, callback) {
  let called;

  function newcb() {
    if (!called && callback) {
      called = true;
      callback.call(ss);
    }
  }

  if (ss.addEventListener) {
    ss.addEventListener('load', newcb);
  }
  if (ss.attachEvent) {
    ss.attachEvent('onload', newcb);
  }

  if ('isApplicationInstalled' in navigator && 'onloadcssdefined' in ss) {
    ss.onloadcssdefined(newcb);
  }
};

export const afterLoadCSS = function () {
  let css = `.loader {
    display: none;
  }`;
  const head = document.head || document.getElementsByTagName('head')[0];
  let style = document.createElement('style');

  style.type = 'text/css';
  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }

  setTimeout(() => {
    head.appendChild(style);
    css = null;
    style = null;
  }, 300);
};