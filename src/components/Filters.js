import React from 'react';

/*
  props = {
    filters: {type: 'all' | 'cat' | 'dog' | 'micropig'},
    onFindPetsClick = cbf(),
    onChangeType = cbf()
  }
*/

class Filters extends React.Component {
  constructor() {
    super();
  }

  handleClick = (e) =>{
    this.props.onFindPetsClick();
  }

  handleFieldChange = (e)=>{
    this.props.onChangeType(e.target.value);
  }


  render() {
    return (
      <div className="ui form"
           style={{margin:10, border: "1px solid green"}}>
        <h3>Animal type</h3>

        <div className="field">
          <select name="type" id="type"
                  onChange={this.handleFieldChange}
                  value={this.props.filters.type}>
            <option value="all">All</option>
            <option value="cat">Cats</option>
            <option value="dog">Dogs</option>
            <option value="micropig">Micropigs</option>
          </select>
        </div>

        <div className="field">
          <button className="ui secondary button"
                  onClick={this.handleClick}>
              Find pets
          </button>
        </div>
      </div>
    );
  }
}

export default Filters;
