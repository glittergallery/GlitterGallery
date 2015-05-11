NProgress.configure({ showSpinner: false, speed: 700});

// Based on which page you're on,
// make relevant toolbar element active,
// remove navbar from login page

$("document").ready( function(){
	var articleContent = $(".wrapper article").attr("data");
	if(articleContent === "login"){
		$(".wrapper nav").css("display", "none");
	}
	var toolbarDivs = $("section.toolbar div, section.action div");
	toolbarDivs.each(function(){
			if($(this).attr("data") === articleContent){
				$(this).addClass("active");
			}
	});
});

$("document").ready(function() {
$('#responsive-menu-button').sidr({
name: 'sidr-main',
source: '#navigation'
});

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
            $(this).data("autocomplete").search($(this).val());
      });
  });
});
