<?php
/**
 * The header for our theme
 *
 * This is the template that displays all of the <head> section and everything up until <div id="content">
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package WordPress
 * @subpackage The Lifestyle
 * @since 1.0
 * @version 1.0
 */
?><!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
  <meta charset="<?php bloginfo( 'charset' ); ?>">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="profile" href="http://gmpg.org/xfn/11">

  <?php wp_head(); ?>
</head>

<body <?php body_class(); ?>>

<div id="page" class="hfeed site">
  <header id="musthead" class="site-header">
    <div class="container">
      <div class="site-identity">
        <?php the_lifestyle_site_identity(); ?>

        <?php the_lifestyle_social_profiles(); ?>
      </div>
    </div>
  </header>

  <?php 
    $primary_navigation = wp_nav_menu( array( 
      'theme_location'  => 'primary',
      'menu_class'      => 'nav-menu',
      'container_class' => 'menu-container',
      'echo'            => false,
      'item_spacing'    => 'discard'
    ) ); 

    if( $primary_navigation ) {
      printf( '<nav id="primary-navigation" class="primary-navigation"><a href="#" id="nav-toggle" class="nav-toggle"><i class="menu-icon"></i>%s</a>%s</nav>', esc_html__( 'Menu', 'the-lifestyle' ), $primary_navigation ); 
    }
  ?>
  
  <div class="container">
    <div id="content" class="site-content">

    <?php 
    if( is_front_page() && get_theme_mod( 'display_welcome_text_only_on_homepage', 1 ) ) {
      the_lifestyle_welcome_text( '<div class="welcome-text">', '</div>' );
    } elseif( ! get_theme_mod( 'display_welcome_text_only_on_homepage', 1 ) ) {
      the_lifestyle_welcome_text( '<div class="welcome-text">', '</div>' ); 
    }
    ?>
