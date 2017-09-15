$(function(){
	var inputBox = $('input[type=text], input[type=email], input[type=password], select')

	// Form Effect
	inputBox.on('focus', function(){
		$(this).addClass('active');
		$(this).next('label').addClass('active');

		console.log( $(this).next('label') )

	})

	inputBox.on('blur', function(){
		if ($(this).val()) {
		} else {
			$(this).removeClass('active');
			$(this).next('label').removeClass('active');
		}
	})

	$('form').validate({
		errorElement: "em",
		errorPlacement: function(error, element) {  },
	});


    $(".selectAll").change(function() {
	    if(this.checked) {
	    	console.log('check')
	        $("input[type='checkbox']").attr('checked', true).parent().addClass('active');
        	return false;
	    } else {
	    	$("table tr td input[type='checkbox']").attr('checked', false).parent().removeClass('active');
	    }
	});
    
})