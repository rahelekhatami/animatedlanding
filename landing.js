/*(function scrollReveal() {
    window.sr = ScrollReveal();
    
    sr.reveal('.card-deck', {
      duration   : 600,
      distance   : '20px',
      easing     : 'ease-out',
      origin     : 'bottom',
      reset      : true,
      scale      : 1,
      viewFactor : 0,
      afterReveal  : revealChildren,
    }, 150);
    
      var revealChildren = sr.reveal('.card-title, .card-text', {
      duration   : 500,
      scale      : 1,
      distance   : '20px',
      origin     : 'bottom',
      reset      : true,
      easing     : 'ease-out',
      viewFactor : 1,
    }, 75);
  })();
  */
 
 /*ScrollReveal().reveal('.card-deck');
 ScrollReveal().reveal('.card-title', { delay: 500 });
ScrollReveal().reveal('.card-text', { delay: 2000 });
/*new scrollReveal();*/
/*$(document).ready(function() {
  var offset = 220;
  var duration = 500;
  $(window).scroll(function() {
      if ($(this).scrollTop() > offset) {
          $('.scroll').fadeIn(duration);
      } else {
          $('.scroll').fadeOut(duration);
      }
  });*/

  $(document).ready(function() {
    ScrollReveal().reveal('.card-deck', { delay: 500 });
    ScrollReveal().reveal('.card-title', { delay: 1500 });
    ScrollReveal().reveal('.card-text', { delay: 2500 });
  });