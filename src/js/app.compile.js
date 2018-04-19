(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.AOS=t():e.AOS=t()}(this,function(){return function(e){function t(o){if(n[o])return n[o].exports;var i=n[o]={exports:{},id:o,loaded:!1};return e[o].call(i.exports,i,i.exports,t),i.loaded=!0,i.exports}var n={};return t.m=e,t.c=n,t.p="dist/",t(0)}([function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}var i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},r=n(1),a=(o(r),n(6)),u=o(a),c=n(7),f=o(c),s=n(8),d=o(s),l=n(9),p=o(l),m=n(10),b=o(m),v=n(11),y=o(v),g=n(14),h=o(g),w=[],k=!1,x=document.all&&!window.atob,j={offset:120,delay:0,easing:"ease",duration:400,disable:!1,once:!1,startEvent:"DOMContentLoaded"},O=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];if(e&&(k=!0),k)return w=(0,y.default)(w,j),(0,b.default)(w,j.once),w},S=function(){w=(0,h.default)(),O()},_=function(){w.forEach(function(e,t){e.node.removeAttribute("data-aos"),e.node.removeAttribute("data-aos-easing"),e.node.removeAttribute("data-aos-duration"),e.node.removeAttribute("data-aos-delay")})},E=function(e){return e===!0||"mobile"===e&&p.default.mobile()||"phone"===e&&p.default.phone()||"tablet"===e&&p.default.tablet()||"function"==typeof e&&e()===!0},z=function(e){return j=i(j,e),w=(0,h.default)(),E(j.disable)||x?_():(document.querySelector("body").setAttribute("data-aos-easing",j.easing),document.querySelector("body").setAttribute("data-aos-duration",j.duration),document.querySelector("body").setAttribute("data-aos-delay",j.delay),"DOMContentLoaded"===j.startEvent&&["complete","interactive"].indexOf(document.readyState)>-1?O(!0):"load"===j.startEvent?window.addEventListener(j.startEvent,function(){O(!0)}):document.addEventListener(j.startEvent,function(){O(!0)}),window.addEventListener("resize",(0,f.default)(O,50,!0)),window.addEventListener("orientationchange",(0,f.default)(O,50,!0)),window.addEventListener("scroll",(0,u.default)(function(){(0,b.default)(w,j.once)},99)),document.addEventListener("DOMNodeRemoved",function(e){var t=e.target;t&&1===t.nodeType&&t.hasAttribute&&t.hasAttribute("data-aos")&&(0,f.default)(S,50,!0)}),(0,d.default)("[data-aos]",S),w)};e.exports={init:z,refresh:O,refreshHard:S}},function(e,t){},,,,,function(e,t){(function(t){"use strict";function n(e,t,n){function o(t){var n=b,o=v;return b=v=void 0,k=t,g=e.apply(o,n)}function r(e){return k=e,h=setTimeout(s,t),S?o(e):g}function a(e){var n=e-w,o=e-k,i=t-n;return _?j(i,y-o):i}function c(e){var n=e-w,o=e-k;return void 0===w||n>=t||n<0||_&&o>=y}function s(){var e=O();return c(e)?d(e):void(h=setTimeout(s,a(e)))}function d(e){return h=void 0,E&&b?o(e):(b=v=void 0,g)}function l(){void 0!==h&&clearTimeout(h),k=0,b=w=v=h=void 0}function p(){return void 0===h?g:d(O())}function m(){var e=O(),n=c(e);if(b=arguments,v=this,w=e,n){if(void 0===h)return r(w);if(_)return h=setTimeout(s,t),o(w)}return void 0===h&&(h=setTimeout(s,t)),g}var b,v,y,g,h,w,k=0,S=!1,_=!1,E=!0;if("function"!=typeof e)throw new TypeError(f);return t=u(t)||0,i(n)&&(S=!!n.leading,_="maxWait"in n,y=_?x(u(n.maxWait)||0,t):y,E="trailing"in n?!!n.trailing:E),m.cancel=l,m.flush=p,m}function o(e,t,o){var r=!0,a=!0;if("function"!=typeof e)throw new TypeError(f);return i(o)&&(r="leading"in o?!!o.leading:r,a="trailing"in o?!!o.trailing:a),n(e,t,{leading:r,maxWait:t,trailing:a})}function i(e){var t="undefined"==typeof e?"undefined":c(e);return!!e&&("object"==t||"function"==t)}function r(e){return!!e&&"object"==("undefined"==typeof e?"undefined":c(e))}function a(e){return"symbol"==("undefined"==typeof e?"undefined":c(e))||r(e)&&k.call(e)==d}function u(e){if("number"==typeof e)return e;if(a(e))return s;if(i(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=i(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(l,"");var n=m.test(e);return n||b.test(e)?v(e.slice(2),n?2:8):p.test(e)?s:+e}var c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},f="Expected a function",s=NaN,d="[object Symbol]",l=/^\s+|\s+$/g,p=/^[-+]0x[0-9a-f]+$/i,m=/^0b[01]+$/i,b=/^0o[0-7]+$/i,v=parseInt,y="object"==("undefined"==typeof t?"undefined":c(t))&&t&&t.Object===Object&&t,g="object"==("undefined"==typeof self?"undefined":c(self))&&self&&self.Object===Object&&self,h=y||g||Function("return this")(),w=Object.prototype,k=w.toString,x=Math.max,j=Math.min,O=function(){return h.Date.now()};e.exports=o}).call(t,function(){return this}())},function(e,t){(function(t){"use strict";function n(e,t,n){function i(t){var n=b,o=v;return b=v=void 0,O=t,g=e.apply(o,n)}function r(e){return O=e,h=setTimeout(s,t),S?i(e):g}function u(e){var n=e-w,o=e-O,i=t-n;return _?x(i,y-o):i}function f(e){var n=e-w,o=e-O;return void 0===w||n>=t||n<0||_&&o>=y}function s(){var e=j();return f(e)?d(e):void(h=setTimeout(s,u(e)))}function d(e){return h=void 0,E&&b?i(e):(b=v=void 0,g)}function l(){void 0!==h&&clearTimeout(h),O=0,b=w=v=h=void 0}function p(){return void 0===h?g:d(j())}function m(){var e=j(),n=f(e);if(b=arguments,v=this,w=e,n){if(void 0===h)return r(w);if(_)return h=setTimeout(s,t),i(w)}return void 0===h&&(h=setTimeout(s,t)),g}var b,v,y,g,h,w,O=0,S=!1,_=!1,E=!0;if("function"!=typeof e)throw new TypeError(c);return t=a(t)||0,o(n)&&(S=!!n.leading,_="maxWait"in n,y=_?k(a(n.maxWait)||0,t):y,E="trailing"in n?!!n.trailing:E),m.cancel=l,m.flush=p,m}function o(e){var t="undefined"==typeof e?"undefined":u(e);return!!e&&("object"==t||"function"==t)}function i(e){return!!e&&"object"==("undefined"==typeof e?"undefined":u(e))}function r(e){return"symbol"==("undefined"==typeof e?"undefined":u(e))||i(e)&&w.call(e)==s}function a(e){if("number"==typeof e)return e;if(r(e))return f;if(o(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=o(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(d,"");var n=p.test(e);return n||m.test(e)?b(e.slice(2),n?2:8):l.test(e)?f:+e}var u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},c="Expected a function",f=NaN,s="[object Symbol]",d=/^\s+|\s+$/g,l=/^[-+]0x[0-9a-f]+$/i,p=/^0b[01]+$/i,m=/^0o[0-7]+$/i,b=parseInt,v="object"==("undefined"==typeof t?"undefined":u(t))&&t&&t.Object===Object&&t,y="object"==("undefined"==typeof self?"undefined":u(self))&&self&&self.Object===Object&&self,g=v||y||Function("return this")(),h=Object.prototype,w=h.toString,k=Math.max,x=Math.min,j=function(){return g.Date.now()};e.exports=n}).call(t,function(){return this}())},function(e,t){"use strict";function n(e,t){a.push({selector:e,fn:t}),!u&&r&&(u=new r(o),u.observe(i.documentElement,{childList:!0,subtree:!0,removedNodes:!0})),o()}function o(){for(var e,t,n=0,o=a.length;n<o;n++){e=a[n],t=i.querySelectorAll(e.selector);for(var r,u=0,c=t.length;u<c;u++)r=t[u],r.ready||(r.ready=!0,e.fn.call(r,r))}}Object.defineProperty(t,"__esModule",{value:!0});var i=window.document,r=window.MutationObserver||window.WebKitMutationObserver,a=[],u=void 0;t.default=n},function(e,t){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(){return navigator.userAgent||navigator.vendor||window.opera||""}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),r=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i,a=/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,u=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i,c=/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,f=function(){function e(){n(this,e)}return i(e,[{key:"phone",value:function(){var e=o();return!(!r.test(e)&&!a.test(e.substr(0,4)))}},{key:"mobile",value:function(){var e=o();return!(!u.test(e)&&!c.test(e.substr(0,4)))}},{key:"tablet",value:function(){return this.mobile()&&!this.phone()}}]),e}();t.default=new f},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(e,t,n){var o=e.node.getAttribute("data-aos-once");t>e.position?e.node.classList.add("aos-animate"):"undefined"!=typeof o&&("false"===o||!n&&"true"!==o)&&e.node.classList.remove("aos-animate")},o=function(e,t){var o=window.pageYOffset,i=window.innerHeight;e.forEach(function(e,r){n(e,i+o,t)})};t.default=o},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var i=n(12),r=o(i),a=function(e,t){return e.forEach(function(e,n){e.node.classList.add("aos-init"),e.position=(0,r.default)(e.node,t.offset)}),e};t.default=a},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var i=n(13),r=o(i),a=function(e,t){var n=0,o=0,i=window.innerHeight,a={offset:e.getAttribute("data-aos-offset"),anchor:e.getAttribute("data-aos-anchor"),anchorPlacement:e.getAttribute("data-aos-anchor-placement")};switch(a.offset&&!isNaN(a.offset)&&(o=parseInt(a.offset)),a.anchor&&document.querySelectorAll(a.anchor)&&(e=document.querySelectorAll(a.anchor)[0]),n=(0,r.default)(e).top,a.anchorPlacement){case"top-bottom":break;case"center-bottom":n+=e.offsetHeight/2;break;case"bottom-bottom":n+=e.offsetHeight;break;case"top-center":n+=i/2;break;case"bottom-center":n+=i/2+e.offsetHeight;break;case"center-center":n+=i/2+e.offsetHeight/2;break;case"top-top":n+=i;break;case"bottom-top":n+=e.offsetHeight+i;break;case"center-top":n+=e.offsetHeight/2+i}return a.anchorPlacement||a.offset||isNaN(t)||(o=t),n+o};t.default=a},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(e){for(var t=0,n=0;e&&!isNaN(e.offsetLeft)&&!isNaN(e.offsetTop);)t+=e.offsetLeft-("BODY"!=e.tagName?e.scrollLeft:0),n+=e.offsetTop-("BODY"!=e.tagName?e.scrollTop:0),e=e.offsetParent;return{top:n,left:t}};t.default=n},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(e){e=e||document.querySelectorAll("[data-aos]");var t=[];return[].forEach.call(e,function(e,n){t.push({node:e})}),t};t.default=n}])});

},{}],2:[function(require,module,exports){
!function(root, factory) {
    "function" == typeof define && define.amd ? // AMD. Register as an anonymous module unless amdModuleId is set
    define([], function() {
        return root.svg4everybody = factory();
    }) : "object" == typeof module && module.exports ? // Node. Does not work with strict CommonJS, but
    // only CommonJS-like environments that support module.exports,
    // like Node.
    module.exports = factory() : root.svg4everybody = factory();
}(this, function() {
    /*! svg4everybody v2.1.9 | github.com/jonathantneal/svg4everybody */
    function embed(parent, svg, target) {
        // if the target exists
        if (target) {
            // create a document fragment to hold the contents of the target
            var fragment = document.createDocumentFragment(), viewBox = !svg.hasAttribute("viewBox") && target.getAttribute("viewBox");
            // conditionally set the viewBox on the svg
            viewBox && svg.setAttribute("viewBox", viewBox);
            // copy the contents of the clone into the fragment
            for (// clone the target
            var clone = target.cloneNode(!0); clone.childNodes.length; ) {
                fragment.appendChild(clone.firstChild);
            }
            // append the fragment into the svg
            parent.appendChild(fragment);
        }
    }
    function loadreadystatechange(xhr) {
        // listen to changes in the request
        xhr.onreadystatechange = function() {
            // if the request is ready
            if (4 === xhr.readyState) {
                // get the cached html document
                var cachedDocument = xhr._cachedDocument;
                // ensure the cached html document based on the xhr response
                cachedDocument || (cachedDocument = xhr._cachedDocument = document.implementation.createHTMLDocument(""), 
                cachedDocument.body.innerHTML = xhr.responseText, xhr._cachedTarget = {}), // clear the xhr embeds list and embed each item
                xhr._embeds.splice(0).map(function(item) {
                    // get the cached target
                    var target = xhr._cachedTarget[item.id];
                    // ensure the cached target
                    target || (target = xhr._cachedTarget[item.id] = cachedDocument.getElementById(item.id)), 
                    // embed the target into the svg
                    embed(item.parent, item.svg, target);
                });
            }
        }, // test the ready state change immediately
        xhr.onreadystatechange();
    }
    function svg4everybody(rawopts) {
        function oninterval() {
            // while the index exists in the live <use> collection
            for (// get the cached <use> index
            var index = 0; index < uses.length; ) {
                // get the current <use>
                var use = uses[index], parent = use.parentNode, svg = getSVGAncestor(parent), src = use.getAttribute("xlink:href") || use.getAttribute("href");
                if (!src && opts.attributeName && (src = use.getAttribute(opts.attributeName)), 
                svg && src) {
                    if (polyfill) {
                        if (!opts.validate || opts.validate(src, svg, use)) {
                            // remove the <use> element
                            parent.removeChild(use);
                            // parse the src and get the url and id
                            var srcSplit = src.split("#"), url = srcSplit.shift(), id = srcSplit.join("#");
                            // if the link is external
                            if (url.length) {
                                // get the cached xhr request
                                var xhr = requests[url];
                                // ensure the xhr request exists
                                xhr || (xhr = requests[url] = new XMLHttpRequest(), xhr.open("GET", url), xhr.send(), 
                                xhr._embeds = []), // add the svg and id as an item to the xhr embeds list
                                xhr._embeds.push({
                                    parent: parent,
                                    svg: svg,
                                    id: id
                                }), // prepare the xhr ready state change event
                                loadreadystatechange(xhr);
                            } else {
                                // embed the local id into the svg
                                embed(parent, svg, document.getElementById(id));
                            }
                        } else {
                            // increase the index when the previous value was not "valid"
                            ++index, ++numberOfSvgUseElementsToBypass;
                        }
                    }
                } else {
                    // increase the index when the previous value was not "valid"
                    ++index;
                }
            }
            // continue the interval
            (!uses.length || uses.length - numberOfSvgUseElementsToBypass > 0) && requestAnimationFrame(oninterval, 67);
        }
        var polyfill, opts = Object(rawopts), newerIEUA = /\bTrident\/[567]\b|\bMSIE (?:9|10)\.0\b/, webkitUA = /\bAppleWebKit\/(\d+)\b/, olderEdgeUA = /\bEdge\/12\.(\d+)\b/, edgeUA = /\bEdge\/.(\d+)\b/, inIframe = window.top !== window.self;
        polyfill = "polyfill" in opts ? opts.polyfill : newerIEUA.test(navigator.userAgent) || (navigator.userAgent.match(olderEdgeUA) || [])[1] < 10547 || (navigator.userAgent.match(webkitUA) || [])[1] < 537 || edgeUA.test(navigator.userAgent) && inIframe;
        // create xhr requests object
        var requests = {}, requestAnimationFrame = window.requestAnimationFrame || setTimeout, uses = document.getElementsByTagName("use"), numberOfSvgUseElementsToBypass = 0;
        // conditionally start the interval if the polyfill is active
        polyfill && oninterval();
    }
    function getSVGAncestor(node) {
        for (var svg = node; "svg" !== svg.nodeName.toLowerCase() && (svg = svg.parentNode); ) {}
        return svg;
    }
    return svg4everybody;
});
},{}],3:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      * Created by Abaddon (abaddongit@gmail.com)
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      */
/* global window, document, console */

