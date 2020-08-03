import React, { Component } from 'react';
import './App.css';
import Pets from './components/Pets'
import Header from './components/Header'

class App extends Component {
  constructor(){
    super()

  }

  render(){
    return(
      <div className="WholeBody">
        <Header />
        
        <Pets />
        <div className="Footer">
            Logo and Site by Ⓒ 2020 Samuel Chin
        </div>
      </div>
    )
  }
}

export default App;
