// Homepage Banner Slider
$('.owl-carousel.banner-slide').owlCarousel({
    items: 1,
    dots: false,
    loop: true,
    center: true,
    animateOut: 'fadeOut',
    autoplay: true,
    margin: 0,
    URLhashListener: true,
    autoplayHoverPause: true,
    startPosition: 'URLHash'
});

// book slider
        
            $('.owl-carousel.book-slide').owlCarousel({
           loop:true,
           margin:30,
           autoplay: false,
           dots:false,
           nav:false,
           responsive:{
          0:{
              items:2
          },
          600:{
              items:2
          },
          1000:{
              items:4
          }
      }
     });

// Menu Btn
$(document).ready(function() {
    $('#nav-icon1,#nav-icon2,#nav-icon3,#nav-icon4').click(function() {
        $(this).toggleClass('open');
    });
});
// video
// var p = $(".popup__overlay");

// $("#popup__toggle").click(function() {
//   p.css("display", "block");
// });
// p.click(function(event) {
//   e = event || window.event;
//   if (e.target == this) {
//     $(p).css("display", "none");
//   }
// });
// $(".popup__close").click(function() {
//   p.css("display", "none");
// });

//video popup


 $('[data-fancybox]').fancybox({
	toolbar  : false,
	smallBtn : true,
iframe : {
	preload : false
	}
})
 
