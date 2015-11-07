//See: https://github.com/annotorious/annotorious/wiki/JavaScript-API

// Function which first finds all the annotations associated with given
// blob and draws them using addAnnotation Handler
function loadAnnotations() {
  jQuery.getJSON("/annotations/for_blob/"+blob_id()+ ".json",function(data) {
    for (var i = 0; i < data.length; i++) {
        annotation = JSON.parse(data[i].json)
        anno.addAnnotation(annotation);
      }
  });
}

// Returns the blob_id of a given blob
function blob_id() {
  return $('.annotatable').data('id');
}

function showFlashMessage(error){
  $('.message').remove();
  $('.action').after('<section class="message"><div class="alert">'+ error+'</div></section>');
}

// Handler used for creation of annotation
// On success it sets the username and time
anno.addHandler('onAnnotationCreated', function(annotation) {
  jQuery.ajax({
    type: "POST",
    url: "/annotations",
    dataType: "JSON",
    data: "annotation="+encodeURIComponent(JSON.stringify(annotation))+"&blob_id=" + blob_id()+"&url="+window.location.pathname,
    success: function(data) {
      annotation.id=data.id; // the annotation ID should match the database row ID so we can delete it if needed
      json_data = JSON.parse(data.json)
      annotation.username = json_data.username;
      annotation.updated_at = json_data.updated_at;
    },
    error: function(data){
      anno.removeAnnotation(annotation);
      showFlashMessage(JSON.parse(data.responseText).error);
    }
    });
});

// Handler used for update of annotation
// On success, redraw all the annotations
anno.addHandler('onAnnotationUpdated', function(annotation) {
  jQuery.ajax({
    type: "PUT",
    dataType: "JSON",
    url: "/annotations/" + annotation.id,
    data: "annotation="+encodeURIComponent(JSON.stringify(annotation)),
    success: function(data) {
      loadAnnotations();
    },
    error: function(data){
      anno.removeAnnotation(annotation);
      loadAnnotations();
      showFlashMessage(JSON.parse(data.responseText).error);
    }
  });
});

// this gets called when the user clicks the delete icon
anno.addHandler('beforeAnnotationRemoved', function(annotation) {
  var r=confirm("Delete annotation?");
  if (r==false) return false;
  else return true;
});

// this is what gets called when the annotation is actually deleted
// (assuming the user clicks OK to the confirmation dialog)
anno.addHandler('onAnnotationRemoved', function(annotation) {
  jQuery.ajax({
    type: "DELETE",
    dataType: "JSON",
    url: "/annotations/" + annotation.id,
    error: function(data){
      showFlashMessage(JSON.parse(data.responseText).error);
    }
  });
});

// this plugin allows us to add the username and date to each annotation and display it
annotorious.plugin.addUsernamePlugin = function(opt_config_options) { }
annotorious.plugin.addUsernamePlugin.prototype.onInitAnnotator = function(annotator) {
  // A Field can be an HTML string or a function(annotation) that returns a string
  annotator.popup.addField(function(annotation) {
    if (annotation.username != '') {
      return '<em>' + annotation.username + ' - '+ annotation.updated_at +'</em>'
    }
    else
    {
     return ''
    }
  });
}

anno.addPlugin('addUsernamePlugin', {});

// wait until all the assets and images are loaded before drawing annotations
$(window).load(function() {
  if($('.annotatable').length > 0){
    loadAnnotations();
    $('.annotorious-item, .annotorious-hint').addClass('hidden');
  }
});

$(document).ready(function() {
  $('#toggle-annotation').click( function(){
    $('.annotorious-item, .annotorious-hint').toggleClass('hidden');
  });
});
