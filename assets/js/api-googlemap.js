// Declare a series of variables
let marker; 
let cityCenter = { lat: 37.76987, lng: -122.419905 };
let truckNum = 0;
let contentString = "Hello World";

// Array that stores markers and content for infowindows
var markers = []; 
var windows = [];

// Initialize and add the map
function initMap() {
  
  
  // Activate the map and center on cityCenter
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 13,
    center: cityCenter,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  });
  
  // Cycle through and add a marker on each button click
  for (count = 0; count < 1; count++) (function(count) { 
    findTruckBtn.onclick = function() {
        // Add the infowindow
        const infowindow = new google.maps.InfoWindow({
          content: windows[count],
        });

        console.log("This is the count: " + count);
        marker = new google.maps.Marker({position: markers[count], map: map,});
        
        marker.addListener("click", () => {
          infowindow.open(map, marker);
        });

        window.setTimeout(() => {
          map.panTo(marker.getPosition());
        }, 100);
        count++;
    }
  })(count);

};