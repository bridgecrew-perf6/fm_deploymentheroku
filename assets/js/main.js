!(function($) {
  "use strict";

  // Back to top button
  $(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
      $('.back-to-top').fadeIn('slow');
    } else {
      $('.back-to-top').fadeOut('slow');
    }
  });

  $('.back-to-top').click(function() {
    $('html, body').animate({
      scrollTop: 0
    }, 1500, 'easeInOutExpo');
    return false;
  });

  // Testimonials carousel (uses the Owl Carousel library)
  $(".img-carousel").owlCarousel({
    autoplay: true,
    dots: true,
    loop: true,
    items: 1
  });

  // Init AOS
  function aos_init() {
    AOS.init({
      duration: 600,
      once: true
    });
  }
  $(window).on('load', function() {
    aos_init();
  });

})(jQuery);

// Muted Video Ennio

$('#audio-control').click(function() {
  if( $("#video-uni").prop('muted') ) { 
    $("#video-uni").prop('muted', false);
    $("#volume-mute").hide();
    $("#volume-full").show();
  } else { 
    $("#video-uni").prop('muted', true); 
    $("#volume-full").hide();
    $("#volume-mute").show();
  } 
});

function init(){
  $("#volume-full").hide();
}
init();

// Muted Video Innovative

$('#audio-control2').click(function() {
  if( $("#video-innovative").prop('muted') ) { 
    $("#video-innovative").prop('muted', false);
    $("#volume-mute2").hide();
    $("#volume-full2").show();
  } else { 
    $("#video-innovative").prop('muted', true); 
    $("#volume-full2").hide();
    $("#volume-mute2").show();
  } 
});

function init2(){
  $("#volume-full2").hide();
}
init2();


