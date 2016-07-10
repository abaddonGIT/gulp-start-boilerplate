/**
 * Created by abaddon on 26.05.2016.
 */
export default {
    /**
     * Check mobile device
     */
    isMobile: {
        Android: function () {
            return navigator.userAgent.match(/Android/i);
        }
        ,
        BlackBerry: function () {
            return navigator.userAgent.match(/BlackBerry/i);
        }
        ,
        iOS: function () {
            return navigator.userAgent.match(/iPhone|iPad|iPod/i);
        }
        ,
        Opera: function () {
            return navigator.userAgent.match(/Opera Mini/i);
        }
        ,
        Windows: function () {
            return navigator.userAgent.match(/IEMobile/i);
        }
        ,
        any: function () {
            return (this.Android() || this.BlackBerry() || this.iOS() || this.Opera() || this.Windows());
        }
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
            let item = all[i], height = item.offsetHeight;
            if (max < height) {
                max = height;
            }
        }

        for (let i = 0; i < ln; i++) {
            let item = all[i];
            item.style.cssText += "min-height: " + max + "px;";
        }
    }
};