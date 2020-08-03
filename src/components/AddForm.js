import React, { Component } from 'react'
import AddFormStyles from '../Styles/AddFormStyles.css'
import SendSharpIcon from './SubmitButton'

class AddForm extends Component {
    constructor(props){
        super(props)
        this.state = {
            name: "",
            age: "",
            gender: "",
            animal: "",
            breed: "",
            color: "",
            fixed: "",
            image: ""
        }
    }

    nameInput = (value) => {
        this.setState({name: value})
    }
    ageInput = (value) => {
        this.setState({age: value})
    }
    genderInput = (value) => {
        this.setState({gender: value})
    }
    animalInput = (value) => {
        this.setState({animal: value})
    }
    breedInput = (value) => {
        this.setState({breed: value})
    }
    colorInput = (value) => {
        this.setState({color: value})
    }
    fixedInput = (value) => {
        this.setState({fixed: value})
    }
    imageInput = (value) => {
        this.setState({image: value})
    }
    saveInput = () => {
        const {name, age, gender, animal, breed, color, fixed, image} = this.state
        this.props.addPet(name, age, gender, animal, breed, color, fixed, image)
        this.setState({
            name: "",
            age: "",
            gender: "",
            animal: "",
            breed: "",
            color: "",
            fixed: "",
            image: ""
        })
    }

    render(){
        return(
            <div>
                <form className="newAnimal">
                    <div>
                        <b>New Animal Entry</b>
                    </div>
                    <input
                        placeholder="Enter Name"
                        value={this.state.name}
                        onChange={(e) => this.nameInput(e.target.value)}
                    />
                    <input
                        placeholder="Enter Age"
                        value={this.state.age}
                        onChange={(e) => this.ageInput(e.target.value)}
                    />
                    <input
                        placeholder="Enter Gender"
                        value={this.state.gender}
                        onChange={(e) => this.genderInput(e.target.value)}
                    />
                    <input
                        placeholder="Enter Animal Species"
                        value={this.state.animal}
                        onChange={(e) => this.animalInput(e.target.value)}
                    />
                    <input
                        placeholder="Enter Breed"
                        value={this.state.breed}
                        onChange={(e) => this.breedInput(e.target.value)}
                    />
                    <input
                        placeholder="Enter Color"
                        value={this.state.color}
                        onChange={(e) => this.colorInput(e.target.value)}
                    />
                    <input
                        placeholder="Enter Fixed Status"
                        value={this.state.fixed}
                        onChange={(e) => this.fixedInput(e.target.value)}
                    />
                    <input
                        placeholder="Image URL"
                        value={this.state.image}
                        onChange={(e) => this.imageInput(e.target.value)}
                    />
                    <div className="SubmitButton">
                    <SendSharpIcon onClick={this.saveInput}/>
                    </div>
                </form>
            </div>
        )
    }
}

export default AddForm