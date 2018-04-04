<?php
/*
Plugin Name: Pootle bundles page
Description: Pricing table for Pootle
Version: 1.0
Author: Shramee Srivastav
Author URI: http://shramee.com
Author Email: shramee.srivastav@gmail.com
*/

define( 'PBPTDIR', plugin_dir_url( __FILE__ ) );
define( 'PBPTDIR_VER', 1 );

add_action( 'init', function () {
	remove_filter( 'get_the_excerpt', 'woo_remove_dropcap_from_excerpts' );
} );

function pbpt_init() {
	add_shortcode( 'pootle-bundles-page', 'pbpt_shortcode' );
}

function pbpt_shortcode() {
	ob_start();
	include 'tpl/page.php';
	$data = ob_get_clean();

	return $data;

}

add_action( 'init', 'pbpt_init' );