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


