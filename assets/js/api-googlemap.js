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
        
        // Create a new infowindow variable
        let infowindowContents = 
          foodTruckName[foodTruckName.length-1] +
          '<br />' +
          '<a href="https://www.google.com/search?q=' + 
          foodTruckAddress[foodTruckAddress.length-1] + 
          '" target="_blank">' +
          'Directions' +
          '</a>';

        // Open infoWindow reference
        var infowindow = new google.maps.InfoWindow();

        // Create a new map marker
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
        
        // Set an event listener that will open up the infowindow when clicked
        marker.addListener("click", () => {
          infowindow.setContent(infowindowContents);  
          infowindow.open(map, marker); 
        });


        // Set a function that moves the map after a new marker has been added to map
        window.setTimeout(() => {
          map.panTo(marker.getPosition());
        }, 100);
        map.setZoom(14);
        // count++;

        // Now update the screen
        // Insert API info into HTML
        document.getElementById("truck").innerHTML = foodTruckName[foodTruckName.length - 1];
        document.getElementById("time").innerHTML = foodTruckTime[foodTruckTime.length - 1];
        document.getElementById("description").innerHTML = foodTruckDesc[foodTruckDesc.length - 1];
        document.getElementById("address").innerHTML = foodTruckAddress[foodTruckAddress.length - 1];
      }
    })(marker, count);
};

