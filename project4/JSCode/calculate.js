// JavaScript Document

//on load call our MenuCart function

window.addEventListener("load", setupCart);

// setupCart function to define event handlers
function setupCart() {
	
// Step 4 A: variable addbutton with elements from class addbutton. Add the addItem(e) function onclick to each class = addButton element	
var addButtons = document.getElementsByClassName("addButton");
	
// Step 4 B: Loop for all addButtons
for(var i = 0; i < addButtons.length; i++) {
	
//event handler when that button is clicked
addButtons[i].addEventListener("click", addItem);
}
}

// Step 5: Function addItem
function addItem(e) {
	
// Step 5 A: foodItem is the description of the food item
var foodItem = e.target.nextElementSibling;
	
// Step 5 B: creating foodId variable with value of id attribute for fooditem
var foodID = foodItem.id;
	
// Step 5 C: cloneNode() method to copy description
var foodDescription = foodItem.cloneNode(true);

// Step 5 D: cartBox is a reference to the shopping cart
var cartBox = document.querySelector("aside#cart");

// Determine if a product has already been ordered to keep track of quantity
// Step 5 E: duplicateOrder initially false
var duplicateOrder = false;
	
// Step 5 F: Loop for element child nodes of cartBox
for (var i = 0; i < cartBox.childNodes.length; i++) {
	
//If already added,set duplicateOrder = true and increase orderCount of first Element child
if(cartBox.childNodes[i].id === foodID) {
duplicateOrder = true;
cartBox.childNodes[i].firstChild.textContent++;
}
}
	
// Step 5 G: Check if duplicateOrder is still false
if(!duplicateOrder) {
var orderCount = document.createElement("span");
	
//If flase set text context of the element to 1;
orderCount.textContent = "1";
foodDescription.insertBefore(orderCount, foodDescription.firstChild);
cartBox.appendChild(foodDescription);
}
}




function calculate(){
	var total = 0;
	var error = false;	
	if (isNaN(document.forms[0].soup.value))
		{
			alert("A numeric value is required when ordering");
			error = true;
		}
	else{
		var numberSoup = parseInt(document.forms[0].soup.value);
	}
	if(!error){
		total = numberSoup * 9.95 * 1.0825;
		window.alert("Your order totals: " + total.toFixed(2));
	}
}






// Forms
window.onload = init;

function init() {
   document.forms[0].onsubmit = function() {
      if (this.checkValidity()) alert("Data passes initial validation tests");
      return false;
   }
   
}