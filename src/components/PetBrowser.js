import React from "react";

import Pet from "./Pet";

class PetBrowser extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="ui cards">
        {this.props.pets.map(pet => {
          return (
            <Pet
              key={pet.id}
              data-id={pet.id}
              petInfo={pet}
              adoptedPets={this.props.adoptedPets}
              onAdoptPet={this.props.onAdoptPet}
            />
          );
        })}
      </div>
    );
  }
}

export default PetBrowser;
