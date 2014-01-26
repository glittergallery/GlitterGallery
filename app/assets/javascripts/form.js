$(document).ready(function() {  

  var inputs, fileInput, fakeInput, focusCount = 0;
  inputs = $('input[type!=submit], textarea');
  fileInput = $('input[type=file]', '#upload_widget');
  fakeInput = $('.fakeupload input');

  fileInput.attr('size', 56);

  // Set all fields idle
  inputs.addClass('idleField');

  inputs.focus(function() {  
    $(this).removeClass("idleField").addClass("focusField");  

      }); 

	inputs.blur(function() {  
		$(this).removeClass("focusField").addClass("idleField");  
	});
      
      fileInput.blur(function() {
        $('.fakeupload input').removeClass("focusField").addClass("idleField");
      });  

  
  fakeInput.focus(function() {
    if(shouldShowFileSelection()) {
      fileInput.click();
    }
  });
  $('#upload input').focus(function(e) {
	  if (!($(e.currentTarget).is(fakeInput))) {
	    focusCount = 0
	  }
  });

  fileInput.focus(function() {
    fakeInput.attr('value', this.value);
    fakeInput.removeClass("idleField").addClass("focusField");
  });  

  function shouldShowFileSelection() {
    if(focusCount == 0) {
      focusCount++;
      return true;
    }
  }


});  




