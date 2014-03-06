/*
 * ext-helloworld.js
 *
 * Licensed under the MIT License
 *
 * Copyright(c) 2010 Alexis Deveria
 *
 */
svgEditor.addExtension("Hello World",function(){return{name:"Hello World",svgicons:"/assets/extensions/helloworld-icon.xml",buttons:[{id:"hello_world",type:"mode",title:"Say 'Hello World'",events:{click:function(){svgCanvas.setMode("hello_world")}}}],mouseDown:function(){return"hello_world"==svgCanvas.getMode()?{started:!0}:void 0},mouseUp:function(t){if("hello_world"==svgCanvas.getMode()){var e=svgCanvas.getZoom(),i=t.mouse_x/e,n=t.mouse_y/e,a="Hello World!\n\nYou clicked here: "+i+", "+n;$.alert(a)}}}});