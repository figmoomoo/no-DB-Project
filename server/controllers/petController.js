let pet = [
    {
        id: 1,
        name: "Sally",
        age: "2 years",
        gender: "female",
        animal: "dog",
        breed: "German Shepherd/mix",
        color: "brown and black",
        fixed: "spayed",
        image: "https://i.imgur.com/dpYjtLJ.jpg"
    },
    {
        id: 2,
        name: "Roger",
        age: "5 years",
        gender: "male",
        animal: "cat",
        breed: "Domestic Shorthair/mix",
        color: "gray",
        fixed: "neutered",
        image: "https://images.fineartamerica.com/images/artworkimages/mediumlarge/2/portrait-gray-tabby-cat-maika-777.jpg"
    }
];

let nextId = 3

module.exports = {
    getPet: (req, res) => {
        // console.log("hi")
        return res.status(200).send(pet)
    },
    addPet: (req, res) => {
        const {name, age, gender, animal, breed, color, fixed, image} = req.body
        const newPet = {
            id: nextId,
            name,
            age,
            gender,
            animal,
            breed,
            color,
            fixed,
            image
        }
        nextId++
        pet.push(newPet)
        return res.status(200).send(pet)
    },
    deletePet: (req, res) => {
        const {id} = req.params
        pet = pet.filter((e) => e.id !== +id)
        return res.status(200).send(pet)
    },
    editPet: (req, res) => {
        const {id} = req.params
        const {name} = req.body
        const index = pets.findIndex((element) => {
            return element.id === +id
        })
        food[index].name = name
        return res.status(200).send(pet)
    }
}