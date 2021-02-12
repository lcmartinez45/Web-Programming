/*
Name: Lillian Martinez
Coding03 main.js
Purpose: Validation js for Coding03.
*/

"use strict";

function clearForm() {
	
    /*
     * this function replaces the text in text boxes with empty strings
     * and replaces the message area with an html <br>
     */
    document.getElementById("first-name").value = "";
    document.getElementById("last-name").value = "";
	document.getElementById("remail1").value = "";
    document.getElementById("remail2").value = "";
	document.getElementById("subject").value = "";
    document.getElementById("message").value = "";
	
    /* NOTE: This next line violates the division of concerns rule,
     but it's okay for this assigment. We will fix this later.
     */
	document.getElementById("msg").innerHTML = "<br>";
}

function validate() {
	
    var errorMessage = "";

    //get all the elements into the function
    var fNameInput = document.getElementById("first-name");
    var lNameInput = document.getElementById("last-name");
	var re1Input = document.getElementById("remail1");
	var re2Input = document.getElementById("remail2");
	var subInput = document.getElementById("subject");
    var msgInput = document.getElementById("message");

    //get all the strings in the elements and trim them
    var fname = fNameInput.value.trim();  
	//removes white space, user experience
    var lname = lNameInput.value.trim();
	var remail1 = re1Input.value.trim();
	var remail2 = re2Input.value.trim();
	var sub = subInput.value.trim();
	var message = msgInput.value.trim();

    //put the trimmed versions back into the form for good user experience (UX)
    fNameInput.value = fname; 
	//then puts it back into the form for user experience
    lNameInput.value = lname;
	re1Input.value = remail1;
	re2Input.value = remail2;
	subInput.value = sub;
	msgInput.value = message;

    //test the strings from the form and store the error messages
    if (fname === "") {
        errorMessage += "First name cannot be empty.<br>"; 
		//if it is it sends message to user
    }

    if (lname === "") {
        errorMessage += "Last name cannot be empty.<br>";
    }
	
	if (sub === "") {
        errorMessage += "Subject cannot be empty.<br>";
    }
	
	if (message === "") {
        errorMessage += "Message cannot be empty.<br>";
    }
	
	if (!validEmail(remail1)){
        errorMessage += "First email address is not valid.<br>";
    }
			
	if (!validEmail(remail2)){
        errorMessage += "Second email address is not valid.<br>";
    }

    //send the errors back or send an empty string if there is no error
    return errorMessage = "<u>THERE ARE ERRORS</u><br>" +errorMessage;
}

function validEmail(email) { 
	var re =
/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\ -0-9]+\.)+[a-zA-Z]{2,}))$/;
	return re.test(email);
}

//get the button into a JS object
var sendBtn = document.getElementById("contact-send");

//create an event listener and handler for the send button
sendBtn.onclick = function () {
	
    //bring the message area in in-case we need it to report errors
    var msgArea = document.getElementById("msg");
	
    //get the validation of the form
    var msg = validate();
	
    //report errors or submit the form
    if (msg === "") {
        clearForm();
        msgArea.innerHTML = "Sent!";
        return true;
    } else {
        msgArea.innerHTML = msg;
        return false;
    }
};

//get the button into a JS object
var clearBtn = document.getElementById("contact-clear");

//create an event listener and handler for the clear button
clearBtn.onclick = function () {
    //call clear if the button is pressed
    clearForm();
};
