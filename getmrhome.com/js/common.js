jQuery(document).ready(function(){   
 $('.clients-slider').slick({
        dots: false,
        speed: 2000,
        arrows: false,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    infinite: true
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            }
        ]
    });


//menu transition js
$(window).scroll(function () {
var scroll = $(window).scrollTop();
if (scroll > 0) {
$(".fixed-tfn").addClass("tfn-show navbar-scroll");
}
else {
$(".fixed-tfn").removeClass("tfn-show navbar-scroll");
}
});

	  



 //Main Menu 
    jQuery(".navbar-dark .navbar-toggler").click(function() {
            
        if(jQuery(window).width()<992) {
            //jQuery("header .navbar .main-nav ul").toggleClass("open");
            //jQuery("header .navbar .main-nav ul").slideToggle();
            jQuery(".navbar-dark .navbar-nav").toggleClass("open");
            jQuery(".navbar-dark .navbar-nav").slideToggle();
        }
    });
    jQuery(window).resize(function() {
        if(jQuery(window).width()>=992 && !jQuery("header .navbar .main-nav ul").hasClass("open")) {
            //jQuery("header .navbar .main-nav ul").css("display",'');
            jQuery(".navbar-dark .navbar-nav").css("display",'');
        }
    });
    jQuery(document).mouseup(function (e) {
        var container = jQuery(".navbar-dark .navbar-nav, .navbar-dark .navbar-toggler");
        var container1 = jQuery(".navbar-dark .navbar-nav");
        if (!container.is(e.target) && container.has(e.target).length === 0) {
            if(parseInt(jQuery(window).width()) < 992) {
                //jQuery("header .navabr .main-nav ul").removeClass("open");
                //jQuery("header .navbar .main-nav ul").slideUp();
                jQuery(".navbar-dark .navbar-nav").removeClass("open");
                jQuery(".navbar-dark .navbar-nav").slideUp();
            }
        }
    });

          });