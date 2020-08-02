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
      <div>
        <Header />
        
        <Pets />
        <div className="Footer">
            
        </div>
      </div>
    )
  }
}

export default App;
