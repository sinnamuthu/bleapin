<?php
/**
 * Custom template tags for The Lifestyle
 *
 * Eventually, some of the functionality here could be replaced by core features.
 *
 * @since The Lifestyle 1.0
 */
if ( ! function_exists( 'the_lifestyle_site_identity' ) ) :
  /**
   * Prints HTML with blog title and description.
   *
   * @since The Lifestyle 1.0
   */
  function the_lifestyle_site_identity() {
    if( get_theme_mod( 'custom_logo' ) ) {
      the_lifestyle_custom_logo();
    }

    if( get_theme_mod( 'display_site_title', 1 ) ) {
      printf( '<%1$s class="site-title"><a href="%2$s" rel="home">%3$s</a></%1$s>', 
        is_front_page() && is_home() ? 'h1' : 'p', 
        esc_url( home_url( '/' ) ), 
        esc_html( get_bloginfo( 'name' ) ) 
      );
    }

    the_lifestyle_tagline( '<div class="tagline">', '</div>' );
  }
endif;

if ( ! function_exists( 'the_lifestyle_custom_logo' ) ) :
  /**
   * Displays the optional custom logo.
   *
   * Does nothing if the custom logo is not available.
   *
   * @since The Lifestyle 1.0
   */
  function the_lifestyle_custom_logo() {
    if ( function_exists( 'the_custom_logo' ) ) {
      the_custom_logo();
    }
  }
endif;

if ( ! function_exists( 'the_lifestyle_tagline' ) ) :
  /**
   * Prints HTML with custom header text.
   *
   * @since The Lifestyle 1.0
   */
  function the_lifestyle_tagline( $before = '', $after = '' ) {
    $header_text = get_transient( 'the_lifestyle_tagline' );
    
    if( $header_text === false || is_customize_preview() ) {
      $header_text = get_theme_mod( 'tagline' );
      
      if( $header_text ) {
        $header_text = wp_kses( $header_text, array(
            'a' => array(
              'href' => array(),
              'title' => array()
            ),
            'p'      => array(),
            'b'      => array(),
            'strong' => array(),
            'em'     => array(),
            'i'      => array(),
            'br'     => array(),
            'span'   => array(),
            'img' => array(
              'src' => array(),
              'alt' => array(),
              'title' => array()
            )
          )
        );
      }
      set_transient( 'the_lifestyle_tagline', $header_text );
    }
    
    if( $header_text || is_customize_preview() )
      printf( '%s%s%s', $before, $header_text, $after );
  }
endif;

if ( ! function_exists( 'the_lifestyle_site_copyright' ) ) :
  /**
   * Prints HTML with custom or default copyright text.
   *
   * @since The Lifestyle 1.0
   */
  function the_lifestyle_site_copyright( $before = '', $after = '' ) {
    $default_copyright = sprintf( '&copy; %1$d <a href="%2$s">%3$s</a>', date('Y'), esc_url( home_url( '/' ) ), esc_html( get_bloginfo( 'name' ) ) );
    
    $copyright = get_transient( 'the_lifestyle_copyright' );
    
    if( $copyright === false || is_customize_preview() ) {
      $copyright = get_theme_mod( 'copyright' );
      
      if( $copyright ) {
        $copyright = wp_kses( $copyright, array(
            'a' => array(
              'href' => array(),
              'title' => array()
            ),
            'p'      => array(),
            'b'      => array(),
            'strong' => array(),
            'em'     => array(),
            'i'      => array(),
            'br'     => array(),
            'span'   => array(),
            'img' => array(
              'src' => array(),
              'alt' => array(),
              'title' => array()
            )
          )
        );
      }
      set_transient( 'the_lifestyle_copyright', $copyright );
    }
    
    printf( '%s%s%s', $before, $copyright ? $copyright : $default_copyright, $after );
  }
endif;

