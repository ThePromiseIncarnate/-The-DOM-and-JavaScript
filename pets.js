console.log("Hello from pets.js!");

const state = {
    pets: [],
}

let savePetButton = document.getElementById("petButton");
let petsNameInput = document.getElementById("petsName");
let petsAgeInput = document.getElementById("petsAge");
let petsSpeciesInput = document.getElementById("petsSpecies");

function savePet() {
    console.log(petsNameInput.value);
    console.log(petsAgeInput.value);
    console.log(petsSpeciesInput.value);
    state.pets.push(createPet(petsNameInput.value, petsAgeInput.value, petsSpeciesInput.value));
    console.table(state.pets);
}

state.pets.push(createPet("Jules", 1, "Cat"));
console.log(state.pets[0].html());

savePetButton.addEventListener("click", savePet);