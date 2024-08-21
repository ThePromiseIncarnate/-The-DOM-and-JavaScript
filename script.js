console.log("Hello World");

const state = {
    name: "",
    email: "",
    phone: "",
    city: "",
    zipCode: 0,
    petName: "",
    petSpecies: "",
};

console.log(state);

let saveFormButton = document.getElementById("formButton");
let nameInput = document.getElementById("name");
let emailInput = document.getElementById("email");
let phoneInput = document.getElementById("phone");
let cityInput = document.getElementById("city");
let zipCodeInput = document.getElementById("zipCode");
let petInput = document.getElementById("petName");
let petSpeciesInput = document.getElementById("petSpecies");

const petOwnerArray = [];

function saveForm() {
    console.log("Button Pressed!")
    let name = nameInput.value;
    state.name = name;
    console.log("Added name" + state.name);

    state.email = emailInput.value;
    state.phone = phoneInput.value;
    state.city = cityInput.value;
    state.zipCode = zipCodeInput.value;
    state.petName = petInput.value;
    state.petSpecies = petSpeciesInput.value;

    petOwnerArray.push(createPetOwner(state.name, state.petName, state.petSpecies));

    console.log(state);
    console.log(petOwnerArray);
    // optionally reset this
    nameInput.value = "";
    emailInput.value = "";
    phoneInput.value = "";
    cityInput.value = "";
    zipCodeInput.value = "";
    petInput.value = "";
    petSpeciesInput.value = "";
    petOwnerArray[0].render();
};

saveFormButton.addEventListener("click", saveForm)