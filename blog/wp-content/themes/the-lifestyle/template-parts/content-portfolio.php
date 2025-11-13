<?php
/**
 * The default template for displaying portfolio post content
 *
 * Used for index/archive.
 *
 * @since The Lifestyle 1.0
 */
?>

<article id="post-<?php the_ID(); ?>" <?php post_class( 'portfolio-post' ); ?>>
	<div class="item-wrap">
		<?php if ( has_post_thumbnail() ) : ?>
		<a class="post-thumbnail" href="<?php the_permalink(); ?>" aria-hidden="true">
		<?php the_post_thumbnail( 'the-lifestyle-portfolio-grid' , array( 'alt' => get_the_title() ) ); ?>
		</a>
		<?php endif; ?>

		<header class="entry-header">
		<?php the_title( sprintf( '<h2 class="entry-title"><a href="%s" rel="bookmark">', esc_url( get_permalink() ) ), '</a></h2>' ); ?>
		</header><!-- .entry-header -->
	</div>
</article><!-- #post-## -->