if ( ! function_exists( 'the_lifestyle_social_profiles' ) ) :
  /**
   * Prints HTML with social profiles buttons.
   *
   * @since The Lifestyle 1.0
   */
  function the_lifestyle_social_profiles( $before = '', $after = '' ) {
    $social_profiles = get_theme_mod( 'social' );
    
    if( empty( $social_profiles ) )
      return;
    
    $output = '';
    
    if( is_array( $social_profiles ) ) {
      foreach( $social_profiles as $network_id => $url ) {
        if( $url )
          $output .= sprintf( 
            '<li><a href="%1$s" class="%2$s" target="_blank"><i class="fa fa-%2$s"></i></a></li>', 
            ( $network_id == 'email' ) ? 'mailto:' . esc_attr( $url ) : esc_url( $url ), 
            esc_attr( $network_id ) 
         );
      }
    }
    
    if( $output )
      printf( '%s<ul class="social-profiles">%s</ul>%s', $before, $output, $after );
  }
endif;

if ( ! function_exists( 'the_lifestyle_post_thumbnail' ) ) :
  /**
   * Display an optional post thumbnail.
   *
   * Wraps the post thumbnail in an anchor element on index views, or a div
   * element when on single views.
   *
   * @since The Lifestyle 1.0
   */
  function the_lifestyle_post_thumbnail() {
    if ( post_password_required() || is_attachment() || ! has_post_thumbnail()  ) {
      return;
    }

    if ( is_singular() ) :
    ?>

    <div class="post-thumbnail">
      <?php the_post_thumbnail(); ?>
    </div><!-- .post-thumbnail -->

    <?php else : ?>

    <a class="post-thumbnail" href="<?php the_permalink(); ?>" aria-hidden="true">
      <?php the_post_thumbnail( 'post-thumbnail', array( 'alt' => get_the_title() ) ); ?>
    </a>

    <?php endif; // End is_singular()
  }
endif;

if ( ! function_exists( 'the_lifestyle_entry_meta' ) ) :
  /**
   * Prints HTML with meta information for the categories, post date.
   *
   * @since The Lifestyle 1.0
   */
  function the_lifestyle_entry_meta( $before = '', $after = '' ) {
    $output = '';
    $post_type = get_post_type();

    if ( in_array( $post_type, array( 'post', 'attachment' ) ) && get_theme_mod( 'display_date', 1 ) ) {
      $time_string = sprintf( '<time class="entry-date published" datetime="%1$s">%2$s</time>',
        esc_attr( get_the_date( 'c' ) ),
        get_the_date()
      );

      $output .= sprintf( '<span class="posted-on post-meta">%s</span>', sprintf( esc_html__( 'Posted on %s', 'the-lifestyle' ), $time_string ) );
    }

    if ( 'post' == $post_type && get_theme_mod( 'display_author', 1 ) ) {
      $author_string = sprintf( '<a class="url fn" href="%s">%s</a>', esc_url( get_author_posts_url( get_the_author_meta( 'ID' ) ) ), get_the_author() );
      $author_string = sprintf( esc_html_x( 'by %s', 'Post author', 'the-lifestyle' ), $author_string );
    
      $output .= sprintf( '<span class="byline author vcard post-meta">%s</span>', $author_string );
    }

    if( $output )
      printf( '%s%s%s', $before, $output, $after );
  }
endif;

if ( ! function_exists( 'the_lifestyle_category_list' ) ) :
  /**
   * Prints HTML with post categories list.
   *
   * @since The Lifestyle 1.0
   */
  function the_lifestyle_category_list() {
    global $post;

    if( ! $post )
      return;

    $post_type = $post->post_type;
    $output = '';
    
    if ( 'post' == $post_type && get_theme_mod( 'display_categories', 1 ) ) {
      $categories = get_the_category();
      
      if( $categories ) {
        foreach( $categories as $category ) {
          $output .= sprintf( '<a href="%s" class="category-%d">%s</a>', esc_url( get_category_link( $category->term_id ) ), $category->term_id, esc_attr( $category->cat_name ) );
        }
      }
    }

    if ( 'portfolio' == $post_type && taxonomy_exists( 'portfolio_category' ) && get_theme_mod( 'display_portfolio_category', 1 ) ) {
      $output .= get_the_term_list( $post->ID, 'portfolio_category', '', '', '' );
    }

    if( $output ) {
      printf( '<div class="cat-links">%s</div>', $output );
    } 
  }
endif;

