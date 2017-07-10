$(function(){
	console.log('test')
function fixHeight(){
	var elementHeights = $('.testimonials .col p').map(function() {
    	return $(this).height();
  	}).get();

	var maxHeight = Math.max.apply(null, elementHeights);

	 $('.testimonials .col').height(maxHeight + 50); }

	fixHeight();

	$( window ).resize(function() { 
		fixHeight();
	})
})