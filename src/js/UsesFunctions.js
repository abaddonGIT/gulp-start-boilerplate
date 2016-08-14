/**
 * Created by abaddon on 26.05.2016.
 */
import "./venders/device";

export default {
    /**
     * Check mobile device
     */
    isMobile: function () {
        return device.mobile(); 
    },
    /**
     * Set max height
     * @param selector
     * @returns {boolean}
     */
    autoHeight: function (selector) {
        let all = document.querySelectorAll(selector), ln = all.length;
        if (!ln) return false;
        let max = 0;
        for (let i = 0; i < ln; i++) {
            let item = all[i], height = $(item).innerHeight();
            if (max < height) {
                max = height;
            }
        }

        for (let i = 0; i < ln; i++) {
            let item = all[i];
            item.style.cssText += "height: " + max + "px;";
        }
    },
    /**
     * Get random number
     * @param min
     * @param max
     * @returns {*}
     */
    random(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
};