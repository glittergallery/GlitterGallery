$(document).ready(function() {  

  // Set all fields idle
  $('input[type="email"]').addClass("idleField");  
  $('input[type="password"]').addClass("idleField");

  $('input[type="email"], input[type="password"]').focus(function() {  
    console.log('focus');
    $(this).removeClass("idleField").addClass("focusField");  

      }); 

      $('input[type="email"], input[type="password"]').blur(function() {  
        $(this).removeClass("focusField").addClass("idleField");  
      });
         
});  

