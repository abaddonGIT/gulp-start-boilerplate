/**
 * Created by Abaddon on 31.05.2016.
 */
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = {
    messageWrap: "<div id=\"w3cVlidate\">{{=it}}</div>",
    messageItems: "<ol>{{~it :item:index}}\n                            <li class=\"w3c--{{=item.type}}\">\n                                <b>{{=item.type}}</b>\n                                <i>{{=item.message}}</i>\n                                <hr />\n                                From line {{=item.hiliteStart}}, column {{=item.firstColumn}}; to line {{=item.lastLine}}, column {{=item.lastColumn}}\n                                <code>{{=item.extract}}</code>\n                            </li>\n                       {{~}}\n                   </ol>"
};
module.exports = exports["default"];

//# sourceMappingURL=template-compiled.js.map