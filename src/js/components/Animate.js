/**
 * Created by Abaddon on 08.07.2016.
 */
var wow = require('../venders/wow/wow.js').WOW;

class Animate {
    constructor() {

    }

    init() {
        var wow = new WOW(
            {
                boxClass: 'wool',
                animateClass: 'animated',
                offset: 200,
                mobile: false,
                live: true,
                callback: function (box) {
                    var type = box.getAttribute("data-type");
                }
            }
        );
        wow.init();
    }
}

export default new Animate();