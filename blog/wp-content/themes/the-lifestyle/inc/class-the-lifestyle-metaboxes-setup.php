<?php
/**
 * Post options metaboxes.
 *
 * @since The Lifestyle 1.0
 */
 
class The_Lifestyle_Metaboxes_Setup {

  protected $custom_header_image_screens = array( 'post', 'page', 'portfolio' );

  protected $default_page_options = array(
    'display_title' => true,
    'display_share_buttons' => true
  );

  public function setup() {
    add_action( 'admin_enqueue_scripts', array( $this, 'admin_enqueue_scripts' ) );
		add_action( 'add_meta_boxes',        array( $this, 'meta_boxes' ) );
		add_action( 'save_post',             array( $this, 'save_custom_header_image_id' ) );
    add_action( 'save_post_page',        array( $this, 'save_page_options_meta' ) );
  }
  
  /**
	 * Enqueue meta boxes scripts and styles.
	 */	
	public function admin_enqueue_scripts() {
    $screen = get_current_screen();
    
    if ( ! in_array( $screen->id, $this->custom_header_image_screens ) )
          return;
          
    wp_enqueue_script( 'the-lifestyle-custom-header-image-js',  get_template_directory_uri() . '/assets/js/admin/custom-header-image.js', array( 'jquery' ), '1.1', true );

    wp_localize_script( 
      'the-lifestyle-custom-header-image-js', 
      'theLifestyleVars', 
      array( 
        'mediaFrameTitle'  => esc_html__( 'Select Image', 'the-lifestyle' ),
        'mediaFrameButton' => esc_html__( 'Choose Image', 'the-lifestyle' )
      )
    );  
	}
  
  // Add meta boxes
  public function meta_boxes() {
    foreach( $this->custom_header_image_screens as $screen ) {
      add_meta_box( 'the-lifestyle-header-background', esc_html__( 'Header Background', 'the-lifestyle' ), array( $this, 'custom_header_image_view' ),  $screen, 'side', 'low' );
    }

    add_meta_box( 'the-lifestyle-display-options', esc_html__( 'Display Options', 'the-lifestyle' ), array( $this, 'page_options_view' ),  array( 'page' ), 'side' );
  }
  
  public function custom_header_image_view( $post ) {
    // Get WordPress' media upload URL
    $upload_link = get_upload_iframe_src( 'image', $post->ID );

    // See if there's a media id already saved as post meta
    $header_image_id = get_post_meta( $post->ID, 'the_lifestyle_header_image_id', true );

    // Get the image src
    $header_image_src = wp_get_attachment_image_src( $header_image_id, 'the-lifestyle-header-image' );

    // For convenience, see if the array is valid
    $has_header_image = is_array( $header_image_src );
    ?>

    <div class="custom-header-image-container">
    <?php if ( $has_header_image ) : ?>
      <img src="<?php echo esc_url( $header_image_src[0] ); ?>" style="max-width:100%;" />
    <?php endif; ?>
    </div>

    <p class="hide-if-no-js">
      <a class="upload-custom-header-image <?php if ( $has_header_image  ) { echo 'hidden'; } ?>" href="<?php echo esc_url( $upload_link ); ?>">
        <?php esc_html_e( 'Set header image', 'the-lifestyle' ); ?>
      </a>
      <a class="delete-custom-header-image <?php if ( ! $has_header_image  ) { echo 'hidden'; } ?>" href="#">
          <?php esc_html_e( 'Remove header image', 'the-lifestyle' ); ?>
      </a>
    </p>

    <?php wp_nonce_field( 'save_custom_header_image_meta', 'custom_header_image_metabox_nonce' ); ?>

    <input class="custom-header-image-id" name="custom-header-image-id" type="hidden" value="<?php echo absint( $header_image_id ); ?>" />
  <?php
  }

  public function page_options_view( $post ) {
    $page_options = get_post_meta( $post->ID, 'the_lifestyle_page_options', true );
    $page_options = wp_parse_args( $page_options, $this->default_page_options );
  ?>
    <p>
      <label class="selectit"><input type="checkbox" id="display-title" name="the_lifestyle_display_title" <?php checked( $page_options['display_title'], true ); ?>><?php esc_html_e( 'Display title', 'the-lifestyle' ); ?></label>
    </p>
    <p>
      <label class="selectit"><input type="checkbox" id="display-post-thumbnail" name="the_lifestyle_display_share_buttons" <?php checked( $page_options['display_share_buttons'], true ); ?>><?php esc_html_e( 'Display share buttons', 'the-lifestyle' ); ?></label>
    </p>
  <?php
    wp_nonce_field( 'the_lifestylesave_page_options_meta', 'the_lifestyle_page_options_meta_box_nonce' );
  }

  public function save_custom_header_image_id( $post_id ) {
    // Checks save status
    $is_autosave = wp_is_post_autosave( $post_id );
    $is_revision = wp_is_post_revision( $post_id );
    $is_valid_nonce = ( isset( $_POST[ 'custom_header_image_metabox_nonce' ] ) && wp_verify_nonce( $_POST[ 'custom_header_image_metabox_nonce' ], 'save_custom_header_image_meta' ) ) ? true : false;
 
    // Exits script depending on save status
    if ( $is_autosave || $is_revision || !$is_valid_nonce ) {
        return;
    }

    if( isset( $_POST[ 'custom-header-image-id' ] ) ) {
      update_post_meta( $post_id, 'the_lifestyle_header_image_id', absint( $_POST[ 'custom-header-image-id' ] ) );
    }
  }

  // Save page options meta
  public function save_page_options_meta( $post_id ) {
    $is_autosave = wp_is_post_autosave( $post_id );
    $is_revision = wp_is_post_revision( $post_id );
    $is_valid_nonce = ( isset( $_POST[ 'the_lifestyle_page_options_meta_box_nonce' ] ) && wp_verify_nonce( $_POST[ 'the_lifestyle_page_options_meta_box_nonce' ], 'the_lifestylesave_page_options_meta' ) ) ? true : false;
 
    if ( $is_autosave || $is_revision || !$is_valid_nonce ) {
        return;
    }

    $display_title = ( isset( $_POST[ 'the_lifestyle_display_title' ] ) ) ? true : false;
    $display_share_buttons = ( isset( $_POST[ 'the_lifestyle_display_share_buttons' ] ) ) ? true : false;

    update_post_meta( $post_id, 'the_lifestyle_page_options', compact( 'display_title', 'display_share_buttons' ) );
  }
}

$the_lifestyle_metaboxes = new The_Lifestyle_Metaboxes_Setup();

add_action( 'after_setup_theme', array( $the_lifestyle_metaboxes, 'setup' ), 16 );
?>