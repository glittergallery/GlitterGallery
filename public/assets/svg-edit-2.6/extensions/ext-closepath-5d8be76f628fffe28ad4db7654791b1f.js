svgEditor.addExtension("ClosePath",function(){var e,t=function(e){var t=e.pathSegList,o=1==t.getItem(t.numberOfItems-1).pathSegType,a=o?"#tool_openpath":"#tool_closepath",n=o?"#tool_closepath":"#tool_openpath";$(n).hide(),$(a).show()},o=function(o){if($("#closepath_panel").toggle(o),o){var a=e[0];a&&t(a)}},a=function(){var o=e[0];if(o){var a=o.pathSegList,n=a.numberOfItems-1;1==a.getItem(n).pathSegType?a.removeItem(n):a.appendItem(o.createSVGPathSegClosePath()),t(o)}};return{name:"ClosePath",svgicons:"/assets/svg-edit-2.6/extensions/closepath_icons.svg",buttons:[{id:"tool_openpath",type:"context",panel:"closepath_panel",title:"Open path",events:{click:function(){a()}}},{id:"tool_closepath",type:"context",panel:"closepath_panel",title:"Close path",events:{click:function(){a()}}}],callback:function(){$("#closepath_panel").hide()},selectedChanged:function(t){e=t.elems;for(var a=e.length;a--;){var n=e[a];n&&"path"==n.tagName?t.selectedElement&&!t.multiselected?o(!0):o(!1):o(!1)}}}});