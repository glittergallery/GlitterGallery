NProgress.configure({ showSpinner: false, speed: 700});

// Based on which page you're on,
// make relevant toolbar element active,
// remove navbar from login page

$("document").ready( function(){
	var articleContent = $(".wrapper article").attr("data");
	if(articleContent === "login"){
		$(".wrapper nav").css("display", "none");
	}
	var toolbarDivs = $("section.toolbar div, section.action div, aside nav ul li");
	toolbarDivs.each(function(){
			if($(this).attr("data") === articleContent){
				$(this).addClass("active");
			}
	});
});

// function which triggers slide show of images
// Also used for switching of tabs. They both use jquery-ui
$("document").ready(function() {
  $('#responsive-menu-button').sidr({
    name: 'sidr-main',
    source: '#navigation'
  });

  $( '.swipebox' ).swipebox();
  $("#tabs").tabs();
  $('#tabs ul').removeClass('ui-widget-header');
});

$( document ).ready(function() {
  $('div.expandingArea').each(function() {
    var area = $('textarea', $(this));
    var span = $('span', $(this));
    area.bind('input', function() {
      span.text(area.val());
    });
    span.text(area.val());
    $(this).addClass('active');
  });
});

// script for on change event of sorting type selection
$("document").ready(function() {
  $("#project_sort").change(function() {
    var state = $('select#project_sort :selected').val();
    $.get("/inspire/"+state+".js");
  });
})


//function for autocomplete of tags on issues page
$("document").ready(function() {
	$(function() {
    function split( val ) {
      return val.split( /,\s*/ );
    }
    function extractLast( term ) {
      return split( term ).pop();
    }

    $( "#issue_tag_list" )
      // don't navigate away from the field on tab when selecting an item
      .bind( "keydown", function( event ) {
        if ( event.keyCode === $.ui.keyCode.TAB &&
            $( this ).autocomplete( "instance" ).menu.active ) {
          event.preventDefault();
        }
      })
      .autocomplete({
        minLength: 0,
        appendTo: "#tag_drop_down",
        source: function( request, response ) {
          // delegate back to autocomplete, but extract the last term
          response( $.ui.autocomplete.filter(
            $('#issue_tag_list').data('autocomplete-source'), extractLast( request.term ) ) );
        },
        select: function( event, ui ) {
          var terms = split( this.value );
          // remove the current input
          terms.pop();
          // add the selected item
          terms.push( ui.item.value );
          // add placeholder to get the comma-and-space at the end
          terms.push( "" );
          this.value = terms.join( ", " );
          return false;
        }
      }).focus(function(){
            //Displays the complete list on focus
            $(this).autocomplete("search");
      });
  });
});

//function to set src of images on exploration page
//uses data-attributes to find url
function imageLoad(){
  $('.img-placeholder').each(function(){
    data = $(this).data();
    width = $(window).width();
    mobile_breakpoint = 640;

    if (width <= mobile_breakpoint) {
      url = data.mobileUrl;
    } else {
      url = data.desktopUrl;
    }

    $(this).attr('src', url)
  });
}
$("document").ready(imageLoad);
