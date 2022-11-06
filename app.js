let apiAnimals;
const animalContainer = document.querySelector('.animal-container');
const animalName = document.querySelector('.animal-name');
const animalPic = document.getElementById('animal-pic');
const nextAnimalBtn = document.querySelector('.next-animal');

//event listener for next animal
nextAnimalBtn.addEventListener('click', getAnimal);

// Get animal weight from API
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
    animalPic.src = apiAnimals.image_link;
}

getAnimal();