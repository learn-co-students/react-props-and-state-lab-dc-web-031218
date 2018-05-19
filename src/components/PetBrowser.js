import React from 'react';

import Pet from './Pet';

/*
	props ={
		pets: petsArr,
		onAdoptPet: cbf()
		adoptedPets: []
	}
*/

class PetBrowser extends React.Component {
  render() {
  	console.log("Adopted pets:", this.props.adoptedPets)
  	// console.log("PetBrowser::Render()", this.props.pets)
    return (
      <div className="ui cards" style={{margin: 10, border: "1px solid red"}}>
       	   {this.props.pets.map(pet=> <Pet key={pet.id} pet={pet}
       	   								onAdoptPet={this.props.onAdoptPet}
       	   								isAdopted={this.props.adoptedPets.includes(pet.id) ? true : false}
       	   							     /> )}
      </div>
    );
  }
}

export default PetBrowser;
