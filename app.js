let apiAnimals;
let apiAnimalsArray = [];
const animalContainer = document.querySelector('.animal-container');
const animalName = document.querySelector('.animal-name');
const diet = document.getElementById('animal-diet');
const animalPic = document.getElementById('animal-pic');
const animalLifespan = document.querySelector('.animal-lifespan');
const animalOrigin = document.querySelector('.animal-origin');
const searchBtn = document.querySelector('.search');
const popupBox = document.querySelector('.popup');
const nextAnimalBtn = document.querySelector('.next-animal');
const animalSearched = document.querySelector('.animal-searched');
const searchAnimalBtn = document.getElementById('search-animal');


//event listener for next animal button
nextAnimalBtn.addEventListener('click', getAnimal);

//event listener for search engine
searchBtn.addEventListener('click', searchAnimal);

//event listener for search animal button on popup
searchAnimalBtn.addEventListener('click', fillAnimalArray);

// Get animal from API
async function getAnimal () {
    const apiUrl = 'https://zoo-animal-api.herokuapp.com/animals/rand';
    try{
        const response = await fetch(apiUrl);
        apiAnimals = await response.json();
        console.log(apiAnimals);
        console.log(apiAnimals.name);
        getAnimalInfo();

    }catch (error) {
        console.log('woops',error);

    }
} 

//populates the info from the API request
async function getAnimalInfo() {
    animalName.innerHTML = apiAnimals.name;
    animalLifespan.innerHTML = 'LIFESPAN:' + ' ' + apiAnimals.lifespan;
    diet.innerHTML = 'DIET:' + ' ' + apiAnimals.diet;
    animalPic.src = apiAnimals.image_link;
    animalOrigin.innerHTML = "ORIGIN:" + ' ' + apiAnimals.geo_range;

}

//function for displaying a search popup
 function searchAnimal() {
    popupBox.classList.add('openPopup');
}

//function for populating array with API animals and returning the array
async function fillAnimalArray() {

    const searchedAnimal = animalSearched.value;
    console.log(searchedAnimal);
    const apiUrl = `https://zoo-animal-api.herokuapp.com/animals/${searchedAnimal}`;
    const response = await fetch(apiUrl);
    apiAnimals = await response.json();
    getAnimalInfo();


    
    // for(let i = 0; i < apiUrl.length; i++) {
    //     const response = await fetch(apiUrl);
    //     const animal = await response.json();
    //     // apiAnimalsArray.push(animal); 
    //     console.log(animal.name);
    //     console.log('----------------');
    //     if(animal.name = searchedAnimal) {
    //         console.log('found name');

            
    //         break;
    //     }
        // if(searchedAnimal = apiAnimalsArray[i].name) {
        //     console.log('found');
        //     break;
        // }
    

    // return apiAnimalsArray;


}

// function findAnimal() {
//     const searchedAnimal = animalSearched.value;
//     console.log(searchedAnimal);
//     for(let i = 0; i < )

// }

getAnimal();