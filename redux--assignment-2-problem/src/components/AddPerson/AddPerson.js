import React, { Component } from 'react';

import './AddPerson.css';

class addPerson extends Component {
  state = {
    name: '',
    age: ''
  }

  NameChangeHandler = ( e ) => {
    this.setState({name: e.target.value});
  }
  AgeChangeHandler = ( e ) => {
    this.setState({age: e.target.value});
  }

  render() {
    return (
      <div className="AddPerson">
        <input
          style={{display: 'block', margin: '5px auto'}}
          type="text"
          placeholder="Name"
          value={this.state.name}
          onChange={this.NameChangeHandler}  />
        <input
          style={{display: 'block', margin: '5px auto'}}
          type="number"
          placeholder="Age"
          value={this.state.age}
          onChange={this.AgeChangeHandler}  />
        <button onClick={() => this.props.personAdded(this.state.name, this.state.age)}>Add Person</button>
      </div>
    );
  }
}

export default addPerson;