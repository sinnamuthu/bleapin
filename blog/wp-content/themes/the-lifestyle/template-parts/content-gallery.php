<?php
/**
 * The default template for displaying content for gallery format.
 *
 * Used for both single and index/archive.
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
    if( is_sticky() && is_home() && ! is_paged() ) :
        printf( '<span class="sticky-badge">%s</span>', get_theme_mod( 'sticky_post_title' ) ? esc_html( get_theme_mod( 'sticky_post_title' ) ) : esc_html__( 'Featured', 'the-lifestyle' ) );
    else :
      the_lifestyle_category_list();
    endif;
    
    if ( is_single() ) :
      the_title( '<h1 class="entry-title">', '</h1>' );
    else :
      the_title( sprintf( '<h2 class="entry-title"><a href="%s" rel="bookmark">', esc_url( get_permalink() ) ), '</a></h2>' );
    endif;
    
    the_lifestyle_entry_meta( '<div class="entry-meta">', '</div>' ); 
  ?>
  </header><!-- .entry-header -->

  <?php if( is_search() ) : ?>
    <?php if( get_the_excerpt() ) : ?>

      <div class="entry-summary">
      <?php the_excerpt(); ?>
      </div><!-- .entry-summary -->

    <?php endif; ?>
  <?php else : ?>

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

  <?php the_lifestyle_entry_footer( get_theme_mod( 'display_tags_list', 1 ), get_theme_mod( 'display_share_buttons', 1 ), '<footer class="entry-footer">', '</footer>' ); ?>
</article><!-- #post-## -->
