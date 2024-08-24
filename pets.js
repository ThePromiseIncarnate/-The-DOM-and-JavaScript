console.log("Hello from pets.js!");

const state = {
    pets: [],
    html: function () {
        return `<div>
            <h3>${this.name}</h3>
            <p>Species: ${this.species}</p>
            <p>Age: ${this.age}</p>
            <p>Energy: ${this.energy}</p>
            <p>Happiness: ${this.happiness}</p>
        </div>`
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

state.pets.push(createPet("Jules", 1, "Cat"));
console.log(state.html());

savePetButton.addEventListener("click", savePet);