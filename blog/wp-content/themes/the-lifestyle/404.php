<?php
/**
 * The template for displaying 404 pages (not found)
 *
 * @since The Lifestyle 1.0
 */

get_header(); ?>

	<div id="primary" class="content-area">
		<main id="main" class="site-main">
		
      <header class="page-header">
        <h1 class="page-title not-found-title"><?php esc_html_e( 'Page not found', 'the-lifestyle' ); ?></h1>
      </header><!-- .page-header -->
      
			<section class="error-404 not-found">
        <div class="page-content">
          <h2 class="entry-title"><?php esc_html_e( 'Whoops!', 'the-lifestyle' ); ?></h2>
          <p><?php esc_html_e( 'It looks like nothing was found at this location. Maybe try a search?', 'the-lifestyle' ); ?></p>

          <?php get_search_form(); ?>
          
          <a href="<?php echo esc_url( home_url( '/' ) ); ?>" class="nav-link"><?php esc_html_e( 'Back To Homepage &rarr;', 'the-lifestyle' ); ?></a>
        </div><!-- .page-content -->
			</section><!-- .error-404 -->

		</main><!-- .site-main -->
	</div><!-- .content-area -->

<?php get_footer(); ?>