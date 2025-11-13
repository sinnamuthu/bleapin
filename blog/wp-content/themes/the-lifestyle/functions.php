<?php
/**
 * Theme setup class.
 *
 * Set up theme defaults and registers support for various WordPress features.
 *
 * Note that this function is hooked into the after_setup_theme hook, which
 * runs before the init hook. The init hook is too late for some features, such
 * as indicating support post thumbnails.
 *
 */

class The_Lifestyle_Setup {

  // Theme version
  protected $version;
  
  // Theme unique id
  protected $theme_slug;
  
  public function __construct() {
    $this->version    = '1.2.1';
    $this->theme_slug = 'the-lifestyle';
  }
  
  /**
   * Setup theme. Add actions, filters, features etc.
   *
   * @since The Lifestyle 1.0
   */   
  public function setup() {
    global $content_width;

    /**
     * Set up the content width value based on the theme's design.
     */
    if ( ! isset( $content_width ) ) {
      $content_width = 1200;
    }
  
    /*
     * Make theme available for translation.
     *
     * Translations can be added to the /languages/ directory.
     */
    load_theme_textdomain( 'the-lifestyle', get_template_directory() . '/languages' );
  
    // Add RSS feed links to <head> for posts and comments.
    add_theme_support( 'automatic-feed-links' );

    // Enable support for Post Thumbnails, and declare two sizes.
    add_theme_support( 'post-thumbnails' );
    set_post_thumbnail_size( 1200, 700, true );
    add_image_size( 'the-lifestyle-full-width', 1200, 9999, false );
    add_image_size( 'the-lifestyle-medium', 500, 330, true );
    add_image_size( 'the-lifestyle-portfolio-grid', 700, 9999, false );
    add_image_size( 'the-lifestyle-square', 700, 700, true );
    add_image_size( 'the-lifestyle-header-image', 1920, 800, true );
    
    // Register navigation menus.
    register_nav_menus( array(
      'primary' => esc_html__( 'Primary Navigation', 'the-lifestyle' )
    ) );
    
    /*
     * Switch default core markup for search form, comment form, and comments
     * to output valid HTML5.
     */
    add_theme_support( 'html5', array(
      'search-form', 'comment-form', 'comment-list', 'gallery', 'caption'
    ) );
    
    // Add document title tag to HTML <head>.
    add_theme_support( 'title-tag' );

    /*
     * Enable support for Post Formats.
     *
     * See: https://codex.wordpress.org/Post_Formats
     */
    add_theme_support( 'post-formats', array( 'video', 'gallery' ) );
    add_post_type_support( 'page', 'post-formats' );
    add_post_type_support( 'portfolio', 'post-formats' );
    
    // Setup the WordPress core custom header image.  
    add_theme_support( 'custom-header', array( 
      'width'         => 1920,
      'height'        => 800,
      'flex-height'   => true,
      'flex-width'    => true,
      'default-image' => get_template_directory_uri() . '/assets/images/default-header.jpg',
    ) );

    // Add theme support for Custom Logo.
    add_theme_support( 'custom-logo', array(
      'flex-width' => true,
    ) );
    
    // Add public scripts and styles
    add_action( 'wp_enqueue_scripts', array( $this, 'enqueue_scripts' ) );
    add_action( 'wp_enqueue_scripts', array( $this, 'enqueue_styles' ), 10 );
    add_action( 'wp_enqueue_scripts', array( $this, 'post_nav_background' ), 10 );
    
    // Widgets init
    add_action( 'widgets_init', array( $this, 'widgets_init' ) );
    
    // Modify Read More link
    add_filter( 'the_content_more_link', array( $this, 'modify_read_more_link' ) );
    
    // Modify search form
    add_filter( 'get_search_form', array( $this, 'search_form' ) );
    
    // Set new excerpt more text
    add_filter('excerpt_more', array( $this, 'custom_excerpt_more' ));
    
    // This theme uses its own gallery styles.
    add_filter( 'use_default_gallery_style', '__return_false' );
    
    // Add classes to body tag and posts.
    add_filter( 'body_class', array( $this, 'add_body_classes' ) );
    
    // Remove custom styles and texts transients when this updated
    add_action( 'customize_save_after', array( $this, 'reset_custom_styles_cache' ) );
    add_action( 'customize_save_after', array( $this, 'reset_custom_texts_cache' ) );

    // Modification archives title
    add_filter( 'get_the_archive_title', array( $this, 'archive_title' ), 10, 1 );

    add_filter( 'image_size_names_choose', array( $this, 'add_sizes_to_choose' ) );

    // Comment form fields
    add_filter( 'comment_form_default_fields', array( $this, 'comment_form_default_fields' ), 10, 1 );

    // Add support for Block Styles.
    add_theme_support( 'wp-block-styles' );

    add_theme_support( 'responsive-embeds' );
  }
  
