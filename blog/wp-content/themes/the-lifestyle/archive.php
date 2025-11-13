<?php
/**
 * The template for displaying archive pages
 *
 * Used to display archive-type pages if nothing more specific matches a query.
 * For example, puts together date-based pages if no date.php file exists.
 *
 * @link https://codex.wordpress.org/Template_Hierarchy
 *
 * @since The Lifestyle 1.0
 */

get_header(); ?>

	<section id="primary" class="content-area">
		<main id="main" class="site-main">

		<?php if ( have_posts() ) : ?>

			<header class="page-header">
      <?php
        if( is_author() ) {
          printf( '<div class="author-avatar">%s</div>', get_avatar( get_queried_object_id(), 150 ) ); 
        }

        the_archive_title( '<h1 class="page-title">', '</h1>' );
        the_archive_description( '<div class="taxonomy-description">', '</div>' );
      ?>
			</header><!-- .page-header -->

      <?php
      // Start the Loop.
      while ( have_posts() ) : the_post();

        /*
         * Include the Post-Format-specific template for the content.
         * If you want to override this in a child theme, then include a file
         * called content-___.php (where ___ is the Post Format name) and that will be used instead.
         */
        get_template_part( 'template-parts/content', get_post_format() );

      // End the loop.
      endwhile;
      
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
