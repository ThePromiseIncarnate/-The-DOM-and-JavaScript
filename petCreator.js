console.log("Hello from petCreator.js!");
function createPet(inputName, inputAge, inputSpecies) {
    const pet = {
        name: inputName,
        age: inputAge,
        species: inputSpecies,
        happiness: 50,
        energy: 100,
        play: function () {
            this.energy -= 15
            this.happiness += 10;
            console.log(`You played with ${this.name}! Happiness is now ${this.happiness}, energy is now ${this.energy}.`)
        },
        feed: function () {
            this.happiness += 20;
            this.energy += 20;
            console.log(`You fed ${this.name}! Happiness is now ${this.happiness}, energy is now ${this.energy}.`)
        },
        status: function () {
            console.log(`Pet Name: ${this.name}, Age: ${this.age}, Species: ${this.species}, Happiness: ${this.happiness}, Energy: ${this.energy}`)
        },
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
    return pet
}