$(document).foundation();

$(window).load(function() {
   $('#leftBar').toggleClass('slideIn');
   $('#hamburgerMenu').removeClass('open');
   $("#personaP").toggleClass('slideRight');
});

$('#hamburgerMenu').click (function(){
  $(this).toggleClass('open'),
  $("body").toggleClass('scrollY');
  $('#leftBar, #personaP, #profileFull, #topBar h1').toggleClass('dataClose'),
  $('#leftBar').toggleClass('slideOut'),
  $("#personaP").toggleClass('slideRight'),
  $("#personaP.slideRight").toggleClass('slideLeft');
  return false;
});




if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
   var viewportmeta = document.querySelector('meta[name="viewport"]');
   if (viewportmeta) {
      viewportmeta.content = 'width=device-width, minimum-scale=1.0, maximum-scale=1.0';
      document.body.addEventListener('gesturestart', function() {
         viewportmeta.content = 'width=device-width, minimum-scale=0.25, maximum-scale=1.0';
      }, false);
   }
}
