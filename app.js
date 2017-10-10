
$(function() {
       $(".project").on('click', function() {
           $(this).parent().find('.details').slideDown('slow');
           return false;
       });
   });
//
