jQuery( function ( $ ) {
	var $tabs = $( '.pricing-tabs' ), sitesLicense = 1;


	$( '[name="licensed-site"]' ).change( function ( e ) {
		var $t = $( this );
		sitesLicense = $t.val();
		$t.closest( 'label' ).addClass( 'active' ).siblings().removeClass( 'active' );
		e.preventDefault();
		$tabs.hide();
		$tabs.filter( '#license-' + sitesLicense ).show();
	} ).filter( ':first' ).prop( 'checked', true ).change();

	$( '#slide1' ).find( '.fa-chevron-down' ).click( function ( e ) {
		$( 'html, body' ).animate( {
			scrollTop: window.innerHeight
		}, 'slow' );
	} );
	$( '.ecomm-bundle' ).on( 'click', '.button', function ( e ) {
		FS.Checkout.configure( {
			plugin_id: '1887',
			plan_id: '2788',
			public_key: 'pk_e8c600d38f23c090bcdce65c8fab5',
			subtitle: 'Pootlepress Ecommerce bundle',
			//image: 'https://your-plugin-site.com/logo-100x100.png'
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
	$( '.blocks-bundle' ).on( 'click', '.button', function ( e ) {
		FS.Checkout.configure( {
			plugin_id: '4040',
			plan_id: '6526',
			public_key: 'pk_9658533a196daf21269879627e07a',
			subtitle: 'Pootlepress Blocks bundle',
			//image: 'https://your-plugin-site.com/logo-100x100.png'
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
			subtitle: 'Pootlepress Pro bundle',
			//image: 'https://your-plugin-site.com/logo-100x100.png'
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
