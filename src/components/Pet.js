import React from "react";
import { Card } from "semantic-ui-react";

class Pet extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Card>
        <div className="content">
          <a className="header">
            Pet: {this.props.petInfo.name} (gender:{" "}
            {this.props.petInfo.gender === "male" ? "♂" : "♀"})
          </a>
          <div className="meta">
            <span className="date">{this.props.petInfo.type}</span>
          </div>
          <div className="description">
            <p>Age: {this.props.petInfo.age}</p>
            <p>Weight: {this.props.petInfo.weight}</p>
          </div>
        </div>
        <div className="extra content">
          {this.props.adoptedPets.includes(this.props.petInfo.id) ? (
            <button className="ui disabled button">Already adopted</button>
          ) : (
            <button
              data-id={this.props.petInfo.id}
              className="ui primary button"
              onClick={this.props.onAdoptPet}
            >
              Adopt pet
            </button>
          )}
        </div>
      </Card>
    );
  }
}

export default Pet;
