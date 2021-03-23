// Fetch API for food truck info from sfgov
fetch("https://data.sfgov.org/resource/jjew-r69b.json")
  .then((response) => response.json())
  .catch((error) => console.log("error", error))
  .then((result) => {
    // Random Truck chosen to display from the Array
    let randomTruck = result[Math.floor(Math.random() * result.length)];

    //   Choose Random Truck from list of 1000
    let ArrayRanNum = Math.floor(Math.random() * result.length);

    //   Data for chosen truck
    //   Specific data taken from Array
    const DayOfWeek = randomTruck.dayofweekstr;
    const Starttime = randomTruck.starttime;
    const Endtime = randomTruck.endtime;
    // const LocationLat = randomTruck.latitude
    let LocationLat = parseFloat(randomTruck.latitude);
    // const LocationLong = randomTruck.longitude
    let LocationLong = parseFloat(randomTruck.longitude);
    const FoodType = randomTruck.optionaltext;
    const Address = randomTruck.location;
    const AddressDescription = randomTruck.locationdesc;
    const Truck = randomTruck.applicant;

    // Add data to each array
    markers[0] = { lat: LocationLat, lng: LocationLong };
    foodTruckName[0] = Truck;
    foodTruckTime[0] =
      "Open between " +
      randomTruck.starttime +
      " and " +
      randomTruck.endtime +
      " on " +
      randomTruck.dayofweekstr;
    foodTruckDesc[0] = randomTruck.optionaltext;
    foodTruckAddress[0] = randomTruck.location + ", " + "San Francisco, CA";
    // console.log(markers);
    // console.log(foodTruckName);
    // console.log(foodTruckTime);
    // console.log(foodTruckDesc);
    // console.log(foodTruckAddress);
  });
