<?php
/**
 * The Lifestyle Customizer support
 *
 * @package WordPress
 * @since The Lifestyle 1.0
 */
 
/**
 * Implement Customizer additions and adjustments.
 *
 * @since The Lifestyle 1.0
 *
 * @param WP_Customize_Manager $wp_customize Customizer object.
 */
function the_lifestyle_customize_register( $wp_customize ) {
  /*
   * Modify default Wordpress sections and controls
   */
  $wp_customize->get_setting( 'blogname' )->transport = 'postMessage';
  $wp_customize->get_setting( 'background_color' )->transport = 'postMessage';
	$wp_customize->get_control( 'blogdescription' )->label = esc_html__( 'Site Description', 'the-lifestyle' );
  $wp_customize->get_control( 'custom_logo' )->priority = 0;
  $wp_customize->get_control( 'blogname' )->priority = 10;
  $wp_customize->get_control( 'blogdescription' )->priority = 20;
	$wp_customize->remove_control('display_header_text');
  $wp_customize->remove_control('header_textcolor');
  /*
   * Site Title & Tagline
   */   

  $wp_customize->add_setting( 'logo_size',
    array(
      'default' => 200,
      'sanitize_callback' => 'the_lifestyle_logo_size_sanitize',
      'transport' => 'postMessage'
    )
  );
  
  $wp_customize->add_control( 'logo_size', array(
    'type'        => 'range',
    'priority'    => 5,
    'section'     => 'title_tagline',
    'label'       => esc_html__( 'Logo Size', 'the-lifestyle' ),
    'input_attrs' => array(
        'min'   => 50,
        'max'   => 900,
        'step'  => 10
    ),
  ) );

  $wp_customize->add_setting( 'display_site_title',
    array(
      'default' => 1,
      'sanitize_callback' => 'the_lifestyle_checkbox_sanitize'
    )
  );
  
  $wp_customize->add_control( 'display_site_title', array(
    'type'     => 'checkbox',
    'priority' => 15,
    'label'    => esc_html__( 'Display Site Title', 'the-lifestyle' ),
    'section'  => 'title_tagline',
  ) );
  
  $wp_customize->add_setting(
    'tagline',
    array(
      'default' => '',
      'sanitize_callback' => 'the_lifestyle_textarea_sanitize',
      'transport' => 'postMessage'
    )
  );
 
  $wp_customize->add_control(
      'tagline',
      array(
        'type'        => 'textarea',
        'priority' => 25,
        'label'       => esc_html__( 'Tagline', 'the-lifestyle' ),
        'description' => esc_html__( 'You may use these HTML tags and attributes: a[href,title], p, b, strong, em, i, br, span, img[src, alt, title]', 'the-lifestyle' ),
        'section'     => 'title_tagline',
      )
  );

  /*
   * Header Image
   */
  $wp_customize->add_setting( 'header_image_blackout',
    array(
      'default' => 0.5,
      'sanitize_callback' => 'the_lifestyle_blackout_sanitize',
      'transport' => 'postMessage'
    )
  );
  
  $wp_customize->add_control( 'header_image_blackout', array(
    'type'      => 'range',
    'section'   => 'header_image',
    'label'     => esc_html__( 'Blackout', 'the-lifestyle' ),
    'priority'  => 30,
    'input_attrs' => array(
        'min'   => 0,
        'max'   => 1,
        'step'  => 0.05
    ),
  ) );

  /*
   * Welcome Text
   */ 
  $wp_customize->add_section( 'welcome_text',
    array(
      'title' => esc_html__( 'Welcome Text', 'the-lifestyle' )
    )
  );

  $wp_customize->add_setting( 'welcome_text_page_id', array(
    'sanitize_callback' => 'absint',
  ) );

  $wp_customize->add_control( 'welcome_text_page_id', array(
    'type'        => 'dropdown-pages',
    'section'     => 'welcome_text',
    'label'       => __( 'Page with welcome text', 'the-lifestyle' ),
    'description' => __( 'Select the page with your custom welcome text.', 'the-lifestyle' ),
  ) );

  $wp_customize->add_setting( 'display_welcome_text_only_on_homepage',
    array(
      'default' => 1,
      'sanitize_callback' => 'the_lifestyle_checkbox_sanitize',
    )
  );
  
  $wp_customize->add_control( 'display_welcome_text_only_on_homepage', array(
    'type'     => 'checkbox',
    'priority' => 10,
    'label'    => esc_html__( 'Display only on the homepage', 'the-lifestyle' ),
    'section'  => 'welcome_text',
  ) );

  /*
   * Colors
   */
  
  $wp_customize->add_setting( 'link_color',
    array(
      'default' => '#c8ab77',
      'sanitize_callback' => 'sanitize_hex_color',
      'transport' => 'postMessage'
    )
  );
  
  $wp_customize->add_control(
      new WP_Customize_Color_Control(
          $wp_customize,
          'link_color',
          array(
              'label' => esc_html__( 'Links', 'the-lifestyle' ),
              'section' => 'colors',
              'settings' => 'link_color',
          )
      )
  ); 

  $wp_customize->add_setting( 'link_color_hover',
    array(
      'default' => '#a9874a',
      'sanitize_callback' => 'sanitize_hex_color',
      'transport' => 'postMessage'
    )
  );

  $wp_customize->add_control(
      new WP_Customize_Color_Control(
          $wp_customize,
          'link_color_hover',
          array(
              'label' => esc_html__( 'Links (hover)', 'the-lifestyle' ),
              'section' => 'colors',
              'settings' => 'link_color_hover',
          )
      )
  );  
  
  $wp_customize->add_setting( 'button_background_color',
    array(
      'default' => '#cbb78f',
      'sanitize_callback' => 'sanitize_hex_color',
      'transport' => 'postMessage'
    )
  );
  
  $wp_customize->add_control(
      new WP_Customize_Color_Control(
          $wp_customize,
          'button_background_color',
          array(
              'label' => esc_html__( 'Buttons', 'the-lifestyle' ),
              'section' => 'colors',
              'settings' => 'button_background_color',
          )
      )
  ); 
  
  $wp_customize->add_setting( 'button_background_color_hover',
    array(
      'default' => '#bba579',
      'sanitize_callback' => 'sanitize_hex_color',
      'transport' => 'postMessage'
    )
  );
  
  $wp_customize->add_control(
      new WP_Customize_Color_Control(
          $wp_customize,
          'button_background_color_hover',
          array(
              'label' => esc_html__( 'Buttons (hover)', 'the-lifestyle' ),
              'section' => 'colors',
              'settings' => 'button_background_color_hover',
          )
      )
  ); 
  
  $wp_customize->add_setting( 'button_text_color',
    array(
      'default' => '#ffffff',
      'sanitize_callback' => 'sanitize_hex_color',
      'transport' => 'postMessage'
    )
  );
  
  $wp_customize->add_control(
      new WP_Customize_Color_Control(
          $wp_customize,
          'button_text_color',
          array(
              'label' => esc_html__( 'Buttons Text', 'the-lifestyle' ),
              'section' => 'colors',
              'settings' => 'button_text_color',
          )
      )
  ); 
  
  /*
   * Social Profiles
   */ 
  $wp_customize->add_section( 'social',
    array(
      'title' => esc_html__( 'Social Profiles', 'the-lifestyle' )
    )
  );

  $wp_customize->add_setting( 'social[facebook]',
    array(
      'default' => '',
      'sanitize_callback' => 'esc_url_raw'
    )
  );
  
  $wp_customize->add_control( 'social[facebook]', array(
    'type'     => 'url',
    'priority' => 10,
    'section'  => 'social',
    'label'    => esc_html__( 'Facebook', 'the-lifestyle' ),
  ) );
  
  $wp_customize->add_setting( 'social[twitter]',
    array(
      'default' => '',
      'sanitize_callback' => 'esc_url_raw'
    )
  );
  
  $wp_customize->add_control( 'social[twitter]', array(
    'type'     => 'url',
    'priority' => 15,
    'section'  => 'social',
    'label'    => esc_html__( 'Twitter', 'the-lifestyle' ),
  ) );
  
  $wp_customize->add_setting( 'social[googleplus]',
    array(
      'default' => '',
      'sanitize_callback' => 'esc_url_raw'
    )
  );
  
  $wp_customize->add_control( 'social[googleplus]', array(
    'type'     => 'url',
    'priority' => 20,
    'section'  => 'social',
    'label'    => esc_html__( 'Google Plus', 'the-lifestyle' ),
  ) );
  
  $wp_customize->add_setting( 'social[bloglovin]',
    array(
      'default' => '',
      'sanitize_callback' => 'esc_url_raw'
    )
  );
  
  $wp_customize->add_control( 'social[bloglovin]', array(
    'type'     => 'url',
    'priority' => 20,
    'section'  => 'social',
    'label'    => esc_html__( 'Bloglovin', 'the-lifestyle' ),
  ) );
  
  $wp_customize->add_setting( 'social[instagram]',
    array(
      'default' => '',
      'sanitize_callback' => 'esc_url_raw'
    )
  );
  
  $wp_customize->add_control( 'social[instagram]', array(
    'type'     => 'url',
    'priority' => 25,
    'section'  => 'social',
    'label'    => esc_html__( 'Instagram', 'the-lifestyle' ),
  ) );
  
  $wp_customize->add_setting( 'social[pinterest]',
    array(
      'default' => '',
      'sanitize_callback' => 'esc_url_raw'
    )
  );
  
  $wp_customize->add_control( 'social[pinterest]', array(
    'type'     => 'url',
    'priority' => 30,
    'section'  => 'social',
    'label'    => esc_html__( 'Pinterest', 'the-lifestyle' ),
  ) );
  
  $wp_customize->add_setting( 'social[linkedin]',
    array(
      'default' => '',
      'sanitize_callback' => 'esc_url_raw'
    )
  );
  
  $wp_customize->add_control( 'social[linkedin]', array(
    'type'     => 'url',
    'priority' => 35,
    'section'  => 'social',
    'label'    => esc_html__( 'LinkedIn', 'the-lifestyle' ),
  ) );
  
  $wp_customize->add_setting( 'social[flickr]',
    array(
      'default' => '',
      'sanitize_callback' => 'esc_url_raw'
    )
  );
  
  $wp_customize->add_control( 'social[flickr]', array(
    'type'     => 'url',
    'priority' => 40,
    'section'  => 'social',
    'label'    => esc_html__( 'Flickr', 'the-lifestyle' ),
  ) );
  
  $wp_customize->add_setting( 'social[medium]',
    array(
      'default' => '',
      'sanitize_callback' => 'esc_url_raw'
    )
  );
  
  $wp_customize->add_control( 'social[medium]', array(
    'type'     => 'url',
    'priority' => 45,
    'section'  => 'social',
    'label'    => esc_html__( 'Medium', 'the-lifestyle' ),
  ) );
  
  $wp_customize->add_setting( 'social[vkontakte]',
    array(
      'default' => '',
      'sanitize_callback' => 'esc_url_raw'
    )
  );
  
  $wp_customize->add_control( 'social[vkontakte]', array(
    'type'     => 'url',
    'priority' => 50,
    'section'  => 'social',
    'label'    => esc_html__( 'Vkontakte', 'the-lifestyle' ),
  ) );
  
  $wp_customize->add_setting( 'social[f500px]',
    array(
      'default' => '',
      'sanitize_callback' => 'esc_url_raw'
    )
  );
  
  $wp_customize->add_control( 'social[f500px]', array(
    'type'     => 'url',
    'priority' => 55,
    'section'  => 'social',
    'label'    => esc_html__( '500px', 'the-lifestyle' ),
  ) );
  
  $wp_customize->add_setting( 'social[tumblr]',
    array(
      'default' => '',
      'sanitize_callback' => 'esc_url_raw'
    )
  );
  
  $wp_customize->add_control( 'social[tumblr]', array(
    'type'     => 'url',
    'priority' => 60,
    'section'  => 'social',
    'label'    => esc_html__( 'Tumblr', 'the-lifestyle' ),
  ) );
  
  $wp_customize->add_setting( 'social[dribbble]',
    array(
      'default' => '',
      'sanitize_callback' => 'esc_url_raw'
    )
  );
  
  $wp_customize->add_control( 'social[dribbble]', array(
    'type'     => 'url',
    'priority' => 65,
    'section'  => 'social',
    'label'    => esc_html__( 'Dribbble', 'the-lifestyle' ),
  ) );
  
  $wp_customize->add_setting( 'social[behance]',
    array(
      'default' => '',
      'sanitize_callback' => 'esc_url_raw'
    )
  );
  
  $wp_customize->add_control( 'social[behance]', array(
    'type'     => 'url',
    'priority' => 70,
    'section'  => 'social',
    'label'    => esc_html__( 'Behance', 'the-lifestyle' ),
  ) );
  
  $wp_customize->add_setting( 'social[youtube]',
    array(
      'default' => '',
      'sanitize_callback' => 'esc_url_raw'
    )
  );
  
  $wp_customize->add_control( 'social[youtube]', array(
    'type'     => 'url',
    'priority' => 75,
    'section'  => 'social',
    'label'    => esc_html__( 'YouTube', 'the-lifestyle' ),
  ) );
  
  $wp_customize->add_setting( 'social[vimeo]',
    array(
      'default' => '',
      'sanitize_callback' => 'esc_url_raw'
    )
  );
  
  $wp_customize->add_control( 'social[vimeo]', array(
    'type'     => 'url',
    'priority' => 80,
    'section'  => 'social',
    'label'    => esc_html__( 'Vimeo', 'the-lifestyle' ),
  ) );
  
  $wp_customize->add_setting( 'social[github]',
    array(
      'default' => '',
      'sanitize_callback' => 'esc_url_raw'
    )
  );
  
  $wp_customize->add_control( 'social[github]', array(
    'type'     => 'url',
    'priority' => 85,
    'section'  => 'social',
    'label'    => esc_html__( 'Github', 'the-lifestyle' ),
  ) );
  
  $wp_customize->add_setting( 'social[soundcloud]',
    array(
      'default' => '',
      'sanitize_callback' => 'esc_url_raw'
    )
  );
  
  $wp_customize->add_control( 'social[soundcloud]', array(
    'type'     => 'url',
    'priority' => 90,
    'section'  => 'social',
    'label'    => esc_html__( 'SoundCloud', 'the-lifestyle' ),
  ) );
  
  $wp_customize->add_setting( 'social[rss]',
    array(
      'default' => '',
      'sanitize_callback' => 'esc_url_raw'
    )
  );
  
  $wp_customize->add_control( 'social[rss]', array(
    'type'     => 'url',
    'priority' => 95,
    'section'  => 'social',
    'label'    => esc_html__( 'Rss', 'the-lifestyle' ),
  ) );

  $wp_customize->add_setting( 'social[etsy]',
    array(
      'default' => '',
      'sanitize_callback' => 'esc_url_raw'
    )
  );
  
  $wp_customize->add_control( 'social[etsy]', array(
    'type'     => 'url',
    'priority' => 100,
    'section'  => 'social',
    'label'    => esc_html__( 'Etsy', 'the-lifestyle' ),
  ) );

  $wp_customize->add_setting( 'social[steam]',
    array(
      'default' => '',
      'sanitize_callback' => 'esc_url_raw'
    )
  );
  
  $wp_customize->add_control( 'social[steam]', array(
    'type'     => 'url',
    'priority' => 105,
    'section'  => 'social',
    'label'    => esc_html__( 'Steam', 'the-lifestyle' ),
  ) );

  $wp_customize->add_setting( 'social[snapchat]',
    array(
      'default' => '',
      'sanitize_callback' => 'esc_url_raw'
    )
  );
  
  $wp_customize->add_control( 'social[snapchat]', array(
    'type'     => 'url',
    'priority' => 110,
    'section'  => 'social',
    'label'    => esc_html__( 'Snapchat', 'the-lifestyle' ),
  ) );

  $wp_customize->add_setting( 'social[twitch]',
    array(
      'default' => '',
      'sanitize_callback' => 'esc_url_raw'
    )
  );
  
  $wp_customize->add_control( 'social[twitch]', array(
    'type'     => 'url',
    'priority' => 115,
    'section'  => 'social',
    'label'    => esc_html__( 'Twitch', 'the-lifestyle' ),
  ) );

  $wp_customize->add_setting( 'social[quora]',
    array(
      'default' => '',
      'sanitize_callback' => 'esc_url_raw'
    )
  );
  
  $wp_customize->add_control( 'social[quora]', array(
    'type'     => 'url',
    'priority' => 120,
    'section'  => 'social',
    'label'    => esc_html__( 'Quora', 'the-lifestyle' ),
  ) );

  $wp_customize->add_setting( 'social[odnoklassniki]',
    array(
      'default' => '',
      'sanitize_callback' => 'esc_url_raw'
    )
  );
  
  $wp_customize->add_control( 'social[odnoklassniki]', array(
    'type'     => 'url',
    'priority' => 125,
    'section'  => 'social',
    'label'    => esc_html__( 'Odnoklassniki', 'the-lifestyle' ),
  ) );

  $wp_customize->add_setting( 'social[reddit]',
    array(
      'default' => '',
      'sanitize_callback' => 'esc_url_raw'
    )
  );
  
  $wp_customize->add_control( 'social[reddit]', array(
    'type'     => 'url',
    'priority' => 130,
    'section'  => 'social',
    'label'    => esc_html__( 'Reddit', 'the-lifestyle' ),
  ) );

  $wp_customize->add_setting( 'social[xing]',
    array(
      'default' => '',
      'sanitize_callback' => 'esc_url_raw'
    )
  );
  
  $wp_customize->add_control( 'social[xing]', array(
    'type'     => 'url',
    'priority' => 135,
    'section'  => 'social',
    'label'    => esc_html__( 'Xing', 'the-lifestyle' ),
  ) );
  
  $wp_customize->add_setting( 'social[weibo]',
    array(
      'default' => '',
      'sanitize_callback' => 'esc_url_raw'
    )
  );

  $wp_customize->add_control( 'social[weibo]', array(
    'type'     => 'url',
    'priority' => 135,
    'section'  => 'social',
    'label'    => esc_html__( 'Weibo', 'the-lifestyle' ),
  ) );

  $wp_customize->add_setting( 'social[renren]',
    array(
      'default' => '',
      'sanitize_callback' => 'esc_url_raw'
    )
  );

  $wp_customize->add_control( 'social[renren]', array(
    'type'     => 'url',
    'priority' => 140,
    'section'  => 'social',
    'label'    => esc_html__( 'Renren', 'the-lifestyle' ),
  ) );
  
  $wp_customize->add_setting( 'social[email]',
    array(
      'default' => '',
      'sanitize_callback' => 'the_lifestyle_email_sanitize'
    )
  );
  
  $wp_customize->add_setting( 'social[email]',
    array(
      'default' => '',
      'sanitize_callback' => 'the_lifestyle_email_sanitize'
    )
  );
  
  $wp_customize->add_control( 'social[email]', array(
    'type'     => 'url',
    'priority' => 150,
    'section'  => 'social',
    'label'    => esc_html__( 'Email', 'the-lifestyle' ),
  ) );
   
  /*
   * Post Options
   */
  $wp_customize->add_section( 'post_options',
    array(
      'title' => esc_html__( 'Post Options', 'the-lifestyle' )
    )
  ); 
  
  $wp_customize->add_setting( 'display_categories',
    array(
      'default' => 1,
      'sanitize_callback' => 'the_lifestyle_checkbox_sanitize',
    )
  );
  
  $wp_customize->add_control( 'display_categories', array(
    'type'     => 'checkbox',
    'priority' => 0,
    'label'    => esc_html__( 'Display category', 'the-lifestyle' ),
    'section'  => 'post_options',
  ) );
  
  $wp_customize->add_setting( 'display_date',
    array(
      'default' => 1,
      'sanitize_callback' => 'the_lifestyle_checkbox_sanitize',
    )
  );
  
  $wp_customize->add_control( 'display_date', array(
    'type'     => 'checkbox',
    'priority' => 0,
    'label'    => esc_html__( 'Display post date', 'the-lifestyle' ),
    'section'  => 'post_options',
  ) );
  
  $wp_customize->add_setting( 'display_tags_list',
    array(
      'default' => 1,
      'sanitize_callback' => 'the_lifestyle_checkbox_sanitize',
    )
  );
  
  $wp_customize->add_control( 'display_tags_list', array(
    'type'     => 'checkbox',
    'priority' => 0,
    'label'    => esc_html__( 'Display tags', 'the-lifestyle' ),
    'section'  => 'post_options',
  ) );
  
  $wp_customize->add_setting( 'display_share_buttons',
    array(
      'default' => 1,
      'sanitize_callback' => 'the_lifestyle_checkbox_sanitize',
    )
  );
  
  $wp_customize->add_control( 'display_share_buttons', array(
    'type'     => 'checkbox',
    'priority' => 0,
    'label'    => esc_html__( 'Display share buttons', 'the-lifestyle' ),
    'section'  => 'post_options',
  ) );
  
  $wp_customize->add_setting( 'display_author',
    array(
      'default' => 1,
      'sanitize_callback' => 'the_lifestyle_checkbox_sanitize',
    )
  );
  
  $wp_customize->add_control( 'display_author', array(
    'type'     => 'checkbox',
    'priority' => 0,
    'label'    => esc_html__( 'Display author name', 'the-lifestyle' ),
    'section'  => 'post_options'
  ) );
  
  /*
   * Page Options
   */
  $wp_customize->add_section( 'page_options',
    array(
      'title' => esc_html__( 'Page Options', 'the-lifestyle' )
    )
  ); 
  
  $wp_customize->add_setting( 'display_page_share_buttons',
    array(
      'default' => 1,
      'sanitize_callback' => 'the_lifestyle_checkbox_sanitize',
    )
  );
  
  $wp_customize->add_control( 'display_page_share_buttons', array(
    'type'     => 'checkbox',
    'priority' => 0,
    'label'    => esc_html__( 'Display share buttons', 'the-lifestyle' ),
    'section'  => 'page_options',
  ) );

  /*
   * Portfolio Options
   */

  if( post_type_exists( 'portfolio' ) ) {

    $wp_customize->add_section( 'portfolio_options',
      array(
        'title' => esc_html__( 'Portfolio Options', 'the-lifestyle' )
      )
    ); 
    
    $wp_customize->add_setting( 'display_portfolio_category',
      array(
        'default' => 1,
        'sanitize_callback' => 'the_lifestyle_checkbox_sanitize',
      )
    );
    
    $wp_customize->add_control( 'display_portfolio_category', array(
      'type'     => 'checkbox',
      'priority' => 0,
      'label'    => esc_html__( 'Display category', 'the-lifestyle' ),
      'section'  => 'portfolio_options'
    ) );

    $wp_customize->add_setting( 'display_portfolio_featured_image',
      array(
        'default' => 1,
        'sanitize_callback' => 'the_lifestyle_checkbox_sanitize',
      )
    );
    
    $wp_customize->add_control( 'display_portfolio_featured_image', array(
      'type'     => 'checkbox',
      'priority' => 0,
      'label'    => esc_html__( 'Display featured image', 'the-lifestyle' ),
      'section'  => 'portfolio_options'
    ) );

    $wp_customize->add_setting( 'display_portfolio_tags',
      array(
        'default' => 1,
        'sanitize_callback' => 'the_lifestyle_checkbox_sanitize',
      )
    );
    
    $wp_customize->add_control( 'display_portfolio_tags', array(
      'type'     => 'checkbox',
      'priority' => 0,
      'label'    => esc_html__( 'Display tags', 'the-lifestyle' ),
      'section'  => 'portfolio_options'
    ) );

    $wp_customize->add_setting( 'display_portfolio_share_buttons',
      array(
        'default' => 1,
        'sanitize_callback' => 'the_lifestyle_checkbox_sanitize',
      )
    );
    
    $wp_customize->add_control( 'display_portfolio_share_buttons', array(
      'type'     => 'checkbox',
      'priority' => 0,
      'label'    => esc_html__( 'Display share buttons', 'the-lifestyle' ),
      'section'  => 'portfolio_options'
    ) );

    $wp_customize->add_setting( 'display_portfolio_comments',
      array(
        'default' => 0,
        'sanitize_callback' => 'the_lifestyle_checkbox_sanitize',
      )
    );
    
    $wp_customize->add_control( 'display_portfolio_comments', array(
      'type'     => 'checkbox',
      'priority' => 0,
      'label'    => esc_html__( 'Display comments', 'the-lifestyle' ),
      'section'  => 'portfolio_options'
    ) );

  }
  
  /*
   * Footer
   */  
  $wp_customize->add_section( 'footer',
    array(
      'title' => esc_html__( 'Footer', 'the-lifestyle' )
    )
  ); 

  $wp_customize->add_setting(
    'copyright',
    array(
      'default' => '',
      'sanitize_callback' => 'the_lifestyle_textarea_sanitize',
    )
  );
 
  $wp_customize->add_control(
      'copyright',
      array(
        'type'    => 'textarea',
        'label'   => esc_html__( 'Copyright', 'the-lifestyle' ),
        'description' => esc_html__( 'You may use these HTML tags and attributes: a[href,title], p, b, strong, em, i, br, span, img[src, alt, title]', 'the-lifestyle' ),
        'section' => 'footer',
      )
  );
	
  /*
   * Other Options
   */    
  $wp_customize->add_section( 'other_options',
    array(
      'title' => esc_html__( 'Other Options', 'the-lifestyle' )
    )
  ); 
}
add_action( 'customize_register', 'the_lifestyle_customize_register' );

