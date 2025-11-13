<?php
/**
 * The template for displaying Comments
 *
 * The area of the page that contains comments and the comment form.
 *
 * @since The Lifestyle 1.0
 */

/*
 * If the current post is protected by a password and the visitor has not yet
 * entered the password we will return early without loading the comments.
 */
if ( post_password_required() ) {
	return;
}
?>

<div id="comments" class="comments-area">
  <div class="comments-inner">
	<?php if ( have_comments() ) : ?>

	<h3 class="comments-title section-title">
    <?php printf( _nx( 'One comment on &ldquo;%2$s&rdquo;', '%1$s comments on &ldquo;%2$s&rdquo;', get_comments_number(), 'comments title', 'the-lifestyle' ), number_format_i18n( get_comments_number() ), get_the_title() ); ?>
	</h3>

	<ol class="comment-list">
		<?php
			wp_list_comments( array(
				'style'      => 'ol',
				'short_ping' => true,
				'avatar_size'=> 100,
			) );
		?>
	</ol><!-- .comment-list -->

	<?php if ( get_comment_pages_count() > 1 && get_option( 'page_comments' ) ) : ?>
	<nav id="comment-nav-below" class="navigation comment-navigation" role="navigation">
		<div class="nav-previous"><?php previous_comments_link( esc_html__( '&larr; Older Comments', 'the-lifestyle' ) ); ?></div>
		<div class="nav-next"><?php next_comments_link( esc_html__( 'Newer Comments &rarr;', 'the-lifestyle' ) ); ?></div>
	</nav><!-- #comment-nav-below -->
	<?php endif; // Check for comment navigation. ?>

	<?php if ( ! comments_open() ) : ?>
	<p class="no-comments"><?php esc_html_e( 'Comments are closed.', 'the-lifestyle' ); ?></p>
	<?php endif; ?>

	<?php endif; // have_comments() ?>

  <?php  
    comment_form( array(
      'comment_field' => '<p class="comment-form-comment"><textarea id="comment" name="comment" cols="45" rows="5" placeholder="' . esc_attr__( 'Comment', 'the-lifestyle' ) . '" aria-required="true"></textarea></p>',
      'title_reply_before'  => '<h3 id="reply-title" class="comment-reply-title section-title">',
      'comment_notes_after' => ' ',
      'cancel_reply_link' => '<i class="fa fa-window-close"></i>'
    ) ); 
  ?>
  </div><!-- .comments-inner -->
</div><!-- #comments -->
