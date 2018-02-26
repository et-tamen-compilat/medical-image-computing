$('a').click(function(e) {

  e.preventDefault();
  var img = $(e.currentTarget).children('img');
  img.animate({left: '541px', top:'200px', }, {duration:1000});
  img.toggleClass('circleClicked');
  setTimeout(function(url) { window.location = url }, 500, this.href);
    
});

$('a').hover(function(e) {

  e.preventDefault();
  var img = $(e.currentTarget).children('img');
  img.toggleClass('circleHover');

});
$(function() {
    $('body').removeClass('fade-out');
});