console.log("Hello World");

const state = {
    name: "",
    email: "",
    phone: "",
    city: "",
    zipCode: 0,
    petName: "",
};

console.log(state);

let saveFormButton = document.getElementById("formButton");
let nameInput = document.getElementById("name");
let emailInput = document.getElementById("email");
let phoneInput = document.getElementById("phone");
let cityInput = document.getElementById("city");
let zipCodeInput = document.getElementById("zipCode");
let petInput = document.getElementById("petName");

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

    console.log(state);
    // optionally reset this
    nameInput.value = "";
    emailInput.value = "";
    phoneInput.value = "";
    cityInput.value = "";
    zipCodeInput.value = "";
    petInput.value = "";
};

saveFormButton.addEventListener("click", saveForm)