
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

          var DayOfWeek = randomTruck.dayofweekstr

          var Starttime = randomTruck.starttime    

          var Endtime = randomTruck.endtime     

          var LocationLat = randomTruck.latitude

          var LocationLong = randomTruck.longitude

          var FoodType = randomTruck.optionaltext

          var Address = randomTruck.location

          var AddressDescription = randomTruck.locationdesc
          
          // Console Log Truck Name
          console.log(TruckName(randomTruck.applicant))         
        })

