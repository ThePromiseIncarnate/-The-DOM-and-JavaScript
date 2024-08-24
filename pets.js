console.log("Hello from pets.js!");

const state = {
    pets: [],
    html: function () {
        <div>
            <h3>Pet Name</h3>
            <p>Species: species</p>
            <p>Age: age</p>
            <p>Energy: energy</p>
            <p>Happiness: happiness</p>
        </div>
    },
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

savePetButton.addEventListener("click", savePet);