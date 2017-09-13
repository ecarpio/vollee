$(function(){
	console.log('test')


	var inputBox = $('input[type=text], input[type=email], input[type=password]')

	// Form Effect
	inputBox.on('focus', function(){
		$(this).addClass('active');
		$(this).prev('label').addClass('active');
		
	})

	inputBox.on('blur', function(){
		
		console.log($(this).val())

		if ($(this).val()) {
			console.log('hasValue')
		} else {
			$(this).removeClass('active');
			$(this).prev('label').removeClass('active');

			console.log('novalue')
		}

	})

	

})