/*
function embedded_svg_edit(frame){
  //initialize communication
  this.frame = frame;
  this.stack = []; //callback stack
  
  var editapi = this;
  
  window.addEventListener("message", function(e){
    if(e.data.substr(0,5) == "ERROR"){
      editapi.stack.splice(0,1)[0](e.data,"error")
    }else{
      editapi.stack.splice(0,1)[0](e.data)
    }
  }, false)
}

embedded_svg_edit.prototype.call = function(code, callback){
  this.stack.push(callback);
  this.frame.contentWindow.postMessage(code,"*");
}

embedded_svg_edit.prototype.getSvgString = function(callback){
  this.call("svgCanvas.getSvgString()",callback)
}

embedded_svg_edit.prototype.setSvgString = function(svg){
  this.call("svgCanvas.setSvgString('"+svg.replace(/'/g, "\\'")+"')");
}
*/


/*
Embedded SVG-edit API

General usage:
- Have an iframe somewhere pointing to a version of svg-edit > r1000
- Initialize the magic with:
var svgCanvas = new embedded_svg_edit(window.frames['svgedit']);
- Pass functions in this format:
svgCanvas.setSvgString("string")
- Or if a callback is needed:
svgCanvas.setSvgString("string")(function(data, error){
  if(error){
    //there was an error
  }else{
    //handle data
  }
})

Everything is done with the same API as the real svg-edit, 
and all documentation is unchanged. The only difference is
when handling returns, the callback notation is used instead. 

var blah = new embedded_svg_edit(window.frames['svgedit']);
blah.clearSelection("woot","blah",1337,[1,2,3,4,5,"moo"],-42,{a: "tree",b:6, c: 9})(function(){console.log("GET DATA",arguments)})
*/


function embedded_svg_edit(frame){
  //initialize communication
  this.frame = frame;
  //this.stack = [] //callback stack
  this.callbacks = {}; //successor to stack
  this.encode = embedded_svg_edit.encode;
  //List of functions extracted with this:
  //Run in firebug on http://svg-edit.googlecode.com/svn/trunk/docs/files/svgcanvas-js.html
  
  //for(var i=0,q=[],f = document.querySelectorAll("div.CFunction h3.CTitle a");i<f.length;i++){q.push(f[i].name)};q
  //var functions = ["clearSelection", "addToSelection", "removeFromSelection", "open", "save", "getSvgString", "setSvgString",
  //"createLayer", "deleteCurrentLayer", "setCurrentLayer", "renameCurrentLayer", "setCurrentLayerPosition", "setLayerVisibility",
  //"moveSelectedToLayer", "clear"];
  
  
  //Newer, well, it extracts things that aren't documented as well. All functions accessible through the normal thingy can now be accessed though the API
  //var l=[];for(var i in svgCanvas){if(typeof svgCanvas[i] == "function"){l.push(i)}};
  //run in svgedit itself
  var functions = ["updateElementFromJson", "embedImage", "fixOperaXML", "clearSelection", "addToSelection",
		"removeFromSelection", "addNodeToSelection", "open", "save", "getSvgString", "setSvgString", "createLayer",
		"deleteCurrentLayer", "getCurrentDrawing", "setCurrentLayer", "renameCurrentLayer", "setCurrentLayerPosition",
		"setLayerVisibility", "moveSelectedToLayer", "clear", "clearPath", "getNodePoint", "clonePathNode", "deletePathNode",
		"getResolution", "getImageTitle", "setImageTitle", "setResolution", "setBBoxZoom", "setZoom", "getMode", "setMode",
		"getStrokeColor", "setStrokeColor", "getFillColor", "setFillColor", "setStrokePaint", "setFillPaint", "getStrokeWidth",
		"setStrokeWidth", "getStrokeStyle", "setStrokeStyle", "getOpacity", "setOpacity", "getFillOpacity", "setFillOpacity",
		"getStrokeOpacity", "setStrokeOpacity", "getTransformList", "getBBox", "getRotationAngle", "setRotationAngle", "each",
		"bind", "setIdPrefix", "getBold", "setBold", "getItalic", "setItalic", "getFontFamily", "setFontFamily", "getFontSize",
		"setFontSize", "getText", "setTextContent", "setImageURL", "setRectRadius", "setSegType", "quickClone",
		"changeSelectedAttributeNoUndo", "changeSelectedAttribute", "deleteSelectedElements", "groupSelectedElements", "zoomChanged",
		"ungroupSelectedElement", "moveToTopSelectedElement", "moveToBottomSelectedElement", "moveSelectedElements",
		"getStrokedBBox", "getVisibleElements", "cycleElement", "getUndoStackSize", "getRedoStackSize", "getNextUndoCommandText",
		"getNextRedoCommandText", "undo", "redo", "cloneSelectedElements", "alignSelectedElements", "getZoom", "getVersion",
		"setIconSize", "setLang", "setCustomHandlers"];
  
  //TODO: rewrite the following, it's pretty scary.
  for(var i = 0; i < functions.length; i++){
    this[functions[i]] = (function(d){
      return function(){
        var t = this //new callback
        for(var g = 0, args = []; g < arguments.length; g++){
          args.push(arguments[g]);
        }
        var cbid = t.send(d,args, function(){})  //the callback (currently it's nothing, but will be set later
        
        return function(newcallback){
          t.callbacks[cbid] = newcallback; //set callback
        }
      }
    })(functions[i])
  }
  //TODO: use AddEvent for Trident browsers, currently they dont support SVG, but they do support onmessage
  var t = this;
  window.addEventListener("message", function(e){
    if(e.data.substr(0,4)=="SVGe"){ //because svg-edit is too longish
      var data = e.data.substr(4);
      var cbid = data.substr(0, data.indexOf(";"));
      if(t.callbacks[cbid]){
        if(data.substr(cbid.length + 1,6) != "error:"){
          t.callbacks[cbid](eval("("+data.substr(cbid.length+1)+")"))
        }else{
          t.callbacks[cbid](data, "error");
        }
      }
    }
    //this.stack.shift()[0](e.data,e.data.substr(0,5) == "ERROR"?'error':null) //replace with shift
  }, false)
}

