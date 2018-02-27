var openingTimeLine = anime.timeline();

openingTimeLine.add({
  targets: 'path',
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

