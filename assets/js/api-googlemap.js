// Initialize and add the map
function initMap() {
    // The location of Uluru
    const uluru = { lat: -25.344, lng: 131.036 };
    // The map, centered at Uluru
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 4,
      center: uluru,
    });
    // The marker, positioned at Uluru
    const marker = new google.maps.Marker({
      position: uluru,
      map: map,
    });
  }

//   function initMap() {
//     const myLatlng = { lat: -25.363, lng: 131.044 };
//     const map = new google.maps.Map(document.getElementById("map"), {
//       zoom: 4,
//       center: myLatlng,
//     });
//     const marker = new google.maps.Marker({
//       position: myLatlng,
//       map,
//       title: "Click to zoom",
//     });
//     map.addListener("center_changed", () => {
//       // 3 seconds after the center of the map has changed, pan back to the
//       // marker.
//       window.setTimeout(() => {
//         map.panTo(marker.getPosition());
//       }, 3000);
//     });
//     marker.addListener("click", () => {
//       map.setZoom(8);
//       map.setCenter(marker.getPosition());
//     });
//   }