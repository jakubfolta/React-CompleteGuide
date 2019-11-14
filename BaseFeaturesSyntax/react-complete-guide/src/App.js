import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { name: 'Max', age: 32 },
      { name: 'Dom', age: 23 },
      { name: 'Bryan', age: 35 }
    ],
    otherState: 'Other value.'
  };

  switchNameHandler = () => {
    // console.log('Was clicked !');
    // DON'T DO THIS this.state.persons[0].name = 'Jake';
    this.setState({
      persons: [
        { name: 'Maxyn', age: 32 },
        { name: 'Dom', age: 38 },
        { name: 'Bryan', age: 35 }
      ]
    })
  };

  render() {
    return (
      <div className="App">
        <h1>Hi, I'm React app.</h1>
        <p>This is working.</p>
        <button onClick={this.switchNameHandler}>Switch name!</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age}>My hobbies: Racing</Person>
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age} />
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hi I\'m React appppp!!!'));
  }
}

export default App;