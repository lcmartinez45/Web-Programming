/*
Name: Lillian Martinez
Coding08 contact.js
Purpose: Validation js for contact form.
*/
"use strict";

function clearForm(){
	$('#name').val('');
	$('#remail1').val(''); 
	$('#remail2').val('');
	$('#subject').val('');
	$('#message').val(''); 
}

function validation(){
	
		var errorMessage = '';
        
        //put trimmed and cleaned values into vars    
        var name = $('#name').val().trim();
        var remail1 = $('#remail1').val().trim();
        var remail2 = $('#remail2').val().trim();
        var subject = $('#subject').val().trim();
        var message = $('#message').val().trim();

        //put trimmed values back into fields
        $('#name').val(name);
        $('#remail1').val(remail1);
        $('#remail2').val(remail2);
        $('#subject').val(subject);
        $('#message').val(message);
            
		if(name == ''){
		errorMessage += 'Name field cannot be empty.<br>';
		}
		if(remail1 == ''){
			errorMessage += 'Email cannot be empty.<br>';
		}
		if(!validEmail(remail1)){
		errorMessage += 'Not a valid Email.<br>';
		}
		if(remail1 != remail2){
		errorMessage += 'Email addresses must match.<br>';
		}
		if(subject == ''){
		errorMessage += 'Subject cannot be empty.<br>';
		}
		if(message == ''){
		errorMessage += 'Message cannot be empty.<br>';
		}
			$('#msg').html();
			
			
		if(errorMessage.length === 0){
			$('#msg').html('Sending, please wait...');

			$.ajax({
				url: 'sendemail',
				type: 'POST',
				data:{name: name, remail1: remail1, subject: subject, message: message},
				success: function(val){
					console.log(val); 
					if(val === 'okay'){
						$('#msg').html('Sent!');
						clearForm();
					}else{
						$('#msg').html('Mail server error');
				    }
				}, error: function(){
				$('#msg').html('Mail server error (code 2)'); }				
		});
		}else{
			errorMessage = 'There are Errors!<br>' + errorMessage;
			$('#msg').html(errorMessage);
		}
}
		
function validEmail(email){
	
	var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

	return re.test(email); 
}

$('#contact-send').click(function(){
	validation();
	return true;
});

$('#contact-clear').click(function() {
	clearForm();
	return true;
});

