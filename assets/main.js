
// // function starts when dom loads
// document.addEventListener('DOMContentLoaded', () => {


    
    fetch("https://data.sfgov.org/resource/jjew-r69b.json")
      .then(response => response.json())
      .then(result => {
        //   console.log(result)
        // Random Truck chosen to display from the Array
          let randomTruck = result[Math.floor(Math.random() * result.length)];
        //   The item in the Array that was chosen
          let ArrayRanNum = Math.floor(Math.random() * result.length)
          console.log(ArrayRanNum)
        //   All data for chosen truck
          console.log(randomTruck)
        //   Specific data taken from Array
          const DayOfWeek = randomTruck.dayofweekstr
          console.log(DayOfWeek)
          const Starttime = randomTruck.starttime
          console.log(Starttime)
          const Endtime = randomTruck.endtime
          console.log(Endtime)
          const TruckName = randomTruck.applicant
          console.log(TruckName)
          const LocationLat = randomTruck.latitude
          console.log(LocationLat)
          const LocationLong = randomTruck.longitude
          console.log(LocationLong)
          const FoodType = randomTruck.optionaltext
          console.log(FoodType)
          const Address = randomTruck.location
          const AddressDescription = randomTruck.locationdesc
          console.log(Address +": "+ AddressDescription)
          
        

      });
    



      function initMap() {
        const map = new google.maps.Map(document.getElementById("map"), {
          zoom: 8,
          center: { lat: 40.731, lng: -73.997 },
        });
        const geocoder = new google.maps.Geocoder();
        const infowindow = new google.maps.InfoWindow();
        document.getElementById("submit").addEventListener("click", () => {
          geocodeLatLng(geocoder, map, infowindow);
        });
      }
      
      function geocodeLatLng(geocoder, map, infowindow) {
        const input = document.getElementById("latlng").value;
        const latlngStr = input.split(",", 2);
        const latlng = {
          lat: parseFloat(latlngStr[0]),
          lng: parseFloat(latlngStr[1]),
        };
        geocoder.geocode({ location: latlng }, (results, status) => {
          if (status === "OK") {
            if (results[0]) {
              map.setZoom(11);
              const marker = new google.maps.Marker({
                position: latlng,
                map: map,
              });
              infowindow.setContent(results[0].formatted_address);
              infowindow.open(map, marker);
            } else {
              window.alert("No results found");
            }
          } else {
            window.alert("Geocoder failed due to: " + status);
          }
        });
      }

// fetch("https://data.sfgov.org/resource/jjew-r69b.json")
// .then(response => response.text())
// .then(result => console.log(result))
// .catch(error => console.log('error', error));
