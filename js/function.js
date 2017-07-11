$(function(){
	console.log('test')
	// Trio Height
	// Fix Column Height
	function fixTrioHeight(){
		var elementHeights = $('.media-trio .col').map(function() {
	    	return $(this).height();
	  	}).get();

		var maxHeight = Math.max.apply(null, elementHeights);

		 $('.media-trio .col').height(maxHeight); 
	}

	fixTrioHeight();



	// Fix Column Height
	function fixHeight(){
		var elementHeights = $('.testimonials .col p').map(function() {
	    	return $(this).height();
	  	}).get();

		var maxHeight = Math.max.apply(null, elementHeights);

		 $('.testimonials .col').height(maxHeight + 50); 
	}

	fixHeight();

	// Fix Image Height
	function fixImgHeight(){
		var elementHeights = $('.product-image').map(function() {
	    	return $(this).height();
	  	}).get();

		var maxHeight = Math.max.apply(null, elementHeights);
		var imgPadding = maxHeight/4
		console.log(maxHeight/4)
		
		$('.product-image.short').css({
			'padding-top': imgPadding - 20,
			'padding-bottom': imgPadding -30

		}); 
	}

	fixImgHeight();

	$( window ).resize(function() { 
		fixHeight();
		fixImgHeight();
		fixTrioHeight()
	})

	$('.displayTableData').on('click', function(){
		$('.product-table').toggleClass('active')
	})

})