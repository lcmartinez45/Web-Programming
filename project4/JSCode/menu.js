// JavaScript Document	

//Create array to loop through the banner ad
window.onload = rotate;

var theAd = 0;
var adImages = new Array("images/banner1.jpeg", "images/banner2.jpeg", "images/banner3.jpg", "images/banner4.jpg");

function rotate() {
     theAd++;
     if (theAd == adImages.length) {
        theAd = 0;
     }
     document.getElementById("adBanner").src = adImages[theAd];

	//Change images every 3 seconds
     setTimeout(rotate, 3 * 1000);
}

//Create Array
var foodImage = ['<img src="images/image6.jpg"', '<img src="images/image7.jpg"', '<img src="images/image8.jpg"', '<img src="images/image9.jpg"', '<img src="images/image10.jpg"'];
var item = ['Chicken with Asparagus', 'Couscous with Veggie Meddley', 'Stuffed Peppers', 'Zoodles with Shrimp in Pesto', 'White Rice with Shrimp and Large Noodles'];
var price = [ 12.99, 8.95, 9.99, 14.99, 24.99];		 
var text = document.getElementById('table');
var table = '<table><thead><tr><th>Image</th><th>Item Name</th><th>Price</th></tr></thead></tbody>';		 
	for(var i = 0; i < foodImage.length; i++){
		table += '<tr><td>' + foodImage[i] + '</td><td>' + item[i] + '</td><td>' + price[i] + '</td></tr>';
		}				  
	table += '</tbody></table>';	 
//Displays data in html
text.innerHTML = table;




