import React, { Component } from 'react'
import axios from 'axios'
import Pet from './Pet'
import AddForm from './AddForm'
import PetsStyle from '../Styles/PetsStyles.css'

class Pets extends Component {
    constructor(){
        super()

        this.state = {
            pets: []
        }
    }

    componentDidMount(){
        axios.get('/api/pet')
        .then((response) => {
            this.setState({pets: response.data})
        })
        .catch(err => console.log(err))
    }

    addPet = (name, age, gender, animal, breed, color, fixed, image) => {
        axios.post('/api/pet', {name, age, gender, animal, breed, color, fixed, image})
        .then((response) => {
            this.setState({pets: response.data})
        })
        .catch(err => console.log(err))
    }

    deletePet = (id) => {
        axios.delete(`/api/pet/${id}`)
        .then((response) => {
            console.log(response)
            this.setState({pets: response.data})
        })
        .catch(err => console.log(err))
    }

    editPet = (id, name) => {
        axios.put(`/api/pet/${id}`, {name})
        .then((response) => {
            this.setState({pet: response.data})
        })
        .catch(err => console.log(err))
    }

    render(){
        return(
            <div>
                <AddForm addPet = {this.addPet}/>
                <h1 className="PetsListTitle">List of Pets</h1>
                <div className="PetsList">
                    {this.state.pets.map((element) =>{
                        return <Pet 
                        info={element} 
                        key={element.id} 
                        deletePet={this.deletePet}
                        editPet={this.editPet}/>
                    })}
                </div>
            </div>
        )
    }
}

export default Pets