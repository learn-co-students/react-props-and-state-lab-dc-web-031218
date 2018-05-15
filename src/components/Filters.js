import React from "react";

class Filters extends React.Component {
  handleSelect = e => {
    this.props.onChangeType(e.target.value);
  };

  handleClick = e => {
    this.props.onFindPetsClick();
  };

  render() {
    // console.log(this.props.filters.type);
    return (
      <div className="ui form">
        <h3>Animal type</h3>
        <div className="field">
          <select
            name="type"
            id="type"
            onChange={this.handleSelect}
            value={this.props.filters.type}
          >
            <option value="all">All</option>
            <option value="cat">Cats</option>
            <option value="dog">Dogs</option>
            <option value="micropig">Micropigs</option>
          </select>
        </div>

        <div className="field">
          <button className="ui secondary button" onClick={this.handleClick}>
            Find pets
          </button>
        </div>
      </div>
    );
  }
}

export default Filters;
