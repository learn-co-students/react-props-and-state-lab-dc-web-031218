import React from "react";

import Filters from "./Filters";
import PetBrowser from "./PetBrowser";

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

  onChangeType = value => {
    this.setState(
      {
        filters: {
          ...this.state.filters,
          type: value
        }
      }
      // () => console.log(value, this.state)
    );
  };

  onFindPetsClick = e => {
    let url =
      this.state.filters.type === `all`
        ? `/api/pets`
        : `/api/pets?type=${this.state.filters.type}`;

    fetch(url)
      .then(resp => resp.json())
      .then(json => {
        this.setState(
          {
            pets: json
          }
          // () => console.log(this.state.pets)
        );
      });
  };

  onAdoptPet = id => {
    this.state.adoptedPets.push(id);
    this.setState(
      {
        adoptedPets: [...this.state.adoptedPets]
      }
      // () => console.log("set", this.state.adoptedPets)
    );
  };

  render() {
    // console.log(this.state.filters.type);
    return (
      <div className="ui container">
        <header>
          <h1 className="ui dividing header">React Animal Shelter</h1>
        </header>
        <div className="ui container">
          <div className="ui grid">
            <div className="four wide column">
              <Filters
                filters={this.state.filters}
                onFindPetsClick={this.onFindPetsClick}
                onChangeType={this.onChangeType}
              />
            </div>
            <div className="twelve wide column">
              <PetBrowser
                pets={this.state.pets}
                adoptedPets={this.state.adoptedPets}
                onAdoptPet={this.onAdoptPet}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