/**
 * Binds JS handlers to make the Customizer preview reload changes asynchronously.
 *
 * @since The Lifestyle 1.0
 */
function the_lifestyle_customize_preview_js() {
	wp_enqueue_script( 'the-lifestyle-customize-preview', get_template_directory_uri() . '/assets/js/admin/customize-preview.js', array( 'customize-preview' ), '20171504', true );
}
add_action( 'customize_preview_init', 'the_lifestyle_customize_preview_js' );

if ( ! function_exists( 'the_lifestyle_textarea_sanitize' ) ) :
  /**
   * Sanitization callback for textarea field.
   *
   * @since The Lifestyle 1.0
   * @return string Textarea value.
   */
  function the_lifestyle_textarea_sanitize( $value ) {
    if ( !current_user_can('unfiltered_html') )
			$value  = stripslashes( wp_filter_post_kses( addslashes( $value ) ) ); // wp_filter_post_kses() expects slashed

    return $value;
  }
endif;

if ( ! function_exists( 'the_lifestyle_checkbox_sanitize' ) ) :
  /**
   * Sanitization callback for checkbox.
   *
   * @since The Lifestyle 1.0
   */
  function the_lifestyle_checkbox_sanitize( $value ) {
    if ( $value == 1 ) {
        return 1;
    } else {
        return '';
    }
  }
