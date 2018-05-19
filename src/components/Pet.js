import React from 'react';


/*
  props = {
     pet: {
        age:
        gender:"male"
        id:
        name:
        type:
        weight:
     }
     onAdoptPet: cbf()
  }
*/
class Pet extends React.Component {
  constructor() {
    super();
  }
  handleAdoptEvent = (e) =>{
    this.props.onAdoptPet(this.props.pet.id);
  }
  render() {
    let {age, gender, name, type, weight} = this.props.pet;
    // console.log(this.props.isAdopted)
    return (
      <div className="card" style={{margin: 10, border: "1px dotted blue"}}>
        <div className="content">
          <a className="header"> {name}{gender === "male" ? '♂' : '♀'}</a>
          <div className="meta">
            <span className="date">{type}</span>
          </div>
          <div className="description">
            <p>Age: {age} </p>
            <p>Weight: {weight}</p>
          </div>
        </div>
        <div className="extra content">
          {this.props.isAdopted? 
           <button className="ui disabled button">
            Already adopted
           </button> :
           <button className="ui primary button"
                   onClick={this.handleAdoptEvent}>
            Adopt pet
           </button>
          }
          
        </div>
      </div>
    );
  }
}

export default Pet;
