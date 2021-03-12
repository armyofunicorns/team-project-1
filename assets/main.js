
// function starts when dom loads
document.addEventListener('DOMContentLoaded', () => {
    
// Variables / selectors
    const startBtn = document.querySelector('.beer-button')
    const beerName = document.querySelector('.beer-name')
    const descriptionDisplay = document.querySelector('.description')
    const pairings = document.querySelector('.food-pairing')
// fetch beer info from API
function getData() {
    fetch('https://api.punkapi.com/v2/beers/random')
        .then(response => {
            return response.json()
        })
        .then(data => {
            console.log(data)
            const name = data[0].name
            // console.log(name)
            const description = data[0].description
            // console.log(description)
            const foodPairing = data[0].food_pairing
            // console.log(foodPairing)

// insert api info onto page
            beerName.innerHTML = name 
            descriptionDisplay.innerHTML = description
            pairings.innerHTML = foodPairing
        })

    }

    startBtn.addEventListener('click', getData)
})

// name
// description
// food pairing