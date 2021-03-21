// Create an array to store the locations of the Google Map
var marker; 
var count = 0;

// Array that stores markers
var markers = [
  { lat: 37.763441, lng: -122.440453 },
  { lat: 37.762441, lng: -122.441453 },
  { lat: 37.733441, lng: -122.440533 },
]; 

// Initialize and add the map
function initMap() {
  var infowindow =  new google.maps.InfoWindow({});
  
  // The map, centered at Uluru
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 14,
    center: markers[0],
    mapTypeId: google.maps.MapTypeId.ROADMAP
  });

  for (count = 0; count < markers.length; count++) (function(count) { 
    findTruckBtn.onclick = function() {
        // alert(count);
        marker = new google.maps.Marker({position: markers[count--], map: map,});
    }
  })(count);

};
