<?php

if ( ! function_exists( 'pootlepress_bundles_products_table' ) ) {
	/**
	 * @param $pricing array
	 * 'label' => Label to show
	 * 'ecomm' => Ecommerce bundle price
	 * 'design' => Design bundle price
	 * 'pro' => Pro bundle price
	 */
	function pootlepress_bundles_products_table( $pricing ) {

		$plans = [
			'ecomm'  => [
				'label'    => '<i class="fa fa-shopping-bag"></i> Ecommerce bundle',
				'features' => [ 'ppb', 'sfp', 'sfb', 'wbk', ],
			],
			'design' => [
				'label'    => '<i class="fa fa-paint-brush"></i> Designer bundle',
				'features' => [ 'ppb', '18p', ],
			],
			'pro'    => [
				'label'    => '<i class="fa fa-bolt"></i> Professional bundle',
				'features' => [ 'ppb', 'sfp', 'sfb', 'wbk', '18p', ],
			],
		];

		$features = [
			'ppb' => '<p><img class="aligncenter size-full wp-image-35151"
							src="https://www.pootlepress.com/wp-content/uploads/2016/04/pootle-pagebuilder-pro.png"
							alt="pootle pagebuilder pro" width="599" height="121"
							data-mce-src="https://www.pootlepress.com/wp-content/uploads/2016/04/pootle-pagebuilder-pro.png"></p>',

			'wbk' => '<p><span style="font-family: Lobster, cursive">Woo</span>Builder</p>',

			'sfp' => '<p>Storefront <span style="font-family: Lobster, cursive">Pro</span></p>',

			'sfb' => '<p>Storefront <span style="font-family: Lobster, cursive">Blocks</span></p>',

			'18p' => '<p>18tags <span style="font-family: Lobster, cursive">Pro</span></p>',

		];

		foreach ( $plans as $id => $info ) {
			?>
			<div class="<?php echo $id; ?>-bundle bundle-features">

				<h3><?php echo $info['label'] ?></h3>

				<p><span class="price"><?php echo $pricing[ $id ]; ?></span></p>

				<p class="license-description">
					<span class="site-count"><?php echo $pricing['label']; ?></span>
					<?php echo $pricing['label'] === 'Single' ? 'site' : 'sites'; ?></p>

				<?php
				foreach ( $features as $f => $f_html ) {
					if ( in_array( $f, $info['features'] ) ) {
						echo $f_html;
					} else {
						echo '<p><i class="fa fa-close fa-times"></i></p>';
					}
				}
				?>

				<a class="button">Buy now</a>

			</div>
			<?php
		}
	}
}

if ( ! class_exists( 'Pootle_Page_Builder' ) ) {
	?>
	<script src="https://cdnjs.cloudflare.com/ajax/libs/skrollr/0.6.30/skrollr.min.js"></script>
	<script>
		ppbSkrollr = false;
		if ( ! /Android|iPhone|iPad|iPod|BlackBerry/i.test( navigator.userAgent || navigator.vendor || a.opera ) ) {
			ppbSkrollr = skrollr.init( {
				forceHeight    : false,
				smoothScrolling: false,
			} );
		}
	</script>
	<?php
}

?>
<script src="https://checkout.freemius.com/checkout.min.js"></script>
<script src="<?php echo PBPTDIR ?>assets/pbpt.js?v=<?php echo PBPTDIR_VER ?>"></script>

<link href="https://fonts.googleapis.com/css?family=Lobster" rel="stylesheet">
<link rel="stylesheet" href="<?php echo PBPTDIR ?>assets/pbpt.css?v=<?php echo PBPTDIR_VER ?>">

<div id="slide1" class="slide">
	<div class="col-full">

		<h1 data-center="margin: 5vh 0 0;" data-top-bottom="margin: 25vh 0 0;">
			The Pootle<span style="font-family: 'Lobster', cursive">press</span> Bundles</h1>
		<h3 data-center="margin: 3vh 0 0;" data-top-bottom="margin: 7vh 0 0;">Save up to 40% with a Pootle bundle</h3>

		<i class="fa fa-chevron-down" data-center="margin: 3vh auto 0;" data-top-bottom="margin: 5vh auto 0;"></i>

		<i id="cloud1" class="fa fa-cloud"></i>
		<i id="cloud2" class="fa fa-cloud"></i>
		<i id="cloud3" class="fa fa-cloud"></i>
		<i id="cloud4" class="fa fa-cloud"></i>
		<i id="cloud5" class="fa fa-cloud"></i>

		<div data-bottom="bottom: -0.2vh;" data-top-bottom="bottom: -16vh;left: 0vw;" class="wilson">
			<div class="wilson-img">
				<div class="wilson-eye"></div>
				<div class="wilson-eye right"></div>
			</div>
		</div>

		<img class="logo" src="https://www.pootlepress.com/wp-content/uploads/2017/06/pootlepress-logo-website.png"
				 alt="PootlePress">
	</div>
</div>

<div id="slide2" class="slide">

	<div class="col-full">
		<h4 class="license-type-toggle">Licence type:
			<label>
				<input type="radio" name="licensed-site" value="1">Single site
			</label>
			<label>
				<input type="radio" name="licensed-site" value="5">5 Sites
			</label>
			<label>
				<input type="radio" name="licensed-site" value="unlimited">Unlimited Sites
			</label>
		</h4>

		<div id="license-1" class="table pricing-tabs">

			<?php pootlepress_bundles_products_table( [
				'label'  => 'Single',
				'ecomm'  => '$125',
				'design' => '$155',
				'pro'    => '$185',
			] ); ?>

		</div>

		<div id="license-5" class="table pricing-tabs" style="display:none;">

			<?php pootlepress_bundles_products_table( [
				'label'  => 'Five',
				'ecomm'  => '$155',
				'design' => '$200',
				'pro'    => '$259',
			] ); ?>

		</div>

		<div id="license-unlimited" class="table pricing-tabs" style="display:none;">

			<?php pootlepress_bundles_products_table( [
				'label'  => 'Unlimited',
				'ecomm'  => '$260',
				'design' => '$225',
				'pro'    => '$365',
			] ); ?>

		</div>
	</div>
</div>

<script>
	jQuery( function ( $ ) {
		ppbSkrollr.refresh();
		$( window ).resize( function () {
			ppbSkrollr.refresh();
		} );
	} );
</script>
