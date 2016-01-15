$(document).foundation();

$(window).load(function() {
   $('#leftBar').toggleClass('slideIn');
   $('.navContent').toggleClass('slideRight'),
   $('#hamburgerMenu').removeClass('open');
});

$('#hamburgerMenu').click (function(){
  $(this).toggleClass('open'),
  $('.pc').toggleClass('open'),
  $('body, #leftBar, #profileFull, #topBar h1, .showOnDashboard, .hideOnDashboard').toggleClass('dataClose'),
  $('#leftBar').toggleClass('slideOut');
  $(".navContent").toggleClass('slideRight');
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
