// slidetoggle make it click dropdown and close back

$(function() {
  $(".project").on('click', function() {
    $(this).parent().find('.details').slideToggle();
  });
});


function increase() {
  let elem = document.querySelector("#myBar")
  let width = 10
  let id = setInterval(frame, 10)

  function frame() {
    if (width >= 100) {
      clearInterval(id)
    } else {
      width++
      elem.style.width = width + '%';
      elem.innerHTML = width * 1 + '%'

    }
  }
}


function move() {
  var elem = document.getElementById("myBar");
  var width = 1;
  var id = setInterval(frame, 10);

  function frame() {
    if (width >= 100) {
      clearInterval(id);
    } else {
      width++;
      elem.style.width = width + '%';
    }
  }
}
