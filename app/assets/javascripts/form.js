$(document).ready(function() {  
  
  $('#project_image_file').attr('size', 56);


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
      
      $('#project_image_file').blur(function() {
        $('.fakeupload input').removeClass("focusField").addClass("idleField");
  });  

  $('#project_image_file').focus(function() {
    $('.fakeupload input').attr('value', this.value);
    $('.fakeupload input').removeClass("idleField").addClass("focusField");
  });  



});
