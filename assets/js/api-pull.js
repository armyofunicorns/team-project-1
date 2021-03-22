let truckName = document.getElementById("truck");
let truckTime = document.getElementById("time");
let truckDescription = document.getElementById("description");
let truckAddress = document.getElementById("address");
let saveBtn = document.getElementById("saveBtn");
let saveList = document.getElementById("saveList");
let clearBtn = document.getElementById("clear-trucks");
// Create a simple event listener that invokes the fetch when the button is pressed

TruckSearchBtn.addEventListener("click", function () {
  // Takes truck name fom API, lowercases the name and capitalizes first letter of each word
  var TruckName = function (str) {
    var result = [];

    var words = str.toLowerCase().split(" ");
    for (var i = 0; i < words.length; i++) {
      var word = words[i].split("");
      // "regular expression" used to excude LLC and INC from being modified
      if (/(?:LLC|INC)/i.test(words[i])) {
        result.push(words[i].toUpperCase());
        continue;
      }

      word[0] = word[0].toUpperCase();

      result.push(word.join(""));
    }
    return result.join(" ");
  };

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

      var DayOfWeek = randomTruck.dayofweekstr;

      var Starttime = randomTruck.starttime;

      var Endtime = randomTruck.endtime;

      var LocationLat = randomTruck.latitude;

      var LocationLong = randomTruck.longitude;

      var FoodType = randomTruck.optionaltext;

      var Address = randomTruck.location;

      var AddressDescription = randomTruck.locationdesc;

      let Truck = randomTruck.applicant;

      // Insert API info into HTML
      truckName.innerHTML = TruckName(randomTruck.applicant);
      truckTime.innerHTML =
        "Open between " +
        randomTruck.starttime +
        " and " +
        randomTruck.endtime +
        " on " +
        randomTruck.dayofweekstr;
      truckDescription.innerHTML = randomTruck.optionaltext;
      truckAddress.innerHTML = randomTruck.location;
      // Console Log Truck Name
      console.log(truckName.textContent);
    });
});

// Function for appending Saved Truck name to HTML
var displayTruck = function (truckName) {
  console.log(localStorage);
  var truckNameLi = document.createElement("LI");
  var truckLIText = document.createTextNode(truckName);
  truckNameLi.appendChild(truckLIText);
  saveList.appendChild(truckNameLi);
};

// Save current food truck to HTML
saveBtn.addEventListener("click", function () {
  var saveContent = document.getElementById("truck").textContent;
  localStorage.setItem("truck", saveContent);
  displayTruck(truckName.textContent);
  console.log(saveContent);
});

function localLoad() {
  var content = localStorage.getItem("Truck Name");
  var loadContent = JSON.parse(content);
  console.log(loadContent);
}

// Saves current food truck to local Storage

// Load all Local Storage elements onto page on load
window.addEventListener("DOMContentLoaded", localLoad());

// On hitting clear button clear local storage
clearBtn.addEventListener("click", localStorage.clear());

//when you open the page, it fetches local storage, loop that array and display list of saved foodtrucks. you can look into array method map().
//when you click the save button, you want to get what it's in local storage, add the new item, and then save back. Then refresh the page so that the new item shows.
