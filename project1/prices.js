"use strict";

/* Calculate the prices for the products */
var solitaire = 900; //set prices for variables
var halos = 2100;
var band = 1100;
var men = 400;

var tax = .0825; //tax at 8.25%

var shipping = 25; //$25 shipping

/* Calculate tax with shipping and total price */
var totalSol = (solitaire*tax) + shipping;
var totalHal = (halos*tax) + shipping;
var totalBan = (band*tax) + shipping;
var totalMen = (men*tax) + shipping;
var finalSol = totalSol + solitaire;
var finalHal = totalHal + halos;
var finalBan = totalBan + band;
var finalMen = totalMen + men;


/* Display the prices */

document.getElementById("eng").innerHTML = ("Starting at $")+solitaire.toFixed(2) + (", your taxes plus shipping is $")+totalSol.toFixed(2) + (", you walk away with your beautiful ring paying only $")+finalSol.toFixed(2)+("!");

document.getElementById("halo").innerHTML = ("Starting at $")+halos.toFixed(2) + (", your taxes plus shipping is $")+totalHal.toFixed(2) + (", you walk away with your beautiful ring paying only $")+finalHal.toFixed(2)+("!");

document.getElementById("bands").innerHTML = ("Starting at $")+band.toFixed(2) + (", your taxes plus shipping is $")+totalBan.toFixed(2) + (", you walk away with your beautiful ring paying only $")+finalBan.toFixed(2)+("!");

document.getElementById("mens").innerHTML = ("Starting at $")+men.toFixed(2) + (", your taxes plus shipping is $")+totalMen.toFixed(2) + (", you walk away with your beautiful ring paying only $")+finalMen.toFixed(2)+("!");


