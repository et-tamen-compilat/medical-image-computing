//causes circles to expand when clicked
$('a.link').click(function(e) {
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
  $(e.currentTarget).children('p').toggleClass('landingLinkHover');
});

//content pages fade in
$(function() {
    $('body').removeClass('fade-out');
});

var isMobile = function() {
   console.log("Navigator: " + navigator.userAgent);
   return /(iphone|ipod|ipad|android|blackberry|windows ce|palm|symbian)/i.test(navigator.userAgent);
 };
 
 if (isMobile()) {
   document.location='mindex.html';
 }