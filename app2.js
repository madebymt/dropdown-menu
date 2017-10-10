// slidetoggle make it click dropdown and close back

$(function() {
       $(".project").on('click', function() {
           $(this).parent().find('.details').slideToggle();
       });
   });
