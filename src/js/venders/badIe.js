/**
 * Created by Abaddon on 17.05.2016.
 */
"use strict";
(function (w, d) {
    var ieCheck = function () {
        var ie = ( !!window.ActiveXObject && +( /msie\s(\d+)/i.exec(navigator.userAgent)[1] ) ) || NaN;
        var bad = false;
        if (ie === 6) {
            bad = true;
        } else if (ie === 7) {
            bad = true;
        } else if (ie === 8) {
            bad = true;
        } else if (ie === 9) {
            bad = true;
        }

        if (bad) {
            var body = d.getElementsByTagName("body");
            body[0].innerHTML = '<div id="badIE"><h1>У вас установлена устаревшая версия браузера!<br /> Для корректного просмотра сайта необходимо обновить браузер!</h1></div>';
        }
    };

    ieCheck();
}(window, document));