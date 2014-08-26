var show = $('.show');
var hover = $('.hover');

show.hover(
  function() {
    hover.css('display', 'block');
  }, function() {
    hover.css('display', 'none');
  }
);

hover.click(function() {
    show.remove();
    var div = $('<div>').addClass('showed').appendTo('.pictures');
    $.getJSON('/images.json', function (images) {
          for (var image in images){
            $('<img>').attr('src', images[image]).appendTo('.showed');
          }
    });
});