  /**
   * Register and enqueue theme scripts.
   *
   * @since The Lifestyle 1.0
   */  
  public function enqueue_scripts() {
    // Enqueue scripts
    if ( is_singular() && comments_open() && get_option( 'thread_comments' ) ) {
      wp_enqueue_script( 'comment-reply' );
    }

    // Owl Carousel
    wp_register_script( 'owl-carousel', get_template_directory_uri() . '/assets/js/owl.carousel.min.js', array(), '2.2.1' );

    wp_enqueue_script( 'fitvids', get_template_directory_uri() . '/assets/js/jquery.fitvids.js', array( 'jquery' ), '1.1', true );
    wp_enqueue_script( 'the-lifestyle-functions', get_template_directory_uri() . '/assets/js/functions.min.js', array( 'jquery' ), $this->version, true );     
  }
  
  /**
   * Register and enqueue theme styles.
   *
   * @since The Lifestyle 1.0
   */    
  public function enqueue_styles() {
    // Add fonts, used in the main stylesheet.
    wp_enqueue_style( 'the-lifestyle-fonts', $this->fonts_url(), array(), $this->version );
    
    // Font Awesome icons font style
    wp_register_style( 'font-awesome', get_template_directory_uri() . '/assets/css/font-awesome.min.css', array(), '4.7.0' );

    // Owl Carousel Style
    wp_register_style( 'owl-carousel', get_template_directory_uri() . '/assets/css/owl.carousel.min.css', array(), '2.2.1' );  
    
    // Load our main stylesheet.
    wp_enqueue_style( 'the-lifestyle-style', get_stylesheet_uri(), array( 'font-awesome' ), $this->version );
    
    // Add customizer css.
    wp_add_inline_style( 'the-lifestyle-style', $this->inline_style() );
  }
  
  /**
   * Register Google fonts for The Lifestyle.
   *
   * @since The Lifestyle 1.0
   *
   * @return string Google fonts URL for the theme.
   */  
  public function fonts_url() {
    $fonts_url = '';
    $fonts     = array();
    $subsets   = 'latin,latin-ext';

    /* translators: If there are characters in your language that are not supported by Lora, translate this to 'off'. Do not translate into your own language. */
    if ( 'off' !== esc_attr_x( 'on', 'Lora font: on or off', 'the-lifestyle' ) ) {
      $fonts[] = 'Lora:400,400italic,700,700italic';
    }

    /* translators: If there are characters in your language that are not supported by Oswald, translate this to 'off'. Do not translate into your own language. */
    if ( 'off' !== esc_attr_x( 'on', 'Oswald font: on or off', 'the-lifestyle' ) ) {
      $fonts[] = 'Oswald:400';
    }

    /* translators: If there are characters in your language that are not supported by Raleway, translate this to 'off'. Do not translate into your own language. */
    if ( 'off' !== esc_attr_x( 'on', 'Raleway font: on or off', 'the-lifestyle' ) ) {
      $fonts[] = 'Raleway:500';
    }

    /* Use Open Sans font if language that are not supported by Raleway */
    if ( 'on' == _x( 'off', 'Open Sans font: on or off', 'the-lifestyle' ) ) {
      $fonts[] = 'Open Sans:600';
    }

    /* translators: To add an additional character subset specific to your language, translate this to 'greek', 'cyrillic', 'devanagari' or 'vietnamese'. Do not translate into your own language. */
    $subset = esc_attr_x( 'no-subset', 'Add new subset (greek, cyrillic, devanagari, vietnamese)', 'the-lifestyle' );

    if ( 'cyrillic' == $subset ) {
      $subsets .= ',cyrillic,cyrillic-ext';
    } elseif ( 'greek' == $subset ) {
      $subsets .= ',greek,greek-ext';
    } elseif ( 'devanagari' == $subset ) {
      $subsets .= ',devanagari';
    } elseif ( 'vietnamese' == $subset ) {
      $subsets .= ',vietnamese';
    }

    if ( $fonts ) {
      $fonts_url = esc_url( add_query_arg( array(
        'family' => urlencode( implode( '|', $fonts ) ),
        'subset' => urlencode( $subsets ),
      ), '//fonts.googleapis.com/css' ) );
    }

    return $fonts_url;
  }
  
