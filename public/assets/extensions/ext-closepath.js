/*
 * ext-closepath.js
 *
 * Licensed under the MIT License
 *
 * Copyright(c) 2010 Jeff Schiller
 *
 */
svgEditor.addExtension("ClosePath",function(){var t,e=function(t){var e=t.pathSegList,i=1==e.getItem(e.numberOfItems-1).pathSegType,n=i?"#tool_openpath":"#tool_closepath",a=i?"#tool_closepath":"#tool_openpath";$(a).hide(),$(n).show()},i=function(i){if($("#closepath_panel").toggle(i),i){var n=t[0];n&&e(n)}},n=function(){var i=t[0];if(i){var n=i.pathSegList,a=n.numberOfItems-1;1==n.getItem(a).pathSegType?n.removeItem(a):n.appendItem(i.createSVGPathSegClosePath()),e(i)}};return{name:"ClosePath",svgicons:"/assets/extensions/closepath_icons.svg",buttons:[{id:"tool_openpath",type:"context",panel:"closepath_panel",title:"Open path",events:{click:function(){n()}}},{id:"tool_closepath",type:"context",panel:"closepath_panel",title:"Close path",events:{click:function(){n()}}}],callback:function(){$("#closepath_panel").hide()},selectedChanged:function(e){t=e.elems;for(var n=t.length;n--;){var a=t[n];a&&"path"==a.tagName?e.selectedElement&&!e.multiselected?i(!0):i(!1):i(!1)}}}});