import React from "react";

import Pet from "./Pet";

class PetBrowser extends React.Component {
  render() {
    return (
      <div className="ui cards">
        {this.props.pets.map((pet, i) => {
          let isAdopted = this.props.adoptedPets.includes(pet.id);
          return (
            <div key={i}>
              <Pet
                onAdoptPet={this.props.onAdoptPet}
                pet={pet}
                isAdopted={isAdopted}
              />
            </div>
          );
        })}
      </div>
    );
  }
}

export default PetBrowser;
