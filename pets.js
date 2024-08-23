console.log("Hello from pets.js!");
const pets = [];
pets.push(createPet("Hi", 69, "Cat"));
pets[0].status();

let savePetButton = document.getElementById("petButton");
let petsNameInput = document.getElementById("petsName");
let petsAgeInput = document.getElementById("petsAge");
let petsSpeciesInput = document.getElementById("petsSpecies");

function savePet() {
    console.log(petsNameInput.value);
    console.log(petsAgeInput.value);
    console.log(petsSpeciesInput.value);
}

savePetButton.addEventListener("click", savePet);