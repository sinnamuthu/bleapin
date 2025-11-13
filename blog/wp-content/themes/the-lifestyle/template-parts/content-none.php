<?php
/**
 * The template for displaying a "No posts found" message
 *
 * @since The Lifestyle 1.0
 */
?>

<header class="page-header">
	<h1 class="page-title not-found-title"><?php esc_html_e( 'Nothing Found', 'the-lifestyle' ); ?></h1>
</header>

<div class="not-found">
  <div class="inner">
    <div class="page-content">
      <?php if ( is_home() && current_user_can( 'publish_posts' ) ) : ?>

      <p>
        <?php esc_html_e( 'Ready to publish your first post?', 'the-lifestyle' ); ?> <a href="<?php echo esc_url( admin_url( 'post-new.php' ) ); ?>"><?php esc_html_e( 'Get started here', 'the-lifestyle' ); ?></a>.
      </p>

      <?php elseif ( is_search() ) : ?>
      
      <h2 class="entry-title"><?php esc_html_e( 'No Results Found', 'the-lifestyle' ); ?></h2>
      <p><?php esc_html_e( 'Sorry, but nothing matched your search terms. Please try again with some different keywords.', 'the-lifestyle' ); ?></p>
      <?php get_search_form(); ?>
      
      <a href="<?php echo esc_url( home_url( '/' ) ); ?>" class="nav-link"><?php esc_html_e( 'Back To Homepage &rarr;', 'the-lifestyle' ); ?></a>
      
      <?php else : ?>

      <p><?php esc_html_e( 'It seems we can&rsquo;t find what you&rsquo;re looking for. Perhaps searching can help.', 'the-lifestyle' ); ?></p>
      <?php get_search_form(); ?>

      <?php endif; ?>
    </div>
  </div>
</div><!-- .page-content -->
