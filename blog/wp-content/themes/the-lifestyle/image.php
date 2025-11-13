<?php
/**
 * The template for displaying image attachments
 *
 * @since The Lifestyle 1.0
 */

get_header(); ?>

	<div id="primary" class="content-area">
		<main id="main" class="site-main">

			<?php while ( have_posts() ) : the_post(); ?>
			
				<article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>
          <div class="entry-attachment">
            <?php echo wp_get_attachment_image( get_the_ID(), 'the-lifestyle-full-width' ); ?>

            <?php if ( has_excerpt() ) : ?>
              <div class="entry-caption">
                <?php the_excerpt(); ?>
              </div><!-- .entry-caption -->
            <?php endif; ?>
          </div><!-- .entry-attachment -->

          <header class="entry-header">
            <?php 
            the_title( '<h1 class="entry-title attachment-title">', '</h1>' );
            the_lifestyle_entry_meta( '<div class="entry-meta">', '</div>' ); 
            ?>
          </header><!-- .entry-header -->

          <?php if( get_the_content() ) : ?>
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
          <?php endif; ?>
          
          <?php the_lifestyle_entry_footer( '<footer class="entry-footer">', '</footer>' ); ?>
				</article><!-- #post-## -->
			
        <?php
					// If comments are open or we have at least one comment, load up the comment template
					if ( comments_open() || get_comments_number() ) :
						comments_template();
					endif;
        ?>

        <nav id="image-navigation" class="navigation image-navigation">
          <div class="nav-links">
            <div class="nav-previous"><?php previous_image_link( false, sprintf( '%s <span>%s</span>', is_rtl() ? '<i class="fa fa-angle-right"></i>' : '<i class="fa fa-angle-left"></i>', esc_html__( 'Previous Image', 'the-lifestyle' ) ) ); ?></div><div class="nav-next"><?php next_image_link( false, sprintf( '<span>%s</span> %s', esc_html__( 'Next Image', 'the-lifestyle' ), is_rtl() ? '<i class="fa fa-angle-left"></i>' : '<i class="fa fa-angle-right"></i>' ) ); ?></div>
          </div><!-- .nav-links -->
        </nav><!-- .image-navigation -->

        <?php
				// End the loop.
				endwhile;
			?>

		</main><!-- .site-main -->
	</div><!-- .content-area -->

<?php get_footer(); ?>
