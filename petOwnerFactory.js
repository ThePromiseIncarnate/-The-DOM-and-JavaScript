function createPetOwner(petOwnerName, petName, petType) {
    console.log("Hello world");
    const petOwner = {
        petOwnerName: petOwnerName,
        petName: petName,
        petType: petType,
        status: function() {
            console.log(`Pet Owner: ${this.petOnwerName}, Pet: ${petName}, Pet Species: ${petType}`)
        },
        render: function() {
            console.log("Factory Button Pressed");
            nameOutput.textContent = this.petOwnerName;
            petOutput.textContent = this.petName;
            petSpeciesOutput.textContent = this.petType;
        },
    }
    return petOwner
}