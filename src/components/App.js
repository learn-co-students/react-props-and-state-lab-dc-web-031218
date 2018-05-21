import React from 'react';

import Filters from './Filters';
import PetBrowser from './PetBrowser';



class App extends React.Component {
  constructor() {
    super();


    this.state = {
      pets: [],
      adoptedPets: [],
      filters: {
        type: 'all',
      }
    };
  }

  changeSelect = (type) => {
    console.log(type)
    this.setState({
      filters: {
        type: type
      }
    })
  }

  findPets = () => {
    let URL = '/api/pets'

    if(this.state.filters.type !== 'all') {
      URL = `/api/pets?type=${this.state.filters.type}`
    }
    fetch(URL)
    .then(resp => resp.json())
    .then(pets =>
      this.setState({pets})
    )
  }

  handleApdoptPet = (e) => {
    // debugger
    this.setState({
      adoptedPets: [...this.state.adoptedPets, e.target.parentElement.id]
    })
  }

  render() {
    return (
      <div className="ui container">
        <header>
          <h1 className="ui dividing header">React Animal Shelter</h1>
        </header>
        <div className="ui container">
          <div className="ui grid">
            <div className="four wide column">
              <Filters filters={this.state.filters} onChangeType={this.changeSelect} onFindPetsClick={this.findPets}/>
            </div>
            <div className="twelve wide column">
              <PetBrowser handleAdoption={this.handleApdoptPet} pets={this.state.pets} adoptedPets = {this.state.adoptedPets} onAdoptPet={this.handleApdoptPet} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
