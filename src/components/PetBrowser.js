import React from 'react';
import Pet from './Pet';

class PetBrowser extends React.Component {
  constructor(props){
  	super(props);
  }
  
  isAdopted(pet){
    //if the id of the pet is in the array of adoptedPets
      return this.props.adoptedPets.includes(pet.id) 
  }

  //onAdoptPet prop
  //receives pets prop
  renderPets = (pets) => {
    return pets.map(pet =>{
       return <Pet key={pet.id} pet={pet} onAdoptPet={this.props.onAdoptPet} isAdopted={this.isAdopted(pet)} /> 
    })
  }

  render() {
    return (
      <div className="ui cards">
      {this.renderPets(this.props.pets)}
      </div>
    );
  }
}

export default PetBrowser;
