// Declare a series of variables
let marker; 
let cityCenter = { lat: 37.76987, lng: -122.419905 };
let truckNum = 0;

// Array that stores markers and content for infowindows
var markers = []; 
var infoWindowContent = [];

// Initialize and add the map
function initMap() {

  // Activate the map and center on cityCenter
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 13,
    center: cityCenter,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  });
  
  // Cycle through and add a marker on each button click
  for (let count = 0; count < 1; count++) (function(marker, count) { 
    // registering an event handler
      findTruckBtn.onclick = function() {
        console.log("This is the count at start: " + count);

        // Add the infowindow
        let infowindow = new google.maps.InfoWindow({
          content: infoWindowContent[count],
        });

        marker = new google.maps.Marker({
          position: markers[count], 
          map: map,
          title: infoWindowContent[count],
          labelContent: "A",
          labelAnchor: new google.maps.Point(3, 30),
          labelClass: "labels",
          labelInBackground: false,
          index: count
        });
        
        marker.addListener("click", () => {
            infowindow.open(map, marker);
        });

        window.setTimeout(() => {
          map.panTo(marker.getPosition());
        }, 100);
        map.setZoom(14);
        count++;
      }
    })(marker, count);
};

