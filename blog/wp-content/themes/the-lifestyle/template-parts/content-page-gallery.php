<?php
/**
 * The template used for displaying page content for gallery format
 *
 * @since The Lifestyle 1.1
 */
?>

<article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>
  <?php 
    the_lifestyle_format_content( 
      array( 
        'before'          => '<div class="format-gallery-carousel owl-carousel">',
        'after'           => '</div>',
        'images_size'     => 'the-lifestyle-full-width',
        'fallback_cb'     => 'the_lifestyle_post_thumbnail',
        'enqueue_scripts' => array( 'owl-carousel', 'imagesloaded' ),
        'enqueue_styles'  => array( 'owl-carousel' )
      )
    );
  ?>

  <?php 
  if( the_lifestyle_display_page_title() ) {
    the_title( '<header class="entry-header"><h1 class="entry-title">', '</h1></header>' ); 
  }
  ?>

  <div class="entry-content">
    <?php 
      the_content();
      
      wp_link_pages( array(
        'before'      => '<div class="page-links"><span class="page-links-title">' . esc_html__( 'Pages:', 'the-lifestyle' ) . '</span>',
        'after'       => '</div>',
        'link_before' => '<span>',
        'link_after'  => '</span>',
        'pagelink'    => ' %',
        'separator'   => ', ',
      ) );
    ?>
  </div><!-- .entry-content -->
  
  <?php 
    $page_options = get_post_meta( $post->ID, 'the_lifestyle_page_options', true );
    $display_page_share_buttons = get_theme_mod( 'display_page_share_buttons', 1 ) && ( isset( $page_options['display_share_buttons'] ) ? $page_options['display_share_buttons'] : true );

    the_lifestyle_entry_footer( false, $display_page_share_buttons, '<footer class="entry-footer">', '</footer>' ); 
  ?>
</article><!-- #post-## -->
