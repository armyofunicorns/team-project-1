// Fetch API for food truck info from sfgov
fetch("https://data.sfgov.org/resource/jjew-r69b.json")
.then(response => response.json())
.catch(error => console.log('error', error))
.then(result => {
  // Random Truck chosen to display from the Array
    let randomTruck = result[Math.floor(Math.random() * result.length)];
    
    //   Choose Random Truck from list of 1000
    let ArrayRanNum = Math.floor(Math.random() * result.length)
    
  //   Data for chosen truck          
  //   Specific data taken from Array
    const Truck = randomTruck.applicant;
    let LocationLong = parseFloat(randomTruck.longitude);
    let LocationLat = parseFloat(randomTruck.latitude);

    markers[0] = { lat: LocationLat, lng: LocationLong };
    infoWindowContent[0] = Truck;

    console.log(markers);
    console.log(infoWindowContent);

  });
