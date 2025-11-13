<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://codex.wordpress.org/Editing_wp-config.php
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'bleapblog' );

/** MySQL database username */
define( 'DB_USER', 'root' );

/** MySQL database password */
define( 'DB_PASSWORD', 'H6sohuD2rKKVCDTo' );

/** MySQL hostname */
define( 'DB_HOST', 'localhost' );

/** Database Charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The Database Collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         'wzxw:d~aCsv=v>gc)ALtgsGGjbM1ag?,FOh0`V:Co|.2k6D%gn1.Z*PJphoJ*`?I' );
define( 'SECURE_AUTH_KEY',  ' Z@(#)==pD&1+;dLv<%T!.F9*uw16_e-8eX6lH;%@K_Mt$`_4lTORQY0/HqD`ql{' );
define( 'LOGGED_IN_KEY',    '{aV9#U2#@UpNtQye$ri8$Orngvc6yD$A?R$TrvM2^I!{7qNr7iQc*=luwp]g$/qp' );
define( 'NONCE_KEY',        'YPDk(q>uyI6W^Bb DOjF^,A@Sx)TEj4~SH<_dlQ=!wl7PiZ4D~`a*%P?D4=5@u}o' );
define( 'AUTH_SALT',        'dQf[8eVHcU`5(*sqL@HRV7>%zdW%J^S[tSR E[@;EUs{us8+WO&S,R%{(0;(Erqs' );
define( 'SECURE_AUTH_SALT', 'SbtpRG~QWPwcN9WH~LCb3ZduHHkp]3h,lOpMKK9MVJO|2d.jTe<^KTC!jrk$t( Q' );
define( 'LOGGED_IN_SALT',   '18:N$?XYc0MWdRUKgC+}yX,|/AT3Mf7,/6q*:F@B!jZD}br^C<I91mUK0WmM@!fF' );
define( 'NONCE_SALT',       'FW]^o;U.(|6v55|j2/g(rc=_u:-;qbCuz%WIZ1|yjhrH.H;$mLzyyn+,`4Z5N|#X' );

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'bbl_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the Codex.
 *
 * @link https://codex.wordpress.org/Debugging_in_WordPress
 */
define( 'WP_DEBUG', false );

/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', dirname( __FILE__ ) . '/' );
}

/** Sets up WordPress vars and included files. */
require_once( ABSPATH . 'wp-settings.php' );
define('FS_METHOD', 'direct');
