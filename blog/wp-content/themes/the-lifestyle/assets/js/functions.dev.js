/**
 * Theme functions file.
 */
(function($) {
  "use strict";

  $(document).ready(function($){

    var $body = $('body');

    $('#nav-toggle').on( 'click', function(e) {
      e.preventDefault();
      $(this).next('.menu-container, .nav-menu').slideToggle(300);
    });

    if( $.fn.owlCarousel !== undefined && $.fn.imagesLoaded !== undefined ) {
      $( '.format-gallery-carousel' ).imagesLoaded(function() {  
        $( '.format-gallery-carousel' ).owlCarousel({
          items: 1,
          margin: 0,
          loop: true,
          autoHeight: true,
          smartSpeed: 600,
          nav: true,
          dots: false,
          rtl: $('body').hasClass( 'rtl' ) ? true : false,
          navText : [ $('body').hasClass( 'rtl' ) ? '<i class="fa fa-angle-right"></i>' : '<i class="fa fa-angle-left"></i>', $('body').hasClass( 'rtl' ) ? '<i class="fa fa-angle-left"></i>' : '<i class="fa fa-angle-right"></i>' ]
        });
      });
    }

    var $masonryGrid = $( '#masonry-grid' );

    if( $masonryGrid.length > 0 && $.fn.masonry !== undefined && $.fn.imagesLoaded !== undefined ) {
      $masonryGrid.imagesLoaded(function() {           
        $masonryGrid.masonry({
          itemSelector: '.portfolio-post',
          isRTL: $body.hasClass( 'rtl' ) ? true : false
        });
      }); 
    }
  });
})(jQuery);