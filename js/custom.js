//slide 
$('.slider').slick({
  dots: true,
  // autoplay: true,
  autoplaySpeed: 3000,
  speed: 1000,
  prevArrow: '<span class="prev-arrow"><i class="fas fa-angle-left"></i></span>',
  nextArrow: '<span class="next-arrow"><i class="fas fa-angle-right"></i></span>',
  slidesToShow: 3,
  slidesToScroll: 1,
  centerMode: true,
  centerPadding: '60px',
  responsive: [
      {
        breakpoint: 768,
        settings: {
          centerMode: true,
          slidesToShow: 1,
          centerPadding: '100px',
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          centerMode: true,
          centerPadding: '40px',
        }
      }
    ]

});



$(document).ready(function(){
    $('.counter').counterUp({
        delay: 10,
        time: 1000
    });
      
});


 
      



