NProgress.configure({ showSpinner: false, speed: 700});

// Based on which page you're on,
// make relevant toolbar element active
$("document").ready( function(){
	var articleContent = $("article").attr("data");
	var toolbarDivs = $("section.toolbar div, section.action div");
	toolbarDivs.each(function(){
			if($(this).attr("data") === articleContent){
				$(this).addClass("active");
			}
	});
});