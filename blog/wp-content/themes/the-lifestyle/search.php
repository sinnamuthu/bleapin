<?php
/**
 * The template for displaying search results pages.
 *
 * @since The Lifestyle 1.0
 */

get_header(); ?>

	<section id="primary" class="content-area">
		<main id="main" class="site-main">

		<?php if ( have_posts() ) : ?>

			<header class="page-header">
				<h1 class="page-title"><?php printf( esc_html__( 'Search Results for: %s', 'the-lifestyle' ), get_search_query() ); ?></h1>
				<div class="search-description">
					<p>
					<?php
					global $wp_query;
					printf( '<span class="meta">' . esc_html__( '%s results found.', 'the-lifestyle' ) . '</span>', absint( $wp_query->found_posts ) );
					?>
					</p>
					<?php get_search_form(); ?>
				</div>
			</header><!-- .page-header -->

		<?php
		// Start the loop.
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