embedded_svg_edit.encode = function(obj){
  //simple partial JSON encoder implementation
  if(window.JSON && JSON.stringify) return JSON.stringify(obj);
  var enc = arguments.callee; //for purposes of recursion
  
  if(typeof obj == "boolean" || typeof obj == "number"){
      return obj+'' //should work...
  }else if(typeof obj == "string"){
    //a large portion of this is stolen from Douglas Crockford's json2.js
    return '"'+
          obj.replace(
            /[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g
          , function (a) {
            return '\\u' + ('0000' + a.charCodeAt(0).toString(16)).slice(-4);
          })
          +'"'; //note that this isn't quite as purtyful as the usualness
  }else if(obj.length){ //simple hackish test for arrayish-ness
    for(var i = 0; i < obj.length; i++){
      obj[i] = enc(obj[i]); //encode every sub-thingy on top
    }
    return "["+obj.join(",")+"]";
  }else{
    var pairs = []; //pairs will be stored here
    for(var k in obj){ //loop through thingys
      pairs.push(enc(k)+":"+enc(obj[k])); //key: value
    }
    return "{"+pairs.join(",")+"}" //wrap in the braces
  }
}

embedded_svg_edit.prototype.send = function(name, args, callback){
  var cbid = Math.floor(Math.random()*31776352877+993577).toString();
  //this.stack.push(callback);
  this.callbacks[cbid] = callback;
  for(var argstr = [], i = 0; i < args.length; i++){
    argstr.push(this.encode(args[i]))
  }
  var t = this;
  setTimeout(function(){//delay for the callback to be set in case its synchronous
    t.frame.contentWindow.postMessage(cbid+";svgCanvas['"+name+"']("+argstr.join(",")+")","*");
  }, 0);
  return cbid;
  //this.stack.shift()("svgCanvas['"+name+"']("+argstr.join(",")+")")
}



;
// This code was written by Tyler Akins and has been placed in the
// public domain.  It would be nice if you left this header intact.
// Base64 code from Tyler Akins -- http://rumkin.com

// schiller: Removed string concatenation in favour of Array.join() optimization,
//           also precalculate the size of the array needed.

// Function: sketchily_encode64
// Converts a string to base64
var sketchily_encode64 = function(input) {
  // base64 strings are 4/3 larger than the original string
  input = sketchily_convertToXMLReferences(input);
  if(window.btoa) return window.btoa(input); // Use native if available
  var output = new Array( Math.floor( (input.length + 2) / 3 ) * 4 );
  var chr1, chr2, chr3;
  var enc1, enc2, enc3, enc4;
  var i = 0, p = 0;

  do {
	  chr1 = input.charCodeAt(i++);
	  chr2 = input.charCodeAt(i++);
	  chr3 = input.charCodeAt(i++);

	  enc1 = chr1 >> 2;
	  enc2 = ((chr1 & 3) << 4) | (chr2 >> 4);
	  enc3 = ((chr2 & 15) << 2) | (chr3 >> 6);
	  enc4 = chr3 & 63;

	  if (isNaN(chr2)) {
		  enc3 = enc4 = 64;
	  } else if (isNaN(chr3)) {
		  enc4 = 64;
	  }

	  output[p++] = KEYSTR.charAt(enc1);
	  output[p++] = KEYSTR.charAt(enc2);
	  output[p++] = KEYSTR.charAt(enc3);
	  output[p++] = KEYSTR.charAt(enc4);
  } while (i < input.length);

  return output.join('');
};

// Function: sketchily_decode64
// Converts a string from base64
var sketchily_decode64 = function(input) {
  if(window.atob) return window.atob(input);
  var output = "";
  var chr1, chr2, chr3 = "";
  var enc1, enc2, enc3, enc4 = "";
  var i = 0;

   // remove all characters that are not A-Z, a-z, 0-9, +, /, or =
   input = input.replace(/[^A-Za-z0-9\+\/\=]/g, "");

   do {
	  enc1 = KEYSTR.indexOf(input.charAt(i++));
	  enc2 = KEYSTR.indexOf(input.charAt(i++));
	  enc3 = KEYSTR.indexOf(input.charAt(i++));
	  enc4 = KEYSTR.indexOf(input.charAt(i++));

	  chr1 = (enc1 << 2) | (enc2 >> 4);
	  chr2 = ((enc2 & 15) << 4) | (enc3 >> 2);
	  chr3 = ((enc3 & 3) << 6) | enc4;

	  output = output + String.fromCharCode(chr1);

	  if (enc3 != 64) {
	     output = output + String.fromCharCode(chr2);
	  }
	  if (enc4 != 64) {
	     output = output + String.fromCharCode(chr3);
	  }

	  chr1 = chr2 = chr3 = "";
	  enc1 = enc2 = enc3 = enc4 = "";

   } while (i < input.length);
   return unescape(output);
};

// Function: sketchily_convertToXMLReferences 
// Converts a string to use XML references
var sketchily_convertToXMLReferences = function(input) {
	var output = '';
	for (var n = 0; n < input.length; n++){
		var c = input.charCodeAt(n);
		if (c < 128) {
			output += input[n];
		} else if(c > 127) {
			output += ("&#" + c + ";");
		}
	}
	return output;
};



var svgCanvas = svgCanvas || {};

function submitHandler(event) {
  var id = event.data;
  svgCanvas[id].getSvgString()(function (data, error) {
    handleSvgData(data, error, id);
  });
  event.preventDefault();
  event.stopImmediatePropagation();
}

function attachSubmitHandler(event) {
  var id = event.data;
  $("input#" + id).closest("form").on("submit.svgedit_" + id, null, id, submitHandler);
}

function handleSvgData(data, error, id) {
  if (error) {
    alert('Error: ' + error);
  }
  else {
    var input = $("input#" + id);
    var form = input.closest("form");
    input.attr("value", sketchily_encode64("<?xml version=\"1.0\"?>\n" + data));
    form.off("submit.svgedit_" + id);
    form.one("submit.svgedit_" + id, null, id, attachSubmitHandler);
    form.submit();
  }
}

function initEmbed(id, value, hide_menu, hide_image_tool, show_hyperlink_tool, url) {
  var frame = document.getElementById("svgedit_" + id);
  svgCanvas[id] = new embedded_svg_edit(frame);
  
  var doc = frame.contentDocument;
  if (!doc) {
    doc = frame.contentWindow.document;
  }

  if (hide_menu) {
    var mainButton = doc.getElementById('main_button');
    mainButton.parentNode.removeChild(mainButton);
    var toolsTop = doc.getElementById('tools_top');
    toolsTop.style.left = '5px';
  }

  if (hide_image_tool) {
    var imageTool = doc.getElementById('tool_image');
    imageTool.parentNode.removeChild(imageTool);
  }

  if (!show_hyperlink_tool) {
    var hyperlinkTool = doc.getElementById('tool_make_link');
    hyperlinkTool.parentNode.removeChild(hyperlinkTool);
  }

  if (!url) {
    svgCanvas[id].setSvgString(sketchily_decode64(value));
  }

  $("input#" + id).closest("form").on("submit.svgedit_" + id, null, id, submitHandler);

  $("#svgedit_" + id).css('visibility', '');
}

function attachLoadHandler(id, value, hide_menu, hide_image_tool, show_hyperlink_tool, url) {
  var frame = $("#svgedit_" + id);
  if (frame.attr('src')) {
    frame.load(function () {
      initEmbed(id, value, hide_menu, hide_image_tool, show_hyperlink_tool, url);
    });
  }
  else {
    setTimeout(function () {
      attachLoadHandler(id, value, hide_menu, hide_image_tool, show_hyperlink_tool, url);
    }, 0);
  }
}
;
