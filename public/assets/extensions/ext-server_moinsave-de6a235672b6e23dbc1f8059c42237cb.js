/*
 * ext-server_moinsave.js
 *
 * Licensed under the MIT License
 *
 * Copyright(c) 2010 Alexis Deveria
 *              2011 MoinMoin:ReimarBauer
 *                   adopted for moinmoins item storage. it sends in one post png and svg data
 *                   (I agree to dual license my work to additional GPLv2 or later)
 *
 */
svgEditor.addExtension("server_opensave",{callback:function(){var t="/+modify";$('<iframe name="output_frame" src="#"/>').hide().appendTo("body"),svgEditor.setCustomHandlers({save:function(e,i){var n='<?xml version="1.0"?>\n'+i,a=$.param.querystring(),s=a.substr(9).split("/+get/")[1],r=svgedit.utilities.encode64(n);$("#export_canvas").length||$("<canvas>",{id:"export_canvas"}).hide().appendTo("body");var o=$("#export_canvas")[0];o.width=svgCanvas.contentW,o.height=svgCanvas.contentH,$.getScript("canvg/canvg.js",function(){canvg(o,n,{renderCallback:function(){var e=o.toDataURL("image/png");svgEditor.uiStrings;var i=svgedit.utilities.encode64(e);$("<form>").attr({method:"post",action:t+"/"+s,target:"output_frame"}).append('<input type="hidden" name="png_data" value="'+i+'">').append('<input type="hidden" name="filepath" value="'+r+'">').append('<input type="hidden" name="filename" value="drawing.svg">').append('<input type="hidden" name="contenttype" value="application/x-svgdraw">').appendTo("body").submit().remove()}})}),alert("Saved! Return to Item View!"),top.window.location="/"+s}})}});