  /**
   * Inline style. Used in wp_add_inline_style.
   *
   * @since The Lifestyle 1.0
   */  
  public function inline_style() {
    if( is_customize_preview() )
      return $this->get_inline_style();
      
    $inline_style = get_transient( 'the_lifestyle_inline_style' );
    
    if( $inline_style === false ) {
      $inline_style = $this->get_inline_style();
      set_transient( 'the_lifestyle_inline_style', $inline_style );
    }

    if( $this->get_header_image_url() ) {
      $inline_style .= sprintf( '
        .site-header {
          background-image: url( %s )
        }',
        esc_url( $this->get_header_image_url() )
      );
    }

    if ( is_singular() && comments_open() ) {
      $inline_style .= sprintf( '
        .bypostauthor .fn:after {
          content: "%s";
        }',
        esc_html__( 'Author', 'the-lifestyle' )
      );
    }
    
    return $inline_style;
  }
  
  /**
   * Get inline style CSS.
   *
   * @since The Lifestyle 1.0
   *
   * @return string Css with custom styles.
   */  
  public function get_inline_style() {
    $css = '';

    $header_image_blackout = get_theme_mod( 'header_image_blackout' );
    
    if( is_numeric( $header_image_blackout ) && $header_image_blackout >=0 && $header_image_blackout <= 1 ){
      $css .= sprintf( '
        .has-header-image .site-header:before{
          opacity: %s;
        }',
        $header_image_blackout
      );
    }
    
    $logo_size = absint( get_theme_mod( 'logo_size' ) );
    
    if( $logo_size ){
      $css .= sprintf( '
        .custom-logo-link img{
          max-width: %dpx;
        }',
        $logo_size
      );
    }

    $link_color = $this->sanitize_hex_color( get_theme_mod( 'link_color' ) );
    
    if( $link_color ) {
      $css .= sprintf( '
        .page-content a,
        .taxonomy-description a,
        .post-meta a,
        .entry-content a:not(.wp-block-button__link),
        .author-description a,
        .logged-in-as a,
        .comment-content a,
        .comment-edit-link,
        .comment-navigation a,
        .textwidget a,
        .site-info a {
          color: %s;
        }',
        $link_color
      );
    }
    
    $link_color_hover = $this->sanitize_hex_color( get_theme_mod( 'link_color_hover' ) );
    
    if( $link_color_hover ) {
      $css .= sprintf( '
        .page-content a:hover,
        .taxonomy-description a:hover,
        .post-meta a:hover,
        .entry-content a:not(.wp-block-button__link):hover,
        .author-description a:hover,
        .logged-in-as a:hover,
        .comment-content a:hover,
        .comment-edit-link:hover,
        .comment-navigation a:hover,
        .textwidget a:hover,
        .site-info a:hover {
          color: %s;
        }',
        $link_color_hover
      );
    }
    
    $button_background_color = $this->sanitize_hex_color( get_theme_mod( 'button_background_color' ) );
    
    if( $button_background_color ) {
      $css .= sprintf( '
        button,
        input[type="button"],
        input[type="reset"],
        input[type="submit"] {
          background-color: %s;
        }',
        $button_background_color
      );
    }
    
    $button_background_color_hover = $this->sanitize_hex_color( get_theme_mod( 'button_background_color_hover' ) );
    
    if( $button_background_color_hover ) {
      $css .= sprintf( '
        button:hover,
        input[type="button"]:hover,
        input[type="reset"]:hover,
        input[type="submit"]:hover {
          background-color: %s;
        }',
        $button_background_color_hover
      );
    }
    
    $button_text_color = $this->sanitize_hex_color( get_theme_mod( 'button_text_color' ) );
    
    if( $button_text_color ) {
      $css .= sprintf( '
        button,
        input[type="button"],
        input[type="reset"],
        input[type="submit"] {
          color: %s;
        }',
        $button_text_color
      );
    }

    if( $this->get_header_image_url() && is_customize_preview() ) {
      $css .= sprintf( '
        .site-header {
          background-image: url( %s )
        }',
        esc_url( $this->get_header_image_url() )
      );
    }
    
    return $css;
  }
  
