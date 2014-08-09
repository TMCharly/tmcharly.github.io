var show = $('.show'),
hover = $('.hover');

show.hover(
  function() {
    hover.css('display', 'block');
  }, function() {
    hover.css('display', 'none');
  }
);

hover.click(function() {
    show.remove();
    var div = $('<div>').addClass('showed');
    $('<img>').addClass('other').attr('src', 'http://image.noelshack.com/fichiers/2014/22/1401358226-wallpaper-vixen-1.jpg').appendTo(div);
    $('<img>').addClass('other').attr('src', 'http://image.noelshack.com/fichiers/2014/22/1401358219-wallpaper-excision-1.jpg').appendTo(div);
    $('<img>').addClass('other').attr('src', 'http://image.noelshack.com/fichiers/2014/22/1401358322-wpm.jpg').appendTo(div);
    $('<img>').addClass('other').attr('src', 'http://image.noelshack.com/fichiers/2014/22/1401358248-f1-racing.jpg').appendTo(div);
    $('<img>').addClass('other').attr('src', 'http://image.noelshack.com/fichiers/2014/22/1401358313-6-driver.jpg').appendTo(div);
    $('<img>').addClass('other').attr('src', 'http://image.noelshack.com/fichiers/2014/22/1401358319-4.jpg').appendTo(div);
    div.appendTo('.pictures');

});