$(function(){
	var inputBox = $('input[type=text], input[type=email], input[type=password]')

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
		// highlight: function()
	 //    {	
	 //    	$('input').prev('label').addClass('error-label');
	 //     	console.log( $('input.error') )
	 //    }, 
	 //    unhighlight: function() {
	 //      $('input').prev('label.error').removeClass('error-label');
	 //    }
	});

	// $('#validateForm').on('click', function(){

	// 	console.log( inputBox.attr('class') )

	//    	if( inputBox.hasClass('error') ){
	//    		$(this).prev('label').addClass('error');
	//    		console.log(this + 'adsadsad')
	//    	}
	// })


    // var createAllErrors = function() {
    //     var form = $(this);
    //     var errorList = $('ul.errorMessages', form);
        
    //     var showAllErrorMessages = function() {
    //         errorList.empty();
            
    //         //Find all invalid fields within the form.
    //         form.find(':invalid').each(function(index, node) {

    //             //Find the field's corresponding label
    //             var label = $('label[for=' + node.id + ']');

    //             //Opera incorrectly does not fill the validationMessage property.
    //             var message = node.validationMessage || 'Invalid value.';
    //             errorList
    //                 .show()
    //                 .append('<li><span>' + label.html() + '</span> ' + message + '</li>');
    //         });
    //     };
        
    //     $('input[type=submit], button', form).on('click', showAllErrorMessages);
    //     $('input[type=text]', form).on('keypress', function(event) {
    //         //keyCode 13 is Enter
    //         if (event.keyCode == 13) {
    //             showAllErrorMessages();
    //         }
    //     });
    // };
    
   

})