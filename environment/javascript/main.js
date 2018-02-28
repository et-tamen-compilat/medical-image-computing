
$(document).ready(function() {
     var date = new Date();
 var minutes = 30;
 date.setTime(date.getTime() + (minutes * 60 * 1000));
   if ($.cookie('hasBeenHere') == null) {
          var openingTimeLine = anime.timeline();
openingTimeLine.add({
    targets: ['#brain_pic', '#lines'],
    opacity: 1
});
openingTimeLine.add({
  targets: 'path',
  opacity: 1,
  strokeDashoffset: [anime.setDashoffset, 0],
  easing: 'easeInOutCubic',
  duration: 4000, //change to 4000
  autoplay: true
});

openingTimeLine.add({
    targets: ['.circles' ,'.landingLinks'],
    opacity: 1,
    offset:4000, //change to 4000
    duration: 4000, //change to 4000
  });

openingTimeLine.add({
    targets: '#openingTitle',
    opacity: 1,
    offset:5000, //change to 5000
    duration:4000, //change to 4000
});   
    $.cookie('hasBeenHere', true, {expires:date});
}else{
    $(".landingLinks, .circles, #lines, #brain_pic, #openingTitle").delay(1000).animate({opacity:1}, 700);
  
}
});



