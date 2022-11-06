let apiAnimals;
const animalContainer = document.querySelector('.animal-container');
const animalName = document.querySelector('.animal-name');
const animalPic = document.getElementById('animal-pic');
const animalLifespan = document.querySelector('.animal-lifespan');
// const animalHabitat = doucment.querySelector('.animal-habitat');
const nextAnimalBtn = document.querySelector('.next-animal');

//event listener for next animal button
nextAnimalBtn.addEventListener('click', getAnimal);

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
    // animalHabitat.innerHTML = 'HABITAT:' + ' ' + apiAnimals.habitat;
    animalPic.src = apiAnimals.image_link;

}

getAnimal();