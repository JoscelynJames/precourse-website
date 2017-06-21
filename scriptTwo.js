$(document).ready(function(){
  var $img = $('#pony-img');

  $('#pony-img').mouseover(function(){
    $img.show();
    setTimeout(function() {
      $img.attr('src', './pictures/mini-pony.gif');
    }, 0);
  });
});