  /**
   * Sanitizes a hex color.
   *
   * @since The Lifestyle 1.0
   */  
  public function sanitize_hex_color( $color ) {
    if ( '' === $color )
      return '';
      
    // 3 or 6 hex digits, or the empty string.
    if ( preg_match('|^#([A-Fa-f0-9]{3}){1,2}$|', $color ) )
      return $color; 
  }

  /**
   * Get the header image URL.
   *
   * @since The Lifestyle 1.0
   */  
  public function get_header_image_url() {
    if( is_single() || is_page() ) {
      global $post;

      $header_image_id = absint( get_post_meta( $post->ID, 'the_lifestyle_header_image_id', true ) );

      if( $header_image_id ) {
        $header_image_src = wp_get_attachment_image_src( $header_image_id, 'the-lifestyle-header-image' );

        if( is_array( $header_image_src ) )
          return $header_image_src[0];
      }
    }

    if( has_header_image() ) {
      $header_image_url = get_header_image();

      return $header_image_url;
    }
  }
  
  /**
   * Add featured image as background image to post navigation elements.
   *
   * @since The Lifestyle 1.0
   *
   * @see wp_add_inline_style()
   */  
  function post_nav_background() {
    if ( ! is_single() ) {
      return;
    }

    $previous = ( is_attachment() ) ? get_post( get_post()->post_parent ) : get_adjacent_post( false, '', true );
    $next     = get_adjacent_post( false, '', false );
    $css      = '';

    if ( is_attachment() && 'attachment' == $previous->post_type ) {
      return;
    }

    if ( $previous &&  has_post_thumbnail( $previous->ID ) ) {
      $prevthumb = wp_get_attachment_image_src( get_post_thumbnail_id( $previous->ID ), 'post-thumbnail' );
      $css .= '
        .post-navigation .nav-previous { 
          background-image: url(' . esc_url( $prevthumb[0] ) . '); 
        }
        .post-navigation .nav-previous .post-title, 
        .post-navigation .nav-previous a:hover .post-title { 
          color: #fff; 
        }
        .post-navigation .nav-previous .nav-meta {
          color: #fff;
          border-color: rgba(255,255,255,0.3);
        }
        .post-navigation .nav-previous .nav-meta:hover {
          border-color: rgba(255,255,255,0.35);
        }
        .post-navigation .nav-previous:before { 
          background-color: rgba(0, 0, 0, 0.4); 
        }
        .post-navigation .nav-previous:hover:before { 
          background-color: rgba(0, 0, 0, 0.8); 
        }
      ';
    }

    if ( $next && has_post_thumbnail( $next->ID ) ) {
      $nextthumb = wp_get_attachment_image_src( get_post_thumbnail_id( $next->ID ), 'post-thumbnail' );
      $css .= '
        .post-navigation .nav-next { 
          background-image: url(' . esc_url( $nextthumb[0] ) . '); 
        }
        .post-navigation .nav-next .post-title, 
        .post-navigation .nav-next a:hover .post-title { 
          color: #fff; 
        }
        .post-navigation .nav-next .nav-meta {
          color: #fff;
          border-color: rgba(255,255,255,0.3);
        }
        .post-navigation .nav-next .nav-meta:hover {
          border-color: rgba(255,255,255,0.35);
        }
        .post-navigation .nav-next:before { 
          background-color: rgba(0, 0, 0, 0.4); 
        }
        .post-navigation .nav-next:hover:before { 
          background-color: rgba(0, 0, 0, 0.8); 
        }
      ';
    }

    wp_add_inline_style( 'the-lifestyle-style', $css );
  }
  
  /**
   * Reset custom styles cache.
   *
   * @since The Lifestyle 1.0
   */
  function reset_custom_styles_cache() {
    delete_transient( 'the_lifestyle_inline_style' );
  }
  
