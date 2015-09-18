$(document).ready(function() {
  //toggles the image on click
  $("#toggle_second").click(function() {
    $("#toggle_second").toggleClass("transparent");
  });
});

//used for mask and opacity
$(document).ready(function() {

  //set height of container of images from it's child div height
  function setHeight() {
    $('#opacity, #mask').height($('#mask_first, #opacity_first').height());
  }

  $(window).resize(setHeight);
  setHeight();

  //functions called from sliders of mask and opacity
  function refreshOpacity() {
    $( "#opacity_second" ).fadeTo(0,1-$('#opacity_slider').slider('value')/100);
  }

  function refreshMask() {
    var resizeValue = $('#mask_slider').slider('value');
    $( "#mask_second" ).width(resizeValue);
  }

  var maskWidth = $('#mask_first').width();
  //slider for mask and opacity
  $(function() {
    $('#opacity_slider').slider({
        orientation: "horizontal",
        range: "min",
        max: 100,
        slide: refreshOpacity,
        change: refreshOpacity
    });

    $('#mask_slider').slider({
        orientation: "horizontal",
        range: "min",
        max: maskWidth+10,
        slide: refreshMask,
        change: refreshMask
    });
  });

  //sets width of two diff images in mask view
  function setWidth() {
    $("#mask_top").width($("#mask_first").width());
  }

  $(window).resize(setWidth);
  setWidth();
});