endif;

if ( ! function_exists( 'the_lifestyle_email_sanitize' ) ) :
  /**
   * Sanitization callback for email field.
   *
   * @since The Lifestyle 1.0
   * @return string|null Verified email adress or null.
   */
  function the_lifestyle_email_sanitize( $value ) {
    return ( is_email( $value ) ) ? $value : '';
  }
endif;

if ( ! function_exists( 'the_lifestyle_logo_size_sanitize' ) ) :
  /**
   * Sanitization callback for width range slider.
   *
   * @since The Lifestyle 1.0
   */
  function the_lifestyle_logo_size_sanitize( $value ) {
    if ( is_numeric( $value ) && $value >= 50 && $value <= 900 )
      return $value;

    return 200;
  }
endif;

if ( ! function_exists( 'the_lifestyle_blackout_sanitize' ) ) :
  /**
   * Sanitization callback for opacity range slider.
   *
   * @since The Lifestyle 1.0
   */
  function the_lifestyle_blackout_sanitize( $value ) {
    if ( is_numeric( $value ) && $value >= 0 && $value <= 1 )
      return $value;

    return 0.5;
  }
endif;

if ( ! function_exists( 'the_lifestyle_related_by_sanitize' ) ) :
  /**
   * Sanitization callback for "related by" select.
   *
   * @since The Lifestyle 1.0
   */
  function the_lifestyle_related_by_sanitize( $value ) {
    $related_bys = array( 'category', 'tags', 'none' );
    if ( ! in_array( $value, $related_bys ) ) {
      $value = 'none';
    }

    return $value;
  }
endif;
?>