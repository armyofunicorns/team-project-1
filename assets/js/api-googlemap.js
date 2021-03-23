// Declare a series of variables
let marker; 
let cityCenter = { lat: 37.76987, lng: -122.419905 };
let truckNum = 0;

// Array that stores markers and content for infowindows
let markers = []; 
let foodTruckName = [];
let foodTruckTime = [];
let foodTruckDesc = [];
let foodTruckAddress = [];

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
          // content: infoWindowContent[count],
          content:
          foodTruckName[foodTruckName.length-1] +
          '<br />' +
          '<a href="https://www.google.com/search?q=' + 
          foodTruckAddress[foodTruckAddress.length-1] + 
          '" target="_blank">' +
          'Directions' +
          '</a>'
          ,
        });

        marker = new google.maps.Marker({
          position: markers[markers.length-1], 
          map: map,
          title: foodTruckName[foodTruckName.length-1],
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

        // Now update the screen
        // Insert API info into HTML
        document.getElementById("truck").innerHTML = foodTruckName[foodTruckName.length - 1];
        document.getElementById("time").innerHTML = foodTruckTime[foodTruckTime.length - 1];
        document.getElementById("description").innerHTML = foodTruckDesc[foodTruckDesc.length - 1];
        document.getElementById("address").innerHTML = foodTruckAddress[foodTruckAddress.length - 1];
      }
    })(marker, count);
};

