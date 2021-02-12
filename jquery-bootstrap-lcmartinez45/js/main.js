/*
Name: Lillian Martinez
Coding04 main.js
Purpose: Validation js for Coding04.
*/

"use strict";

function clearForm() {
	
    /*
     * This function replaces the text in text boxes with empty strings
     * and replaces the message area with an html <br>
     */
    document.getElementById("name").value = "";
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

    //Get all the elements into the function
    var nameInput = document.getElementById("name");
	var re1Input = document.getElementById("remail1");
	var re2Input = document.getElementById("remail2");
	var subInput = document.getElementById("subject");
    var msgInput = document.getElementById("message");

    //Get all the strings in the elements and trim them
    var name = nameInput.value.trim();  
	//Removes white space, user experience
	var remail1 = re1Input.value.trim();
	var remail2 = re2Input.value.trim();
	var sub = subInput.value.trim();
	var message = msgInput.value.trim();

    //Put the trimmed versions back into the form for good user experience (UX)
    nameInput.value = name; 
	//Then puts it back into the form for user experience
	re1Input.value = remail1;
	re2Input.value = remail2;
	subInput.value = sub;
	msgInput.value = message;

    //Test the strings from the form and store the error messages
    if (name === "") {
        errorMessage += "Name cannot be empty.<br>"; 
		//If it is it sends message to user
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

    //Send the errors back or send an empty string if there is no error
    return errorMessage;
}

function sendForm() {
    const XHR = new XMLHttpRequest();
    let formData = new FormData(document.getElementById("contactForm"));
    var msgArea = document.getElementById("msg");

    XHR.addEventListener('load', function (event) {
        if (XHR.responseText === "okay") {
            console.log(XHR.responseText); // for debug
            // you have to clear the form here, not in the handler
            clearForm();
            msgArea.innerHTML = "Sent!";
        } else {
            msgArea.innerHTML = "Error";
        }
    });

    XHR.addEventListener('error', function (event) {
        if (XHR.statusText !== "OK") {
            msgArea.innerHTML = "Error";
        }
    });

    XHR.open('POST', 'email.php');
    XHR.send(formData);
}

function validEmail(email) {
	var re =
/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\ -0-9]+\.)+[a-zA-Z]{2,}))$/;
	return re.test(email);
}

//Get the button into a JS object
var sendBtn = document.getElementById("contact-send");

//Create an event listener and handler for the send button
sendBtn.onclick = function () {
	
    //Bring the message area in in-case we need it to report errors
    var msgArea = document.getElementById("msg");
	
    //Get the validation of the form
    var msg = validate();
	
    //Report errors or submit the form
    if (msg === "") {
        msgArea.innerHTML = "Sending...";
		sendForm();
    } else {
        msgArea.innerHTML = msg;
    }
};

//Get the button into a JS object
var clearBtn = document.getElementById("contact-clear");

//Create an event listener and handler for the clear button
clearBtn.onclick = function () {
    //Call clear if the button is pressed
    clearForm();
};
