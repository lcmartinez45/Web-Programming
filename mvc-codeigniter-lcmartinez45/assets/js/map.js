/*
Name: Lillian Martinez
Final Project map.js
Purpose: Validation js for map.

*/
"use strict";

function initMap(){
    var location = {lat: 30.264, lng: -97.746};
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 5,
        center: location
    });

    var marker = new google.maps.Marker({
        position: location,
        map: map
    });
}
