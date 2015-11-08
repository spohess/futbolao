<?php
namespace App\Providers;

use Illuminate\Support\ServiceProvider;

class HelperServiceProvider extends ServiceProvider {
	
	/**
	 * Define the routes for the application.
	 *
	 * @param \Illuminate\Routing\Router $router        	
	 * @return void
	 */
	public function register() {
		foreach ( glob ( app_path () . '/Helpers/*.php' ) as $filename ) {
			require_once ($filename);
		}
	}
}