import React from "react";

import Filters from "./Filters";
import PetBrowser from "./PetBrowser";
import { getAll } from "../data/pets.js";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      pets: [],
      adoptedPets: [],
      filters: {
        type: "all"
      }
    };
  }

  componentDidMount() {
    this.setState({ pets: getAll() });
  }

  onChangeType = e => {
    e.persist();
    this.setState({
      filters: { type: e.target.value }
    });
  };

  onFindPetsClick = e => {
    // should repopulate pets shown based on filter
    if (this.state.filters.type === "all") {
      console.log("all pets");
      this.setState({
        pets: getAll()
      });
    } else {
      console.log("only ", this.state.filters.type);
      this.setState({
        pets: getAll().filter(pet => pet.type === this.state.filters.type)
      });
    }
  };

  onAdoptPet = e => {
    // get the pet id
    let id = e.target.dataset.id;
    let adoptedArr = [...this.state.adoptedPets];
    adoptedArr.push(id);
    // add it
    this.setState({
      adoptedPets: adoptedArr
    });
  };

  render() {
    return (
      <div className="ui container">
        <header>
          <h1 className="ui dividing header">React Animal Shelter</h1>
        </header>
        <div className="ui container">
          <div className="ui grid">
            <div className="four wide column">
              <Filters
                onChangeType={this.onChangeType}
                onFindPetsClick={this.onFindPetsClick}
              />
            </div>
            <div className="twelve wide column">
              <PetBrowser
                onAdoptPet={this.onAdoptPet}
                filter={this.state.filters.type}
                pets={this.state.pets}
                adoptedPets={this.state.adoptedPets}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
