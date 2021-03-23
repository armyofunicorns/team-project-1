let saveBtn = document.getElementById("saveBtn");
let saveList = document.getElementById("saveList");
let clearBtn = document.getElementById("clear-trucks");
let truckName = document.getElementById("truck");

// Create a simple event listener that invokes the fetch when the button is pressed
findTruckBtn.addEventListener("click", function () {
  // This turns on the div allowing us to see the truckData
  var element = document.getElementById("truckData");
  element.classList.add("show-div");

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
      const Truck = TruckName(randomTruck.applicant);

      // Add data to each array
      markers[truckNum] = { lat: LocationLat, lng: LocationLong };
      foodTruckName[truckNum] = Truck;
      foodTruckTime[truckNum] =
        "Open between " +
        randomTruck.starttime +
        " and " +
        randomTruck.endtime +
        " on " +
        randomTruck.dayofweekstr;
      foodTruckDesc[truckNum] = randomTruck.optionaltext;
      foodTruckAddress[truckNum] =
        randomTruck.location + ", " + "San Francisco, CA";
      // console.log(markers);
      // console.log(foodTruckName);
      // console.log(foodTruckTime);
      // console.log(foodTruckDesc);
      // console.log(foodTruckAddress);
    });
  truckNum++;
});
// MODAL
// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("modalBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal
btn.onclick = function () {
  modal.style.display = "block";
};

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

// Local Storage
// Function for appending Saved Truck name to HTML
var displayTruck = function (truckName) {
  console.log(localStorage);
  var truckNameLi = document.createElement("LI");
  var truckLIText = document.createTextNode(truckName);
  truckNameLi.appendChild(truckLIText);
  saveList.appendChild(truckNameLi);
};

// Save current food truck to local storage
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
