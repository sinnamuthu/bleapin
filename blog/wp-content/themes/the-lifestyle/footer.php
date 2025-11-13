<?php
/**
 * The template for displaying the footer
 *
 * Contains the closing of the "site-content" div and all content after.
 *
 * @since The Lifestyle 1.0
 */
?>
        </div><!-- .site-content --> 
      </div><!-- .container -->

      <?php
      if( is_single() && ! is_attachment() ) {
        the_post_navigation( array(
          'next_text' => '<span class="nav-meta">' . ( is_singular( 'post' ) ? esc_html__( 'Next post', 'the-lifestyle' ) : esc_html__( 'Next', 'the-lifestyle' ) ) . '</span> <span class="post-title">%title</span>',
          'prev_text' => '<span class="nav-meta">' . ( is_singular( 'post' ) ? esc_html__( 'Previous post', 'the-lifestyle' ) : esc_html__( 'Previous', 'the-lifestyle' ) ) . '</span> <span class="post-title">%title</span>',
        ) ); 
      }
      ?>

      <footer id="colophon" class="site-footer">

        <?php if ( is_active_sidebar( 'widget-area-1' ) || is_active_sidebar( 'widget-area-2' ) || is_active_sidebar( 'widget-area-3' ) ) : ?>
          <div id="secondary" class="secondary">   
            <div class="container">

              <div class="widget-areas">
                <?php if( is_active_sidebar( 'widget-area-1' ) ) : ?>
                <div id="widget-area-1" class="widget-area widget-area-1" role="complementary">
                  <?php dynamic_sidebar( 'widget-area-1' ); ?>
                </div>
                <?php endif; ?>

                <?php if( is_active_sidebar( 'widget-area-2' ) ) : ?>
                <div id="widget-area-2" class="widget-area widget-area-2" role="complementary">
                  <?php dynamic_sidebar( 'widget-area-2' ); ?>
                </div>
                <?php endif; ?>

                <?php if( is_active_sidebar( 'widget-area-3' ) ) : ?>
                <div id="widget-area-3" class="widget-area widget-area-3" role="complementary">
                  <?php dynamic_sidebar( 'widget-area-3' ); ?>
                </div>
                <?php endif; ?>
              </div>

            </div>
          </div>
        <?php endif; ?>

        <div class="container">
          <div class="site-info">
          <?php the_lifestyle_social_profiles(); ?>
          <?php the_lifestyle_site_copyright( '<div class="site-copyright">', '</div>' ); ?>
          </div>
        </div>
      </footer>
  </div><!-- #page -->
  
	<?php wp_footer(); ?>
</body>
</html>