var _UsesFunctions = require('./UsesFunctions');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var SvgEvery = require('svg4everybody');
var AOS = require('aos');

var App = function () {
  function App() {
    _classCallCheck(this, App);

    this.body = $('body');
  }

  _createClass(App, [{
    key: 'run',
    value: function run() {
      if ((0, _UsesFunctions.isMobile)()) {
        this.body.addClass('is-mobile');
      }
      // Анимация для страницы
      if (document.querySelector('.has-anim')) {
        var _AOS = require('aos');
        _AOS.init({
          disable: 'mobile',
          offset: 200,
          duration: 600,
          easing: 'ease-in-sine',
          delay: 100
        });
      }

      SvgEvery();
    }
  }]);

  return App;
}();

exports.default = new App();

},{"./UsesFunctions":4,"aos":1,"svg4everybody":2}],4:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.afterLoadCSS = exports.onloadCSS = exports.linkSupportsPreload = exports.random = exports.autoHeight = exports.isMobile = undefined;

require('./vendors/device');

/**
 * Check mobile device
 */
var isMobile = exports.isMobile = function isMobile() {
  return device.mobile();
};
/**
 * Set max height
 * @param selector
 * @returns {boolean}
 */
/**
 * Created by abaddon on 26.05.2016.
 */
/* global device */
var autoHeight = exports.autoHeight = function autoHeight(selector) {
  var all = document.querySelectorAll(selector);
  var ln = all.length;
  if (!ln) return false;
  var max = 0;
  for (var i = 0; i < ln; i += 1) {
    var item = all[i];
    item.style.cssText += 'height: auto;';
    var height = $(item).innerHeight();
    if (max < height) {
      max = height;
    }
  }

  for (var _i = 0; _i < ln; _i += 1) {
    var _item = all[_i];
    _item.style.cssText += 'height: ' + max + ' px;';
  }
  return true;
};
/**
 * Get random number
 * @param min
 * @param max
 * @returns {*}
 */
