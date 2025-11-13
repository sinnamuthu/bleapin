<?php
/**
 * The template for displaying archive for portoflio post type
 *
 * @link https://codex.wordpress.org/Template_Hierarchy
 *
 * @since The Lifestyle 1.0
 */

get_header(); ?>

	<section id="primary" class="content-area">
		<main id="main" class="site-main" role="main">

		<?php if ( have_posts() ) : ?>

			<header class="page-header">
				<?php
		        the_archive_title( '<h1 class="page-title">', '</h1>' );
		        the_archive_description( '<div class="taxonomy-description">', '</div>' );
				?>
			</header><!-- .page-header -->

		    <div id="masonry-grid" class="posts-grid portfolio-grid">
		    <?php
		    wp_enqueue_script( 'jquery-masonry' );

		    // Start the Loop.
		    while ( have_posts() ) : the_post();

		      /*
		       * Include the Post-Format-specific template for the content.
		       * If you want to override this in a child theme, then include a file
		       * called content-___.php (where ___ is the Post Format name) and that will be used instead.
		       */
		      get_template_part( 'template-parts/content-portfolio' );

		    // End the loop.
		    endwhile;
		    ?>
		    </div><!-- .posts-grid -->
	      
	     	<?php
			// Previous/next page navigation.
	      	the_lifestyle_paging_nav();

			// If no content, include the "No posts found" template.
			else :
				get_template_part( 'template-parts/content', 'none' );

			endif;
			?>

		</main><!-- .site-main -->
	</section><!-- .content-area -->

<?php get_footer(); ?>
