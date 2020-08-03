import React,{ Component } from 'react'
import PetStyles from '../Styles/PetStyles.css'
import XIcon from './DeleteButton'
import MoreHorizIcon from './EditButton'

class Pet extends Component {
    constructor(props){
        super(props)
        const {name, age, gender, animal, breed, color, fixed, image} = this.props.info
        this.state = {
            edit: false,
            name: name,
            age: age,
            gender: gender,
            animal: animal,
            breed: breed,
            color: color,
            fixed: fixed,
            image: image
        }
    }

    handleChange = (value) => {
        this.setState({name: value})
    }
  
    toggleEdit = () => {
        this.setState({edit: !this.state.edit})
    }
  
    savePet = () => {
        this.props.editPet(this.props.info.id, this.state.name)
        this.toggleEdit()
    }

    render(){
        return(
            <div className="PetBox">
                {/* <h2>{this.props.info.name}</h2>
                <h2>{this.props.info.age}</h2>
                <h2>{this.props.info.gender}</h2>
                <h2>{this.props.info.animal}</h2>
                <h2>{this.props.info.breed}</h2>
                <h2>{this.props.info.color}</h2>
                <h2>{this.props.info.fixed}</h2>
                <img src={this.props.info.image}/> */}
                
                    {this.state.edit ? (
                        <div>
                            <input value={this.state.name} onChange={(e) => this.handleChange(e.target.value)}/>
                            <input value={this.state.age} onChange={(e) => this.handleChange(e.target.value)}/>
                            <input value={this.state.gender} onChange={(e) => this.handleChange(e.target.value)}/>
                            <input value={this.state.animal} onChange={(e) => this.handleChange(e.target.value)}/>
                            <input value={this.state.breed} onChange={(e) => this.handleChange(e.target.value)}/>
                            <input value={this.state.color} onChange={(e) => this.handleChange(e.target.value)}/>
                            <input value={this.state.fixed} onChange={(e) => this.handleChange(e.target.value)}/>
                            <input value={this.state.image} onChange={(e) => this.handleChange(e.target.value)}/>
                            <button onClick={this.toggleEdit}>Cancel</button>
                            <button onClick={this.savePet}>Save</button>
                        </div>
                    ) : (
                        <div className="PetsInfo">
                            <h2>{this.props.info.name}</h2>
                            <l2>{this.props.info.age}</l2>
                            <l2>{this.props.info.gender}</l2>
                            <l2>{this.props.info.animal}</l2>
                            <l2>{this.props.info.breed}</l2>
                            <l2>{this.props.info.color}</l2>
                            <l2>{this.props.info.fixed}</l2>
                            <img className="PetImage" src={this.props.info.image}/>
                            <div className="BottomButtons">
                                <div className="EditButton">
                                    <MoreHorizIcon onClick={this.toggleEdit}/>
                                </div>
                                <div className="DeleteButton">             
                                    <XIcon onClick={() => this.props.deletePet(this.props.info.id)}/>
                                </div>
                            </div>
                        </div>
                    )}
                
            </div>
        )
    }
}

export default Pet