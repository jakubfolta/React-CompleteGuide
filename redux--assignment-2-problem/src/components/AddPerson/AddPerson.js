import React, { Component } from 'react';

import './AddPerson.css';

class addPerson extends Component {
  state = {
    name: '',
    age: ''
  }

  nameChangeHandler = (e) => {
    this.setState({name: e.target.value});
  }

  ageChangeHandler = (e) => {
    this.setState({age: e.target.value});
  }

  render() {
    console.log(this.state.name);
    return (
      <div className="AddPerson">
        <input
          style={{display: 'block', margin: '5px auto'}}
          type="text"
          placeholder="Name"
          value={this.state.name}
          onChange={this.nameChangeHandler}  />
        <input
          style={{display: 'block', margin: '5px auto'}}
          type="number"
          placeholder="Age"
          value={this.state.age}
          onChange={this.ageChangeHandler}  />
          <button onClick={() => this.props.personAdded(this.state.name, this.state.age)}>Add Person</button>
        </div>
    )
  }
}

export default addPerson;