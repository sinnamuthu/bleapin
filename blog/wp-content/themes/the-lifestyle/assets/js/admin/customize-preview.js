/**
 * Live-update changed settings in real time in the Customizer preview.
 */

( function( $ ) {
	"use strict";
	
	var api = wp.customize,
		head = $('head');

	// Header Image Blackout
	api( 'header_image_blackout', function( value ) {
		value.bind( function( to ) {
			var style = $('#custom-header-image-blackout-css'),
				css = 'opacity: ' + parseFloat( to );

			style.remove();
			style = $('<style type="text/css" id="custom-header-image-blackout-css"> .has-header-image .site-header:before { ' + css + ' } </style>').appendTo( head );
		} );
	} );
	
	// Site title
	api( 'blogname', function( value ) {
		value.bind( function( to ) {
			$( '.site-title a' ).text( to );
		} );
	} );
	
    // Tagline
	api( 'tagline', function( value ) {
		value.bind( function( to ) {
			$( '.tagline' ).html( to );
		} );
	} );

	// Logo size
	api( 'logo_size', function( value ) {
		value.bind( function( to ) {
      		$( '.custom-logo-link img' ).css( 'max-width', parseFloat( to ) + 'px' );
		} );
	} );
	
	api( 'link_color', function( value ) {
		value.bind( function( to ) {
      	var head = $('head'),
			style = $('#custom-link-color-css');
			
			var css = 'color: ' + to;
				  
		  	style.remove();
			style = $('<style type="text/css" id="custom-link-color-css">.page-content a, .taxonomy-description a, .entry-content a, .post-meta a, .author-description a, .logged-in-as a, .comment-content a, .comment-edit-link, .comment-navigation a { ' + css + ' }</style>').appendTo( head );
		} );
	} );
	
	api( 'link_color_hover', function( value ) {
		value.bind( function( to ) {
      	var head = $('head'),
			style = $('#custom-link-color-on-hover-css');
			
			var css = 'color: ' + to;
				  
		  	style.remove();
			style = $('<style type="text/css" id="custom-link-color-on-hover-css">.page-content a:hover, .taxonomy-description a:hover, .entry-content a:hover, .post-meta a:hover, .author-description a:hover, .logged-in-as a:hover, .comment-content a:hover, .comment-edit-link:hover, .comment-navigation a:hover { ' + css + ' }</style>').appendTo( head );
		} );
	} );
	
	api( 'category_label_color', function( value ) {
		value.bind( function( to ) {
      		var head = $('head'),
				style = $('#custom-category-label-color-css');
			
			var css = 'background-color: ' + to;
				  
		  	style.remove();
			style = $('<style type="text/css" id="custom-category-label-color-css">.cat-links a { ' + css + ' }</style>').appendTo( head );
		} );
	} );
	
  	api( 'button_background_color', function( value ) {
		value.bind( function( to ) {
      		var head = $('head'),
				style = $('#custom-button-background-color-css');
			
			var css = 'background-color: ' + to;
				  
		  	style.remove();
			style = $('<style type="text/css" id="custom-button-background-color-css">button, input[type="button"], input[type="reset"], input[type="submit"] { ' + css + ' }</style>').appendTo( head );
		} );
	} );
	
  	api( 'button_background_color_hover', function( value ) {
		value.bind( function( to ) {
      		var head = $('head'),
				style = $('#custom-button-background-color-hover-css');
			
			var css = 'background-color: ' + to;
				  
		  	style.remove();
			style = $('<style type="text/css" id="custom-button-background-color-hover-css">button:hover, input[type="button"]:hover, input[type="reset"]:hover, input[type="submit"]:hover { ' + css + ' }</style>').appendTo( head );
		} );
	} );
	
  	api( 'button_text_color', function( value ) {
		value.bind( function( to ) {
      		var head = $('head'),
				style = $('#custom-button-text-color-css');
			
			var css = 'color: ' + to;
				  
		  	style.remove();
			style = $('<style type="text/css" id="custom-button-text-color-css">button, input[type="button"], input[type="reset"], input[type="submit"] { ' + css + ' }</style>').appendTo( head );
		} );
	} );	
} )( jQuery );
