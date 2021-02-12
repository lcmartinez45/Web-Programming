// JavaScript Document	 
//Create Array
var foodImage = ['<img src="images/image6.jpg"', '<img src="images/image7.jpg"', '<img src="images/image8.jpg"', '<img src="images/image9.jpg"', '<img src="images/image10.jpg"'];
var item = ['Chicken & Asparagus', 'Mixed Veggie Couscous', 'Stuffed Peppers', 'Veggie Noodles & Shrimp', 'Stuffed Noodles & Shrimp'];
var price = [ 15.99, 14.95, 11.99, 14.99, 13.99];		 
var text = document.getElementById('table');
var table = '<table><thead><tr><th>Image</th><th>Item Name</th><th>Price</th></tr></thead></tbody>';		 
	for(var i = 0; i < foodImage.length; i++){
		table += '<tr><td>' + foodImage[i] + '</td><td>' + item[i] + '</td><td>' + price[i] + '</td></tr>';
		}				  
	table += '</tbody></table>';	 
//Displays data in html
text.innerHTML = table;