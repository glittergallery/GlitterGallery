$(document).ready(function() {  

  var fileInput, fakeInput, focusCount = 0;
  fileInput = $('input[type=file]', '#upload_widget');
  fakeInput = $('.fakeupload input');

  fileInput.attr('size', 56);

  // Set all fields idle
  $('input[type="text"]').addClass("idleField");  
  $('input[type="file"]').addClass("idleField");  
  $('input[type="email"]').addClass("idleField");  
  $('input[type="password"]').addClass("idleField");

  $('input[type="email"], input[type="password"], input[type="text"], input[type="file"]').focus(function() {  
    $(this).removeClass("idleField").addClass("focusField");  

      }); 

      $('input[type="email"], input[type="password"], input[type="text"]').blur(function() {  
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




