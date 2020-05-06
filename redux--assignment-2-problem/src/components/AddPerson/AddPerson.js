import React, { Component } from 'react';

import './AddPerson.css';

class addPerson extends Component {
  state = {
    name: null
  }

  render() {
    return (
      <div className="AddPerson">
        <input
          style={{display: 'block', margin: '5px auto'}}
          type="text"
          placeholder="Name"
          value={this.state.name}
          onChange={this.props.change}  />
          <button onClick={this.props.personAdded}>Add Person</button>
        </div>
    )
  }
}

export default addPerson;