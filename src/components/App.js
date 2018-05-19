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

  onFindPetsClick = () =>{
    // console.log("App::onFindPetsClick()");
    let flag = this.state.filters.type;
    let url;
    switch (flag){
      case 'all':
        url = '/api/pets';
        break;
      case 'cat':
        url = '/api/pets?type=cat';
        break;
      case 'dog':
        url = '/api/pets?type=dog';
        break;
      case 'micropig':
        url = '/api/pets?type=micropig';
        break;
    }
    fetch(url)
        .then(r=> r.json())
        .then(results => {
          this.setState({
            pets: results
          });
        });
  }

  onChangeType = (filter) =>{
    console.log("App::onChangeType() ", filter);
    this.setState({
      filters:{
        ...this.state.filters,
        type: filter
      }
    },()=> console.log("new type: ", this.state.filters.type))
  }

  onAdoptPet = (petId) =>{
    console.log("App::onAdoptPet()");
    this.setState({
      adoptedPets: [...this.state.adoptedPets, petId]
    });
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
              <Filters filters={this.state.filters}
                       onFindPetsClick={this.onFindPetsClick}
                       onChangeType={this.onChangeType}/>
            </div>
            <div className="twelve wide column">
              <PetBrowser pets={this.state.pets}
                          onAdoptPet={this.onAdoptPet}
                          adoptedPets={this.state.adoptedPets}/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
