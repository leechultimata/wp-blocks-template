<?php
/**
 * Plugin Name:       My Blocks Plugin
 * Description:       Блоки для сайта
 * Requires PHP:      7.0
 * Version:           0.1.0
 * Author:            Igor Melekhov
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       my-blocks
 */
function myblocks_init() {
	register_block_type( __DIR__ . '/build/text-block' );
	register_block_type( __DIR__ . '/build/image-block' );
	register_block_type( __DIR__ . '/build/two-cols' );
}
add_action( 'init', 'myblocks_init' );