if ( ! function_exists( 'the_lifestyle_entry_footer' ) ) :
  /**
   * Prints HTML with post tags and share buttons in post footer
   *
   * @since The Lifestyle 1.0
   */
  function the_lifestyle_entry_footer( $display_tags = true, $display_share_buttons = true, $before = '', $after = '' ) {
    $output = '';
    $post = get_post();
    
    if ( is_single() && $display_tags ) {
      if( 'post' == $post->post_type && get_theme_mod( 'display_tags_list', 1 ) ) {
        $output .= get_the_tag_list( '<div class="tags-list">', '', '</div>' );
      }

      if( 'portfolio' == $post->post_type && taxonomy_exists( 'portfolio_tag' ) && get_theme_mod( 'display_portfolio_tags', 1 ) ) {
        $output .= get_the_term_list( $post->ID, 'portfolio_tag', '<div class="tags-list">', '', '</div>' );
      }
    }

    if( $display_share_buttons && function_exists( 'lsmb_get_share_buttons' ) ) {
      $output .= sprintf( '<div class="entry-share">%s</div>', lsmb_get_share_buttons() );
    }

    if( $output )
      printf( '%s%s%s', $before, $output, $after );
  }
endif;

if ( ! function_exists( 'the_lifestyle_paging_nav' ) ) :
/**
 * Display navigation to next/previous set of posts when applicable.
 *
 * @since The Lifestyle 1.0
 */
function the_lifestyle_paging_nav() {
  global $wp_query;

  // Don't print empty markup if there's only one page.
  if ( $wp_query->max_num_pages < 2 )
    return;
  ?>
  <nav class="navigation paging-navigation" role="navigation">
    <h1 class="screen-reader-text"><?php esc_html_e( 'Posts navigation', 'the-lifestyle' ); ?></h1>
    <div class="nav-links">

      <?php if ( get_next_posts_link() ) : ?>
      <div class="nav-previous"><?php next_posts_link( sprintf( '%s <span>%s</span>', is_rtl() ? '<i class="fa fa-angle-right"></i>' : '<i class="fa fa-angle-left"></i>', esc_html__( 'Older posts', 'the-lifestyle' ) ) ); ?></div>
      <?php endif; ?>

      <?php if ( get_previous_posts_link() ) : ?>
      <div class="nav-next"><?php previous_posts_link( sprintf( '<span>%s</span> %s', esc_html__( 'Newer posts', 'the-lifestyle' ), is_rtl() ? '<i class="fa fa-angle-left"></i>' : '<i class="fa fa-angle-right"></i>' ) ); ?></div>
      <?php endif; ?>

    </div><!-- .nav-links -->
  </nav><!-- .navigation -->
  <?php
}
endif;

if ( ! function_exists( 'the_lifestyle_display_page_title' ) ) :
  /**
   * Checking if the page title is displayed or not.
   *
   * @since The Lifestyle 1.0
   */
  function the_lifestyle_display_page_title() {
    global $post;

    if( !$post )
      return false;

    $page_options = get_post_meta( $post->ID, 'the_lifestyle_page_options', true );
    $display_page_title = isset( $page_options['display_title'] ) ? $page_options['display_title'] : true;

    return (bool) $display_page_title;
  }
endif;

if ( ! function_exists( 'the_lifestyle_welcome_text' ) ) :
  /**
   * Prints HTML with welcome text.
   *
   * @since The Lifestyle 1.0
   */
  function the_lifestyle_welcome_text( $before = '', $after = '' ) {
    $welcome_text_page_id = absint( get_theme_mod( 'welcome_text_page_id' ) );
    $output = '';

    if( !$welcome_text_page_id )
      return;

    if( has_post_thumbnail( $welcome_text_page_id ) ) {
      $output .= sprintf( '<div class="welcome-text-thumbnail">%s</div>', get_the_post_thumbnail( $welcome_text_page_id, 'thumbnail' ) );
    }

    $welcome_text_page = get_post( $welcome_text_page_id );

    $welcome_text_title = apply_filters( 'the_title', $welcome_text_page->post_title, $welcome_text_page_id );

    if( $welcome_text_title )
      $output .= sprintf( '<h3 class="welcome-text-title">%s</h3>', $welcome_text_title );

    $welcome_text_content = apply_filters( 'the_content', $welcome_text_page->post_content );
    $welcome_text_content = str_replace( ']]>', ']]&gt;', $welcome_text_content);

    if( $welcome_text_content )
      $output .= sprintf( '<div class="welcome-text-content">%s</div>', $welcome_text_content );

    if( $output )
      printf( '%s%s%s', $before, $output, $after );
  }
endif;
?>