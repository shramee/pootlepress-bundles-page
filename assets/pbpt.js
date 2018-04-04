jQuery( function ( $ ) {
	var $tabs = $( '.pricing-tabs' ), sitesLicense = 1;

	$( '.pricing-tabs-a a' ).click( function ( e ) {
		var $t = $( this );
		$t.addClass( 'active' ).siblings().removeClass( 'active' );
		e.preventDefault();
		$tabs.hide();
		$tabs.filter( $t.attr( 'href' ) ).show();
		sitesLicense = $t.data( 'sites-license' );
	} ).filter( ':first-of-type' ).click();

	$( '.ecomm-bundle' ).on( 'click', '.button', function ( e ) {
		FS.Checkout.configure( {
			plugin_id: '1887',
			plan_id: '2788',
			public_key: 'pk_e8c600d38f23c090bcdce65c8fab5',
			image: 'https://your-plugin-site.com/logo-100x100.png'
		} ).open( {
			name: 'PPB and SFP',
			licenses: sitesLicense,
			// You can consume the response for after purchase logic.
			purchaseCompleted: function ( response ) {
				// The logic here will be executed immediately after the purchase confirmation.                                // alert(response.user.email);
			},
			success: function ( response ) {
				// The logic here will be executed after the customer closes the checkout, after a successful purchase.                                // alert(response.user.email);
			}
		} );
		e.preventDefault();
	} );
	$( '.design-bundle' ).on( 'click', '.button', function ( e ) {
		FS.Checkout.configure( {
			plugin_id: '1939',
			plan_id: '2879',
			public_key: 'pk_3cf0993f839aa420f8a420d5c6ea5',
			image: 'https://your-plugin-site.com/logo-100x100.png'
		} ).open( {
			name: 'PPB and 18TP',
			licenses: sitesLicense,
			// You can consume the response for after purchase logic.
			purchaseCompleted: function ( response ) {
				// The logic here will be executed immediately after the purchase confirmation.                                // alert(response.user.email);
			},
			success: function ( response ) {
				// The logic here will be executed after the customer closes the checkout, after a successful purchase.                                // alert(response.user.email);
			}
		} );
		e.preventDefault();
	} );
	$( '.pro-bundle' ).on( 'click', '.button', function ( e ) {
		FS.Checkout.configure( {
			plugin_id: '1940',
			plan_id: '2880',
			public_key: 'pk_7587c7d9ed93da31650a8f6b1a417',
			image: 'https://your-plugin-site.com/logo-100x100.png'
		} ).open( {
			name: 'PPB, 18TP and SFP',
			licenses: sitesLicense,
			// You can consume the response for after purchase logic.
			purchaseCompleted: function ( response ) {
				// The logic here will be executed immediately after the purchase confirmation.                                // alert(response.user.email);
			},
			success: function ( response ) {
				// The logic here will be executed after the customer closes the checkout, after a successful purchase.                                // alert(response.user.email);
			}
		} );
		e.preventDefault();
	} );

	$( "#slide1, #slide2" ).mousemove( function ( event ) {
		var $e = $( ".wilson-eye" );
		var x = $e.offset().left + $e.width() / 2;
		var y = $e.offset().top + $e.height() / 2;
		var rad = Math.atan2( event.pageX - x, event.pageY - y );
		var rot = rad * 180 / Math.PI * - 1 + 180;
		$e.css( {
			'-webkit-transform': 'rotate(' + rot + 'deg)',
			'-moz-transform': 'rotate(' + rot + 'deg)',
			'-ms-transform': 'rotate(' + rot + 'deg)',
			'transform': 'rotate(' + rot + 'deg)'
		} );
	} );
} );
