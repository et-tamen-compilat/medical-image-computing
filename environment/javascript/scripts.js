//causes circles to expand when clicked
$('a').click(function(e) {
  e.preventDefault();
  var img = $(e.currentTarget).children('img');
  img.animate({left: '541px', top:'200px', }, {duration:500});
  img.toggleClass('circleClicked');
  setTimeout(function(url) { window.location = url },1500, this.href);
    
});
//small expand on hover
$('a').hover(function(e) {
  e.preventDefault();
  var img = $(e.currentTarget).children('img');
  img.toggleClass('circleHover');
});

//content pages fade in
$(function() {
    $('body').removeClass('fade-out');
});