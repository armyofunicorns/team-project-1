// Create a simple event listener that invokes the fetch when the button is pressed
findTruckBtn.addEventListener('click', function() {

  // This turns on the div allowing us to see the truckData
  var element = document.getElementById("truckData");
  element.classList.add("show-div");

    // Takes truck name fom API, lowercases the name and capitalizes first letter of each word
  var TruckName = function(str) {
    var result = [];
    
    var words =str.toLowerCase().split(' ');
    for (var i = 0; i < words.length; i++) {
      var word = words[i].split("");
      // "regular expression" used to excude LLC and INC from being modified
      if (/(?:LLC|INC)/i.test(words[i])) {
        result.push(words[i].toUpperCase())
        continue
      }
      
      word[0] = word[0].toUpperCase();
  
      result.push(word.join(""));
    }
    return result.join(" ");
  };

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
          
          // Insert API info into HTML
          document.getElementById("truck").innerHTML = TruckName(randomTruck.applicant);
          document.getElementById("time").innerHTML = "Open between " +randomTruck.starttime+ " and " +randomTruck.endtime + " on " + randomTruck.dayofweekstr;
          document.getElementById("description").innerHTML = randomTruck.optionaltext;
          document.getElementById("address").innerHTML = randomTruck.location + "<br />" + "San Francisco, CA";
          
          // Add data to each array          
          markers[truckNum] = { lat: LocationLat, lng: LocationLong };
          infoWindowContent[truckNum] = Truck;
          console.log(markers);
          console.log(infoWindowContent);
        });
        truckNum++;
    });
