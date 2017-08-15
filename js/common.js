 $(document).ready(function(){    
	$('.image-ajax-popup').magnificPopup({
    	type: 'image',
    	mainClass: 'mfp-with-zoom mfp-img-mobile',
    	gallery: {
			enabled: true
		},
		zoom: {
			enabled: true,
			duration: 300, // don't foget to change the duration also in CSS
			opener: function(element) {
				return element.find('img');
			}
		}
	});
})