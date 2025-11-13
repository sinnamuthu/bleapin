<?php
/**
 * The default template for displaying portfolio item content.
 *
 * Used for both single.
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
  
  <header class="entry-header">
  <?php 
    the_lifestyle_category_list();
    the_title( '<h1 class="entry-title">', '</h1>' );
  ?>
  </header><!-- .entry-header -->

  <?php if( get_the_content() ) : ?>
  <div class="entry-content">
  <?php
    the_content( esc_html__( 'Continue Reading &rarr;', 'the-lifestyle' ) );
    
    wp_link_pages( array(
      'before'      => '<div class="page-links"><span class="page-links-title">' . esc_html__( 'Pages:', 'the-lifestyle' ) . '</span>',
      'after'       => '</div>',
      'link_before' => '<span>',
      'link_after'  => '</span>',
      'pagelink'    => ' %',
      'separator'   => ' ',
    ) );
  ?>  
  </div><!-- .entry-content -->
  <?php endif; ?>

  <?php the_lifestyle_entry_footer( get_theme_mod( 'display_tags_list', 1 ), get_theme_mod( 'display_portfolio_share_buttons', 1 ), '<footer class="entry-footer">', '</footer>' ); ?>
</article><!-- #post-## -->
