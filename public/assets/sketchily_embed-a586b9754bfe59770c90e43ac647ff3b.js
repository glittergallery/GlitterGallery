function embedded_svg_edit(frame){this.frame=frame,this.callbacks={},this.encode=embedded_svg_edit.encode;for(var functions=["updateElementFromJson","embedImage","fixOperaXML","clearSelection","addToSelection","removeFromSelection","addNodeToSelection","open","save","getSvgString","setSvgString","createLayer","deleteCurrentLayer","getCurrentDrawing","setCurrentLayer","renameCurrentLayer","setCurrentLayerPosition","setLayerVisibility","moveSelectedToLayer","clear","clearPath","getNodePoint","clonePathNode","deletePathNode","getResolution","getImageTitle","setImageTitle","setResolution","setBBoxZoom","setZoom","getMode","setMode","getStrokeColor","setStrokeColor","getFillColor","setFillColor","setStrokePaint","setFillPaint","getStrokeWidth","setStrokeWidth","getStrokeStyle","setStrokeStyle","getOpacity","setOpacity","getFillOpacity","setFillOpacity","getStrokeOpacity","setStrokeOpacity","getTransformList","getBBox","getRotationAngle","setRotationAngle","each","bind","setIdPrefix","getBold","setBold","getItalic","setItalic","getFontFamily","setFontFamily","getFontSize","setFontSize","getText","setTextContent","setImageURL","setRectRadius","setSegType","quickClone","changeSelectedAttributeNoUndo","changeSelectedAttribute","deleteSelectedElements","groupSelectedElements","zoomChanged","ungroupSelectedElement","moveToTopSelectedElement","moveToBottomSelectedElement","moveSelectedElements","getStrokedBBox","getVisibleElements","cycleElement","getUndoStackSize","getRedoStackSize","getNextUndoCommandText","getNextRedoCommandText","undo","redo","cloneSelectedElements","alignSelectedElements","getZoom","getVersion","setIconSize","setLang","setCustomHandlers"],i=0;i<functions.length;i++)this[functions[i]]=function(e){return function(){for(var t=this,n=0,o=[];n<arguments.length;n++)o.push(arguments[n]);var a=t.send(e,o,function(){});return function(e){t.callbacks[a]=e}}}(functions[i]);var t=this;window.addEventListener("message",function(e){if("SVGe"==e.data.substr(0,4)){var data=e.data.substr(4),cbid=data.substr(0,data.indexOf(";"));t.callbacks[cbid]&&("error:"!=data.substr(cbid.length+1,6)?t.callbacks[cbid](eval("("+data.substr(cbid.length+1)+")")):t.callbacks[cbid](data,"error"))}},!1)}function submitHandler(e){var t=e.data;svgCanvas[t].getSvgString()(function(e,n){handleSvgData(e,n,t)}),e.preventDefault(),e.stopImmediatePropagation()}function attachSubmitHandler(e){var t=e.data;$("input#"+t).closest("form").on("submit.svgedit_"+t,null,t,submitHandler)}function handleSvgData(e,t,n){if(t)alert("Error: "+t);else{var o=$("input#"+n),a=o.closest("form");o.attr("value",sketchily_encode64('<?xml version="1.0"?>\n'+e)),a.off("submit.svgedit_"+n),a.one("submit.svgedit_"+n,null,n,attachSubmitHandler),a.submit()}}function initEmbed(e,t,n,o,a,r){var i=document.getElementById("svgedit_"+e);svgCanvas[e]=new embedded_svg_edit(i);var s=i.contentDocument;if(s||(s=i.contentWindow.document),n){var d=s.getElementById("main_button");d.parentNode.removeChild(d);var l=s.getElementById("tools_top");l.style.left="5px"}if(o){var c=s.getElementById("tool_image");c.parentNode.removeChild(c)}if(!a){var u=s.getElementById("tool_make_link");u.parentNode.removeChild(u)}r||svgCanvas[e].setSvgString(sketchily_decode64(t)),$("input#"+e).closest("form").on("submit.svgedit_"+e,null,e,submitHandler),$("#svgedit_"+e).css("visibility","")}function attachLoadHandler(e,t,n,o,a,r){var i=$("#svgedit_"+e);i.attr("src")?i.load(function(){initEmbed(e,t,n,o,a,r)}):setTimeout(function(){attachLoadHandler(e,t,n,o,a,r)},0)}embedded_svg_edit.encode=function(e){if(window.JSON&&JSON.stringify)return JSON.stringify(e);var t=arguments.callee;if("boolean"==typeof e||"number"==typeof e)return e+"";if("string"==typeof e)return'"'+e.replace(/[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,function(e){return"\\u"+("0000"+e.charCodeAt(0).toString(16)).slice(-4)})+'"';if(e.length){for(var n=0;n<e.length;n++)e[n]=t(e[n]);return"["+e.join(",")+"]"}var o=[];for(var a in e)o.push(t(a)+":"+t(e[a]));return"{"+o.join(",")+"}"},embedded_svg_edit.prototype.send=function(e,t,n){var o=Math.floor(31776352877*Math.random()+993577).toString();this.callbacks[o]=n;for(var a=[],r=0;r<t.length;r++)a.push(this.encode(t[r]));var i=this;return setTimeout(function(){i.frame.contentWindow.postMessage(o+";svgCanvas['"+e+"']("+a.join(",")+")","*")},0),o};var sketchily_encode64=function(e){if(e=sketchily_convertToXMLReferences(e),window.btoa)return window.btoa(e);var t,n,o,a,r,i,s,d=new Array(4*Math.floor((e.length+2)/3)),l=0,c=0;do t=e.charCodeAt(l++),n=e.charCodeAt(l++),o=e.charCodeAt(l++),a=t>>2,r=(3&t)<<4|n>>4,i=(15&n)<<2|o>>6,s=63&o,isNaN(n)?i=s=64:isNaN(o)&&(s=64),d[c++]=KEYSTR.charAt(a),d[c++]=KEYSTR.charAt(r),d[c++]=KEYSTR.charAt(i),d[c++]=KEYSTR.charAt(s);while(l<e.length);return d.join("")},sketchily_decode64=function(e){if(window.atob)return window.atob(e);var t,n,o,a,r,i="",s="",d="",l=0;e=e.replace(/[^A-Za-z0-9\+\/\=]/g,"");do o=KEYSTR.indexOf(e.charAt(l++)),a=KEYSTR.indexOf(e.charAt(l++)),r=KEYSTR.indexOf(e.charAt(l++)),d=KEYSTR.indexOf(e.charAt(l++)),t=o<<2|a>>4,n=(15&a)<<4|r>>2,s=(3&r)<<6|d,i+=String.fromCharCode(t),64!=r&&(i+=String.fromCharCode(n)),64!=d&&(i+=String.fromCharCode(s)),t=n=s="",o=a=r=d="";while(l<e.length);return unescape(i)},sketchily_convertToXMLReferences=function(e){for(var t="",n=0;n<e.length;n++){var o=e.charCodeAt(n);128>o?t+=e[n]:o>127&&(t+="&#"+o+";")}return t},svgCanvas=svgCanvas||{};