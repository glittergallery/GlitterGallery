function embedded_svg_edit(frame){this.frame=frame,this.callbacks={},this.encode=embedded_svg_edit.encode;for(var functions=["updateElementFromJson","embedImage","fixOperaXML","clearSelection","addToSelection","removeFromSelection","addNodeToSelection","open","save","getSvgString","setSvgString","createLayer","deleteCurrentLayer","getCurrentDrawing","setCurrentLayer","renameCurrentLayer","setCurrentLayerPosition","setLayerVisibility","moveSelectedToLayer","clear","clearPath","getNodePoint","clonePathNode","deletePathNode","getResolution","getImageTitle","setImageTitle","setResolution","setBBoxZoom","setZoom","getMode","setMode","getStrokeColor","setStrokeColor","getFillColor","setFillColor","setStrokePaint","setFillPaint","getStrokeWidth","setStrokeWidth","getStrokeStyle","setStrokeStyle","getOpacity","setOpacity","getFillOpacity","setFillOpacity","getStrokeOpacity","setStrokeOpacity","getTransformList","getBBox","getRotationAngle","setRotationAngle","each","bind","setIdPrefix","getBold","setBold","getItalic","setItalic","getFontFamily","setFontFamily","getFontSize","setFontSize","getText","setTextContent","setImageURL","setRectRadius","setSegType","quickClone","changeSelectedAttributeNoUndo","changeSelectedAttribute","deleteSelectedElements","groupSelectedElements","zoomChanged","ungroupSelectedElement","moveToTopSelectedElement","moveToBottomSelectedElement","moveSelectedElements","getStrokedBBox","getVisibleElements","cycleElement","getUndoStackSize","getRedoStackSize","getNextUndoCommandText","getNextRedoCommandText","undo","redo","cloneSelectedElements","alignSelectedElements","getZoom","getVersion","setIconSize","setLang","setCustomHandlers"],i=0;i<functions.length;i++)this[functions[i]]=function(e){return function(){for(var t=this,i=0,n=[];i<arguments.length;i++)n.push(arguments[i]);var a=t.send(e,n,function(){});return function(e){t.callbacks[a]=e}}}(functions[i]);var t=this;window.addEventListener("message",function(e){if("SVGe"==e.data.substr(0,4)){var data=e.data.substr(4),cbid=data.substr(0,data.indexOf(";"));t.callbacks[cbid]&&("error:"!=data.substr(cbid.length+1,6)?t.callbacks[cbid](eval("("+data.substr(cbid.length+1)+")")):t.callbacks[cbid](data,"error"))}},!1)}function submitHandler(e){var t=e.data;svgCanvas[t].getSvgString()(function(e,i){handleSvgData(e,i,t)}),e.preventDefault(),e.stopImmediatePropagation()}function attachSubmitHandler(e){var t=e.data;$("input#"+t).closest("form").on("submit.svgedit_"+t,null,t,submitHandler)}function handleSvgData(e,t,i){if(t)alert("Error: "+t);else{var n=$("input#"+i),a=n.closest("form");n.attr("value",sketchily_encode64('<?xml version="1.0"?>\n'+e)),a.off("submit.svgedit_"+i),a.one("submit.svgedit_"+i,null,i,attachSubmitHandler),a.submit()}}function initEmbed(e,t,i,n,a,s){var r=document.getElementById("svgedit_"+e);svgCanvas[e]=new embedded_svg_edit(r);var o=r.contentDocument;if(o||(o=r.contentWindow.document),i){var l=o.getElementById("main_button");l.parentNode.removeChild(l);var c=o.getElementById("tools_top");c.style.left="5px"}if(n){var u=o.getElementById("tool_image");u.parentNode.removeChild(u)}if(!a){var h=o.getElementById("tool_make_link");h.parentNode.removeChild(h)}s||svgCanvas[e].setSvgString(sketchily_decode64(t)),$("input#"+e).closest("form").on("submit.svgedit_"+e,null,e,submitHandler),$("#svgedit_"+e).css("visibility","")}function attachLoadHandler(e,t,i,n,a,s){var r=$("#svgedit_"+e);r.attr("src")?r.load(function(){initEmbed(e,t,i,n,a,s)}):setTimeout(function(){attachLoadHandler(e,t,i,n,a,s)},0)}embedded_svg_edit.encode=function(e){if(window.JSON&&JSON.stringify)return JSON.stringify(e);var t=arguments.callee;if("boolean"==typeof e||"number"==typeof e)return e+"";if("string"==typeof e)return'"'+e.replace(/[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,function(e){return"\\u"+("0000"+e.charCodeAt(0).toString(16)).slice(-4)})+'"';if(e.length){for(var i=0;i<e.length;i++)e[i]=t(e[i]);return"["+e.join(",")+"]"}var n=[];for(var a in e)n.push(t(a)+":"+t(e[a]));return"{"+n.join(",")+"}"},embedded_svg_edit.prototype.send=function(e,t,i){var n=Math.floor(31776352877*Math.random()+993577).toString();this.callbacks[n]=i;for(var a=[],s=0;s<t.length;s++)a.push(this.encode(t[s]));var r=this;return setTimeout(function(){r.frame.contentWindow.postMessage(n+";svgCanvas['"+e+"']("+a.join(",")+")","*")},0),n};var sketchily_encode64=function(e){if(e=sketchily_convertToXMLReferences(e),window.btoa)return window.btoa(e);var t,i,n,a,s,r,o,l=new Array(4*Math.floor((e.length+2)/3)),c=0,u=0;do t=e.charCodeAt(c++),i=e.charCodeAt(c++),n=e.charCodeAt(c++),a=t>>2,s=(3&t)<<4|i>>4,r=(15&i)<<2|n>>6,o=63&n,isNaN(i)?r=o=64:isNaN(n)&&(o=64),l[u++]=KEYSTR.charAt(a),l[u++]=KEYSTR.charAt(s),l[u++]=KEYSTR.charAt(r),l[u++]=KEYSTR.charAt(o);while(c<e.length);return l.join("")},sketchily_decode64=function(e){if(window.atob)return window.atob(e);var t,i,n,a,s,r="",o="",l="",c=0;e=e.replace(/[^A-Za-z0-9\+\/\=]/g,"");do n=KEYSTR.indexOf(e.charAt(c++)),a=KEYSTR.indexOf(e.charAt(c++)),s=KEYSTR.indexOf(e.charAt(c++)),l=KEYSTR.indexOf(e.charAt(c++)),t=n<<2|a>>4,i=(15&a)<<4|s>>2,o=(3&s)<<6|l,r+=String.fromCharCode(t),64!=s&&(r+=String.fromCharCode(i)),64!=l&&(r+=String.fromCharCode(o)),t=i=o="",n=a=s=l="";while(c<e.length);return unescape(r)},sketchily_convertToXMLReferences=function(e){for(var t="",i=0;i<e.length;i++){var n=e.charCodeAt(i);128>n?t+=e[i]:n>127&&(t+="&#"+n+";")}return t},svgCanvas=svgCanvas||{};