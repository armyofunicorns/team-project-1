findTruckBtn.addEventListener('click', function() {
    // console.log(event);
    // event.preventDefault();
    // count++;
    // nums.push(count);
    // alert(nums);
    // emailInput.value = "";


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
});
