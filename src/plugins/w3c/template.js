/**
 * Created by Abaddon on 31.05.2016.
 */
"use strict";
export default {
    messageWrap: `<div id="w3cVlidate">{{=it}}</div>`,
    messageItems: `<ol>{{~it :item:index}}
                            <li class="w3c--{{=item.type}}">
                                <b>{{=item.type}}</b>
                                <i>{{=item.message}}</i>
                                <hr />
                                From line {{=item.hiliteStart}}, column {{=item.firstColumn}}; to line {{=item.lastLine}}, column {{=item.lastColumn}}
                                <code>{{=item.extract}}</code>
                            </li>
                       {{~}}
                   </ol>`
}