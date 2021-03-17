
// var result = titleCase(str)
// // function starts when dom loads
// document.addEventListener('DOMContentLoaded', () => {
  var TruckName = function(str) {
    var result = [];
    
    var words =str.toLowerCase().split(' ');
    for (var i = 0; i < words.length; i++) {
      var word = words[i].split("");
      
      if (/(?:LLC|INC)/i.test(words[i])) {
        result.push(words[i].toUpperCase())
        continue
      }
      
      word[0] = word[0].toUpperCase();
  
      result.push(word.join(""));
    }
    return result.join(" ");
  };

    // regular expression <----
    fetch("https://data.sfgov.org/resource/jjew-r69b.json")
      .then(response => response.json())
      .then(result => {
        //   console.log(result)
        // Random Truck chosen to display from the Array
          let randomTruck = result[Math.floor(Math.random() * result.length)];
        //   The item in the Array that was chosen
          let ArrayRanNum = Math.floor(Math.random() * result.length)
          // console.log(ArrayRanNum)
        //   All data for chosen truck
          // console.log(randomTruck)
        //   Specific data taken from Array
          var DayOfWeek = randomTruck.dayofweekstr
          // console.log(DayOfWeek)
          var Starttime = randomTruck.starttime
          // console.log(Starttime)
          var Endtime = randomTruck.endtime
          // console.log(Endtime)
          var LocationLat = randomTruck.latitude
          // console.log(LocationLat)
          var LocationLong = randomTruck.longitude
          // console.log(LocationLong)
          var FoodType = randomTruck.optionaltext
          // console.log(FoodType)
          var Address = randomTruck.location
          var AddressDescription = randomTruck.locationdesc
          // console.log(Address +": "+ AddressDescription)
          
         
          console.log(randomTruck.applicant)
          console.log(TruckName(randomTruck.applicant))         
        })

               
          

            
            
        //   console.log(TruckName)
          // const TruckNameLower = TruckName.toLowerCase() 
          // const first = TruckName.charAt(0)
          // const upper = first.toUpperCase()
          // const TruckNameFinal = upper + TruckNameLower


          // console.log(TruckNameFinal)
         
         
         
            //   var result = [];
          //   TruckName = randomTruck.applicant
          //   var words = str.split(" ");
          
          //   for (var i = 0; i < words.length; i++) {
          //     var word = words[i].split("");
          
          //     word[0] = word[0].toUpperCase();
          
          //     result.push(word.join(""));
          //   }
          
          //   return result.join(" ");
          // };
          

        



      

// fetch("https://data.sfgov.org/resource/jjew-r69b.json")
// .then(response => response.text())
// .then(result => console.log(result))
// .catch(error => console.log('error', error));