var random = exports.random = function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

var linkSupportsPreload = exports.linkSupportsPreload = function linkSupportsPreload(tokenList, token) {
  if (!tokenList || !tokenList.supports) {
    return false;
  }
  try {
    return tokenList.supports(token);
  } catch (e) {
    return false;
  }
};

var onloadCSS = exports.onloadCSS = function onloadCSS(ss, callback) {
  var called = void 0;

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

var afterLoadCSS = exports.afterLoadCSS = function afterLoadCSS() {
  var css = '.loader {\n    display: none;\n  }';
  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');

  style.type = 'text/css';
  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }

  setTimeout(function () {
    head.appendChild(style);
    css = null;
    style = null;
  }, 300);
};

},{"./vendors/device":6}],5:[function(require,module,exports){
'use strict';

require('./vendors/migrate');

var _App = require('./App');

var _App2 = _interopRequireDefault(_App);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Created by Abaddon on 06.02.2017.
 *  Application entry point
 */
/* eslint no-unused-vars: ["error", { "varsIgnorePattern": "isMobile" }] */
$(document).ready(_App2.default.run());

},{"./App":3,"./vendors/migrate":7}],6:[function(require,module,exports){
"use strict";

/*! device.js 0.1.58 */
(function () {
    var a, b, c, d, e, f, g, h, i, j;
    a = window.device, window.device = {}, c = window.document.documentElement, j = window.navigator.userAgent.toLowerCase(), device.ios = function () {
        return device.iphone() || device.ipod() || device.ipad();
    }, device.iphone = function () {
        return d("iphone");
    }, device.ipod = function () {
        return d("ipod");
    }, device.ipad = function () {
        return d("ipad");
    }, device.android = function () {
        return d("android");
    }, device.androidPhone = function () {
        return device.android() && d("mobile");
    }, device.androidTablet = function () {
        return device.android() && !d("mobile");
    }, device.blackberry = function () {
        return d("blackberry") || d("bb10") || d("rim");
    }, device.blackberryPhone = function () {
        return device.blackberry() && !d("tablet");
    }, device.blackberryTablet = function () {
        return device.blackberry() && d("tablet");
    }, device.windows = function () {
        return d("windows");
    }, device.windowsPhone = function () {
        return device.windows() && d("phone");
    }, device.windowsTablet = function () {
        return device.windows() && d("touch");
    }, device.fxos = function () {
        return (d("(mobile;") || d("(tablet;")) && d("; rv:");
    }, device.fxosPhone = function () {
        return device.fxos() && d("mobile");
    }, device.fxosTablet = function () {
        return device.fxos() && d("tablet");
    }, device.meego = function () {
        return d("meego");
    }, device.mobile = function () {
        return device.androidPhone() || device.iphone() || device.ipod() || device.windowsPhone() || device.blackberryPhone() || device.fxosPhone() || device.meego();
    }, device.tablet = function () {
        return device.ipad() || device.androidTablet() || device.blackberryTablet() || device.windowsTablet() || device.fxosTablet();
    }, device.portrait = function () {
        return 90 !== Math.abs(window.orientation);
    }, device.landscape = function () {
        return 90 === Math.abs(window.orientation);
    }, device.noConflict = function () {
        return window.device = a, this;
    }, d = function d(a) {
        return -1 !== j.indexOf(a);
    }, f = function f(a) {
        var b;
        return b = new RegExp(a, "i"), c.className.match(b);
    }, b = function b(a) {
        return f(a) ? void 0 : c.className += " " + a;
    }, h = function h(a) {
        return f(a) ? c.className = c.className.replace(a, "") : void 0;
    }, device.ios() ? device.ipad() ? b("ios ipad tablet") : device.iphone() ? b("ios iphone mobile") : device.ipod() && b("ios ipod mobile") : device.android() ? device.androidTablet() ? b("android tablet") : b("android mobile") : device.blackberry() ? device.blackberryTablet() ? b("blackberry tablet") : b("blackberry mobile") : device.windows() ? device.windowsTablet() ? b("windows tablet") : device.windowsPhone() ? b("windows mobile") : b("desktop") : device.fxos() ? device.fxosTablet() ? b("fxos tablet") : b("fxos mobile") : device.meego() ? b("meego mobile") : b("desktop"), e = function e() {
        return device.landscape() ? (h("portrait"), b("landscape")) : (h("landscape"), b("portrait"));
    }, i = "onorientationchange" in window, g = i ? "orientationchange" : "resize", window.addEventListener ? window.addEventListener(g, e, !1) : window.attachEvent ? window.attachEvent(g, e) : window[g] = e, e();
}).call(undefined);

},{}],7:[function(require,module,exports){
"use strict";

/*!
 * jQuery Migrate - v3.0.0 - 2016-06-09
 * Copyright jQuery Foundation and other contributors
 */
(function (jQuery, window) {
    "use strict";

    jQuery.migrateVersion = "3.0.0";

    (function () {

        // Support: IE9 only
        // IE9 only creates console object when dev tools are first opened
        // Also, avoid Function#bind here to simplify PhantomJS usage
        var log = window.console && window.console.log && function () {
            window.console.log.apply(window.console, arguments);
        },
            rbadVersions = /^[12]\./;

        if (!log) {
            return;
        }

        // Need jQuery 3.0.0+ and no older Migrate loaded
        if (!jQuery || rbadVersions.test(jQuery.fn.jquery)) {
            log("JQMIGRATE: jQuery 3.0.0+ REQUIRED");
        }
        if (jQuery.migrateWarnings) {
            log("JQMIGRATE: Migrate plugin loaded multiple times");
        }

        // Show a message on the console so devs know we're active
        log("JQMIGRATE: Migrate is installed" + (jQuery.migrateMute ? "" : " with logging active") + ", version " + jQuery.migrateVersion);
    })();

    var warnedAbout = {};

    // List of warnings already given; public read only
    jQuery.migrateWarnings = [];

    // Set to false to disable traces that appear with warnings
    if (jQuery.migrateTrace === undefined) {
        jQuery.migrateTrace = true;
    }

    // Forget any warnings we've already given; public
    jQuery.migrateReset = function () {
        warnedAbout = {};
        jQuery.migrateWarnings.length = 0;
    };

    function migrateWarn(msg) {
        var console = window.console;
        if (!warnedAbout[msg]) {
            warnedAbout[msg] = true;
            jQuery.migrateWarnings.push(msg);
            if (console && console.warn && !jQuery.migrateMute) {
                console.warn("JQMIGRATE: " + msg);
                if (jQuery.migrateTrace && console.trace) {
                    console.trace();
                }
            }
        }
    }

    function migrateWarnProp(obj, prop, value, msg) {
        Object.defineProperty(obj, prop, {
            configurable: true,
            enumerable: true,
            get: function get() {
                migrateWarn(msg);
                return value;
            }
        });
    }

    if (document.compatMode === "BackCompat") {

        // JQuery has never supported or tested Quirks Mode
        migrateWarn("jQuery is not compatible with Quirks Mode");
    }

    var oldInit = jQuery.fn.init,
        oldIsNumeric = jQuery.isNumeric,
        oldFind = jQuery.find,
        rattrHashTest = /\[(\s*[-\w]+\s*)([~|^$*]?=)\s*([-\w#]*?#[-\w#]*)\s*\]/,
        rattrHashGlob = /\[(\s*[-\w]+\s*)([~|^$*]?=)\s*([-\w#]*?#[-\w#]*)\s*\]/g;

    jQuery.fn.init = function (arg1) {
        var args = Array.prototype.slice.call(arguments);

        if (typeof arg1 === "string" && arg1 === "#") {

            // JQuery( "#" ) is a bogus ID selector, but it returned an empty set before jQuery 3.0
            migrateWarn("jQuery( '#' ) is not a valid selector");
            args[0] = [];
        }

        return oldInit.apply(this, args);
    };
    jQuery.fn.init.prototype = jQuery.fn;

    jQuery.find = function (selector) {
        var args = Array.prototype.slice.call(arguments);

        // Support: PhantomJS 1.x
        // String#match fails to match when used with a //g RegExp, only on some strings
        if (typeof selector === "string" && rattrHashTest.test(selector)) {

            // The nonstandard and undocumented unquoted-hash was removed in jQuery 1.12.0
            // First see if qS thinks it's a valid selector, if so avoid a false positive
            try {
                document.querySelector(selector);
            } catch (err1) {

                // Didn't *look* valid to qSA, warn and try quoting what we think is the value
                selector = selector.replace(rattrHashGlob, function (_, attr, op, value) {
                    return "[" + attr + op + "\"" + value + "\"]";
                });

                // If the regexp *may* have created an invalid selector, don't update it
                // Note that there may be false alarms if selector uses jQuery extensions
                try {
                    document.querySelector(selector);
                    migrateWarn("Attribute selector with '#' must be quoted: " + args[0]);
                    args[0] = selector;
                } catch (err2) {
                    migrateWarn("Attribute selector with '#' was not fixed: " + args[0]);
                }
            }
        }

        return oldFind.apply(this, args);
    };

    // Copy properties attached to original jQuery.find method (e.g. .attr, .isXML)
    var findProp;
    for (findProp in oldFind) {
        if (Object.prototype.hasOwnProperty.call(oldFind, findProp)) {
            jQuery.find[findProp] = oldFind[findProp];
        }
    }

    // The number of elements contained in the matched element set
    jQuery.fn.size = function () {
        migrateWarn("jQuery.fn.size() is deprecated; use the .length property");
        return this.length;
    };

    jQuery.parseJSON = function () {
        migrateWarn("jQuery.parseJSON is deprecated; use JSON.parse");
        return JSON.parse.apply(null, arguments);
    };

    jQuery.isNumeric = function (val) {

        // The jQuery 2.2.3 implementation of isNumeric
        function isNumeric2(obj) {
            var realStringObj = obj && obj.toString();
            return !jQuery.isArray(obj) && realStringObj - parseFloat(realStringObj) + 1 >= 0;
        }

        var newValue = oldIsNumeric(val),
            oldValue = isNumeric2(val);

        if (newValue !== oldValue) {
            migrateWarn("jQuery.isNumeric() should not be called on constructed objects");
        }

        return oldValue;
    };

    migrateWarnProp(jQuery, "unique", jQuery.uniqueSort, "jQuery.unique is deprecated, use jQuery.uniqueSort");

    // Now jQuery.expr.pseudos is the standard incantation
    migrateWarnProp(jQuery.expr, "filters", jQuery.expr.pseudos, "jQuery.expr.filters is now jQuery.expr.pseudos");
    migrateWarnProp(jQuery.expr, ":", jQuery.expr.pseudos, "jQuery.expr[\":\"] is now jQuery.expr.pseudos");

    var oldAjax = jQuery.ajax;

    jQuery.ajax = function () {
        var jQXHR = oldAjax.apply(this, arguments);

        // Be sure we got a jQXHR (e.g., not sync)
        if (jQXHR.promise) {
            migrateWarnProp(jQXHR, "success", jQXHR.done, "jQXHR.success is deprecated and removed");
            migrateWarnProp(jQXHR, "error", jQXHR.fail, "jQXHR.error is deprecated and removed");
            migrateWarnProp(jQXHR, "complete", jQXHR.always, "jQXHR.complete is deprecated and removed");
        }

        return jQXHR;
    };

    var oldRemoveAttr = jQuery.fn.removeAttr,
        oldToggleClass = jQuery.fn.toggleClass,
        rmatchNonSpace = /\S+/g;

    jQuery.fn.removeAttr = function (name) {
        var self = this;

        jQuery.each(name.match(rmatchNonSpace), function (i, attr) {
            if (jQuery.expr.match.bool.test(attr)) {
                migrateWarn("jQuery.fn.removeAttr no longer sets boolean properties: " + attr);
                self.prop(attr, false);
            }
        });

        return oldRemoveAttr.apply(this, arguments);
    };

    jQuery.fn.toggleClass = function (state) {

        // Only deprecating no-args or single boolean arg
        if (state !== undefined && typeof state !== "boolean") {
            return oldToggleClass.apply(this, arguments);
        }

        migrateWarn("jQuery.fn.toggleClass( boolean ) is deprecated");

        // Toggle entire class name of each element
        return this.each(function () {
            var className = this.getAttribute && this.getAttribute("class") || "";

            if (className) {
                jQuery.data(this, "__className__", className);
            }

            // If the element has a class name or if we're passed `false`,
            // then remove the whole classname (if there was one, the above saved it).
            // Otherwise bring back whatever was previously saved (if anything),
            // falling back to the empty string if nothing was stored.
            if (this.setAttribute) {
                this.setAttribute("class", className || state === false ? "" : jQuery.data(this, "__className__") || "");
            }
        });
    };

    var internalSwapCall = false;

    // If this version of jQuery has .swap(), don't false-alarm on internal uses
    if (jQuery.swap) {
        jQuery.each(["height", "width", "reliableMarginRight"], function (_, name) {
            var oldHook = jQuery.cssHooks[name] && jQuery.cssHooks[name].get;

            if (oldHook) {
                jQuery.cssHooks[name].get = function () {
                    var ret;

                    internalSwapCall = true;
                    ret = oldHook.apply(this, arguments);
                    internalSwapCall = false;
                    return ret;
                };
            }
        });
    }

    jQuery.swap = function (elem, options, callback, args) {
        var ret,
            name,
            old = {};

        if (!internalSwapCall) {
            migrateWarn("jQuery.swap() is undocumented and deprecated");
        }

        // Remember the old values, and insert the new ones
        for (name in options) {
            old[name] = elem.style[name];
            elem.style[name] = options[name];
        }

        ret = callback.apply(elem, args || []);

        // Revert the old values
        for (name in options) {
            elem.style[name] = old[name];
        }

        return ret;
    };

    var oldData = jQuery.data;

    jQuery.data = function (elem, name, value) {
        var curData;

        // If the name is transformed, look for the un-transformed name in the data object
        if (name && name !== jQuery.camelCase(name)) {
            curData = jQuery.hasData(elem) && oldData.call(this, elem);
            if (curData && name in curData) {
                migrateWarn("jQuery.data() always sets/gets camelCased names: " + name);
                if (arguments.length > 2) {
                    curData[name] = value;
                }
                return curData[name];
            }
        }

        return oldData.apply(this, arguments);
    };

    var oldTweenRun = jQuery.Tween.prototype.run;

    jQuery.Tween.prototype.run = function (percent) {
        if (jQuery.easing[this.easing].length > 1) {
            migrateWarn("easing function " + "\"jQuery.easing." + this.easing.toString() + "\" should use only first argument");

            jQuery.easing[this.easing] = jQuery.easing[this.easing].bind(jQuery.easing, percent, this.options.duration * percent, 0, 1, this.options.duration);
        }

        oldTweenRun.apply(this, arguments);
    };

    var oldLoad = jQuery.fn.load,
        originalFix = jQuery.event.fix;

    jQuery.event.props = [];
    jQuery.event.fixHooks = {};

    jQuery.event.fix = function (originalEvent) {
        var event,
            type = originalEvent.type,
            fixHook = this.fixHooks[type],
            props = jQuery.event.props;

        if (props.length) {
            migrateWarn("jQuery.event.props are deprecated and removed: " + props.join());
            while (props.length) {
                jQuery.event.addProp(props.pop());
            }
        }

        if (fixHook && !fixHook._migrated_) {
            fixHook._migrated_ = true;
            migrateWarn("jQuery.event.fixHooks are deprecated and removed: " + type);
            if ((props = fixHook.props) && props.length) {
                while (props.length) {
                    jQuery.event.addProp(props.pop());
                }
            }
        }

        event = originalFix.call(this, originalEvent);

        return fixHook && fixHook.filter ? fixHook.filter(event, originalEvent) : event;
    };

    jQuery.each(["load", "unload", "error"], function (_, name) {

        jQuery.fn[name] = function () {
            var args = Array.prototype.slice.call(arguments, 0);

            // If this is an ajax load() the first arg should be the string URL;
            // technically this could also be the "Anything" arg of the event .load()
            // which just goes to show why this dumb signature has been deprecated!
            // jQuery custom builds that exclude the Ajax module justifiably die here.
            if (name === "load" && typeof args[0] === "string") {
                return oldLoad.apply(this, args);
            }

            migrateWarn("jQuery.fn." + name + "() is deprecated");

            args.splice(0, 0, name);
            if (arguments.length) {
                return this.on.apply(this, args);
            }

            // Use .triggerHandler here because:
            // - load and unload events don't need to bubble, only applied to window or image
            // - error event should not bubble to window, although it does pre-1.7
            // See http://bugs.jquery.com/ticket/11820
            this.triggerHandler.apply(this, args);
            return this;
        };
    });

    // Trigger "ready" event only once, on document ready
    jQuery(function () {
        jQuery(document).triggerHandler("ready");
    });

    jQuery.event.special.ready = {
        setup: function setup() {
            if (this === document) {
                migrateWarn("'ready' event is deprecated");
            }
        }
    };

    jQuery.fn.extend({

        bind: function bind(types, data, fn) {
            migrateWarn("jQuery.fn.bind() is deprecated");
            return this.on(types, null, data, fn);
        },
        unbind: function unbind(types, fn) {
            migrateWarn("jQuery.fn.unbind() is deprecated");
            return this.off(types, null, fn);
        },
        delegate: function delegate(selector, types, data, fn) {
            migrateWarn("jQuery.fn.delegate() is deprecated");
            return this.on(types, selector, data, fn);
        },
        undelegate: function undelegate(selector, types, fn) {
            migrateWarn("jQuery.fn.undelegate() is deprecated");
            return arguments.length === 1 ? this.off(selector, "**") : this.off(types, selector || "**", fn);
        }
    });

    var oldOffset = jQuery.fn.offset;

    jQuery.fn.offset = function () {
        var docElem,
            elem = this[0],
            origin = { top: 0, left: 0 };

        if (!elem || !elem.nodeType) {
            migrateWarn("jQuery.fn.offset() requires a valid DOM element");
            return origin;
        }

        docElem = (elem.ownerDocument || document).documentElement;
        if (!jQuery.contains(docElem, elem)) {
            migrateWarn("jQuery.fn.offset() requires an element connected to a document");
            return origin;
        }

        return oldOffset.apply(this, arguments);
    };

    var oldParam = jQuery.param;

    jQuery.param = function (data, traditional) {
        var ajaxTraditional = jQuery.ajaxSettings && jQuery.ajaxSettings.traditional;

        if (traditional === undefined && ajaxTraditional) {

            migrateWarn("jQuery.param() no longer uses jQuery.ajaxSettings.traditional");
            traditional = ajaxTraditional;
        }

        return oldParam.call(this, data, traditional);
    };

    var oldSelf = jQuery.fn.andSelf || jQuery.fn.addBack;

    jQuery.fn.andSelf = function () {
        migrateWarn("jQuery.fn.andSelf() replaced by jQuery.fn.addBack()");
        return oldSelf.apply(this, arguments);
    };

    var oldDeferred = jQuery.Deferred,
        tuples = [

    // Action, add listener, callbacks, .then handlers, final state
    ["resolve", "done", jQuery.Callbacks("once memory"), jQuery.Callbacks("once memory"), "resolved"], ["reject", "fail", jQuery.Callbacks("once memory"), jQuery.Callbacks("once memory"), "rejected"], ["notify", "progress", jQuery.Callbacks("memory"), jQuery.Callbacks("memory")]];

    jQuery.Deferred = function (func) {
        var deferred = oldDeferred(),
            promise = deferred.promise();

        deferred.pipe = promise.pipe = function () /* fnDone, fnFail, fnProgress */{
            var fns = arguments;

            migrateWarn("deferred.pipe() is deprecated");

            return jQuery.Deferred(function (newDefer) {
                jQuery.each(tuples, function (i, tuple) {
                    var fn = jQuery.isFunction(fns[i]) && fns[i];

                    // Deferred.done(function() { bind to newDefer or newDefer.resolve })
                    // deferred.fail(function() { bind to newDefer or newDefer.reject })
                    // deferred.progress(function() { bind to newDefer or newDefer.notify })
                    deferred[tuple[1]](function () {
                        var returned = fn && fn.apply(this, arguments);
                        if (returned && jQuery.isFunction(returned.promise)) {
                            returned.promise().done(newDefer.resolve).fail(newDefer.reject).progress(newDefer.notify);
                        } else {
                            newDefer[tuple[0] + "With"](this === promise ? newDefer.promise() : this, fn ? [returned] : arguments);
                        }
                    });
                });
                fns = null;
            }).promise();
        };

        if (func) {
            func.call(deferred, deferred);
        }

        return deferred;
    };
})(jQuery, window);

},{}]},{},[5]);