  /**
   * Reset custom text cache.
   *
   * @since The Lifestyle 1.0
   */
  function reset_custom_texts_cache() {
    delete_transient( 'the_lifestyle_tagline' );
    delete_transient( 'the_lifestyle_copyright' );
  }

  /**
   * Register widget area.
   *
   * @since The Lifestyle 1.0
   *
   * @link https://codex.wordpress.org/Function_Reference/register_sidebar
   */
  public function widgets_init() {  
    // Register widgets
    register_sidebar( array(
      'name'          => esc_html__( 'Footer Widgets &mdash; Column 1', 'the-lifestyle' ),
      'id'            => 'widget-area-1',
      'description'   => esc_html__( 'Add widgets here to appear in footer.', 'the-lifestyle' ),
      'before_widget' => '<aside id="%1$s" class="widget %2$s">',
      'after_widget'  => '</aside>',
      'before_title'  => '<h3 class="widget-title">',
      'after_title'   => '</h3>',
    ) );

    register_sidebar( array(
      'name'          => esc_html__( 'Footer Widgets &mdash; Column 2', 'the-lifestyle' ),
      'id'            => 'widget-area-2',
      'description'   => esc_html__( 'Add widgets here to appear in footer.', 'the-lifestyle' ),
      'before_widget' => '<aside id="%1$s" class="widget %2$s">',
      'after_widget'  => '</aside>',
      'before_title'  => '<h3 class="widget-title">',
      'after_title'   => '</h3>',
    ) );

    register_sidebar( array(
      'name'          => esc_html__( 'Footer Widgets &mdash; Column 3', 'the-lifestyle' ),
      'id'            => 'widget-area-3',
      'description'   => esc_html__( 'Add widgets here to appear in footer.', 'the-lifestyle' ),
      'before_widget' => '<aside id="%1$s" class="widget %2$s">',
      'after_widget'  => '</aside>',
      'before_title'  => '<h3 class="widget-title">',
      'after_title'   => '</h3>',
    ) );
  }
  
  /**
   * More link modification.
   *
   * @since The Lifestyle 1.0
   *
   * @return string Modified more link.
   */  
  public function modify_read_more_link() {
    return sprintf( '<p class="entry-more"><a class="more-link" href="%s">%s</a></p>', esc_url( get_permalink() ), esc_html__( 'Continue Reading &rarr;', 'the-lifestyle' ) );
  }
  
  /**
   * Search form modification.
   *
   * @since The Lifestyle 1.0
   *
   * @return string HTML with search form.
   */   
  public function search_form( $form ) {
  
    $form = '
      <form method="get" class="search-form" action="' . esc_url( home_url( '/' ) ) . '">
        <div class="search-wrap">
          <label>
            <input type="search" class="search-field" placeholder="' . esc_attr_x( 'Search&hellip;', 'placeholder', 'the-lifestyle' ) . '" value="' . get_search_query() . '" name="s" title="' . esc_attr_x( 'Search for:', 'title tag', 'the-lifestyle' ) . '" />
          </label>
          <button type="submit" class="search-submit"><i class="fa fa-search"></i></button>
        </div>
			</form>';
			
    return $form;
  }
  
  /**
   * Modification default excerpt more.
   *
   * @since The Lifestyle 1.0
   *
   * @return string Excerpt more text.
   */   
  public function custom_excerpt_more( $more ) {
    return '...';
  }
  
   /**
   * Add classes to body tag.
   *
   * @since The Lifestyle 1.0
   *
   * @return array Body classes array.
   */    
  public function add_body_classes( $classes ) {
    if( has_header_image() ) {
      $classes[] = 'has-header-image';
    } else if( is_single() || is_page() ) {
      
      global $post;

      $header_image_id = get_post_meta( $post->ID, 'the_lifestyle_header_image_id', true );
      $header_image_src = wp_get_attachment_image_src( $header_image_id, 'the-lifestyle-header-image' );

      if( is_array( $header_image_src ) )
        $classes[] = 'has-header-image';
    }

    return $classes;
  }

