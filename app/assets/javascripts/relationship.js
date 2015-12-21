$(document).ready(function() {
  if($('.user').length > 0){
    $(document).on('ajax:error', function (e, xhr) {
      if(xhr.status === 422){
        $('.message').remove();
        $('.toolbar').before('<section class="message"><div class="alert">'+ xhr.responseText+'</div></section>');
      }
    });
  }
});
