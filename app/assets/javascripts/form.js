$(document).ready(function() {  

  // Set all fields idle
  $('input[type="text"]').addClass("idleField");  
  $('input[type="file"]').addClass("idleField");  
  $('input[type="email"]').addClass("idleField");  
  $('input[type="password"]').addClass("idleField");

  $('input[type="email"], input[type="password"], input[type="text"], input[type="file"]').focus(function() {  
    $(this).removeClass("idleField").addClass("focusField");  

      }); 

      $('input[type="email"], input[type="password"]').blur(function() {  
        $(this).removeClass("focusField").addClass("idleField");  
      });

  $('#project_glimage_file').focus(function() {
    $('.fakeupload input').attr('value', this.value);
  });

  $('#project_glimage_file').attr('size', 60);

});  




