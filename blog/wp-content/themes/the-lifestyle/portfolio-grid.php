<?php
/**
 * Template Name: Portfolio Grid
 *
 * @since The Lifestyle 1.0
 */

get_header(); ?>

	<div id="primary" class="content-area">
		<main id="main" class="site-main">

		<?php
		// Start the loop.
		while ( have_posts() ) : the_post();
		?>
			<article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>
			  	<?php the_lifestyle_post_thumbnail(); ?>

				<?php 
				if( the_lifestyle_display_page_title() ) {
					the_title( '<header class="entry-header"><h1 class="entry-title">', '</h1></header>' ); 
				}
				?>

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
			</article><!-- #post-## -->

		<?php   
          	// Get portfolio items.
          	$portfolio_items = new WP_Query( array ( 'post_type' => 'portfolio', 'posts_per_page' => -1 ) );

			if ( $portfolio_items->have_posts() ) :
				wp_enqueue_script( 'jquery-masonry' );
			?>
				<div id="masonry-grid" class="posts-grid portfolio-grid">

				<?php 
				while ( $portfolio_items->have_posts() ) : $portfolio_items->the_post();
					get_template_part( 'template-parts/content-portfolio' );
				endwhile; 
				?>

				</div><!-- .portfolio-grid -->
	        <?php 
	        endif;
            
          	wp_reset_postdata();

		// End the loop.
		endwhile;
		?>

		</main><!-- .site-main -->
	</div><!-- .content-area -->

<?php get_footer(); ?>