  /**
   * Changing default archive title for portfolio post type.
   *
   * @since The Lifestyle 1.0
   */    
  public function archive_title( $title ) {
    if ( is_category() ) {
      return single_cat_title( '', false );
    }

    if ( is_author() ) {
      return get_the_author();
    }

    if( is_post_type_archive( 'portfolio' ) ) {
      return esc_html__( 'Portfolio', 'the-lifestyle' );
    }

    return $title;
  }

  /**
   * Add image sizes to media uploader.
   *
   * @since The Lifestyle 1.0
   */ 
  public function add_sizes_to_choose( $sizes ) {
    $sizes['the-lifestyle-full-width'] = esc_html__( 'Full Width', 'the-lifestyle' );

    return $sizes;
  }

  /**
   * Modification of the default fields of the comment form..
   *
   * @since The Lifestyle 1.1.4
   */  
  public function comment_form_default_fields( $fields ) {
    $commenter = wp_get_current_commenter();

    $req      = get_option( 'require_name_email' );
    $aria_req = ( $req ? " aria-required='true'" : '' );
    $html_req = ( $req ? " required='required'" : '' );
    $html5    = 'html5';

    $fields['author'] = '
      <p class="comment-form-author">
        <input id="author" name="author" type="text" placeholder="' . esc_attr__( 'Name', 'the-lifestyle' ) . ( $req ? '*' : '' ) . '" value="' . esc_attr( $commenter['comment_author'] ) . '" size="30"' . $aria_req . $html_req . ' />
      </p>';

    $fields['email'] = '
      <p class="comment-form-email">
        <input id="email" name="email" ' . ( $html5 ? 'type="email"' : 'type="text"' ) . ' placeholder="' . esc_attr__( 'Email', 'the-lifestyle' ) . ( $req ? '*' : '' ) . '" value="' . esc_attr(  $commenter['comment_author_email'] ) . '" size="30" aria-describedby="email-notes"' . $aria_req . $html_req  . ' />
      </p>';

    $fields['url'] = '
      <p class="comment-form-url">
        <input id="url" name="url" ' . ( $html5 ? 'type="url"' : 'type="text"' ) . ' placeholder="' . esc_attr__( 'Website', 'the-lifestyle' ) . '" value="' . esc_attr( $commenter['comment_author_url'] ) . '" size="30" />
      </p>';

    return $fields;
  }
}

$the_lifestyle_setup = new The_Lifestyle_Setup();

add_action( 'after_setup_theme', array( $the_lifestyle_setup, 'setup' ), 10 );

/**
 * Customizer additions.
 *
 * @since The Lifestyle 1.0
 */
require get_template_directory() . '/inc/customizer.php';

/**
 * Custom template tags for this theme.
 *
 * @since The Lifestyle 1.0
 */
require get_template_directory() . '/inc/template-tags.php';

/**
 * Theme Metaboxes
 *
 * @since The Lifestyle 1.0
 */
require get_template_directory() . '/inc/class-the-lifestyle-metaboxes-setup.php';

/**
 * Post Formats.
 *
 * @since The Lifestyle 1.1
 */
require get_template_directory() . '/inc/class-the-lifestyle-post-formats.php';

/**
 * TGM Plugin Activation
 *
 * @since The Lifestyle 1.2
 */
require get_template_directory() . '/inc/tgmpa/tgmpa.php';
/**
 * Change the custom logo URL
 */
function my_custom_logo_link() {

	// The logo
    $custom_logo_id = get_theme_mod( 'custom_logo' );

    // If has logo
    if ( $custom_logo_id ) {

    	// Attr
	    $custom_logo_attr = array(
			'class'    => 'custom-logo',
			'itemprop' => 'logo',
		);

		// Image alt
		$image_alt = get_post_meta( $custom_logo_id, '_wp_attachment_image_alt', true );
		if ( empty( $image_alt ) ) {
			$custom_logo_attr['alt'] = get_bloginfo( 'name', 'display' );
		}

	    // Get the image
	    $html = sprintf( '<a href="%1$s" class="custom-logo-link" rel="home" itemprop="url">%2$s</a>',
			esc_url( 'www.bleap.in' ),
			wp_get_attachment_image( $custom_logo_id, 'full', false, $custom_logo_attr )
		);

	}

	// Return
    return $html;   
}
add_filter( 'get_custom_logo', 'my_custom_logo_link' );