// Create an array to store the locations of the Google Map
let marker; 
let cityCenter = { lat: 37.76987, lng: -122.419905 };
let truckNum = 0;

// Array that stores markers
var markers = []; 

// Initialize and add the map
function initMap() {
  var infowindow =  new google.maps.InfoWindow({});
  
  // Activate the map and center on cityCenter
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 13,
    center: cityCenter,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  });
  
  // Cycle through and add a marker on each button click
  for (count = 0; count < 1; count++) (function(count) { 
    findTruckBtn.onclick = function() {
        console.log("This is the count: " + count);
        marker = new google.maps.Marker({position: markers[count], map: map,});
        count++;
    }
  })(count);

};