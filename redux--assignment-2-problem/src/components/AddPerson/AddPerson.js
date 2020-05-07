import React, { Component } from 'react';

import './AddPerson.css';

class addPerson extends Component {
  state = {
    name: '',
    age: null
  }

  render() {
    return (
      <div className="AddPerson">
        <input
          style={{display: 'block', margin: '5px auto'}}
          type="text"
          placeholder="Name"
          value={this.state.name}
          onChange={this.onNameChangeHandler}  />
        <input
          style={{display: 'block', margin: '5px auto'}}
          type="number"
          placeholder="Age"
          value={this.state.age}
          onChange={this.onAgeChangeHandler}  />
        <button onClick={this.props.personAdded}>Add Person</button>
      </div>
    );
  }
}

export default addPerson;