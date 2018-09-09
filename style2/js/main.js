         
           
           
   /*------backgrouns parrallax---*/
        document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.parallax');
    var instances = M.Parallax.init(elems, options);
  });

  // Or with jQuery

  $(document).ready(function(){
  
  /*-------parallax effect -----*/
    $('.parallax').parallax();
      
     /*-------sideNav slider -----*/ 
  $(".button-collapse").sideNav();
     
      /*--------slider--------*/
      $('.carousel.carousel-slider').carousel({fullWidth: true});
  });