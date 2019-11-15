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
    otherState: 'some other value'
  }

  switchNameHandler = newName => {
    // console.log('Was clicked !');
    // DON'T DO THIS this.state.persons[0].name = 'Jake';
    this.setState({
      persons: [
        { name: newName, age: 32 },
        { name: 'Dom', age: 38 },
        { name: 'Bryan', age: 35 }
      ]
    })
  }

  nameChangedHandler = event => {
    this.setState({
      persons: [
        { name: 'Max', age: 32 },
        { name: event.target.value, age: 28 },
        { name: 'Bryan', age: 35 }
      ]
    })
  };

  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '2px solid blue',
      padding: '8px',
      borderRadius: '25px',
      boxShadow: '2px 2px 3px',
      cursor: 'pointer'
    };

    return (
      <div className="App">
        <h1>Hi, I'm React app.</h1>
        <p>This is working.</p>
        <button
        style={style}
        onClick={() => this.switchNameHandler('Gladio')}>Switch name!</button>
        <Person
          name={this.state.persons[0].name} age={this.state.persons[0].age} />
        <Person
          name={this.state.persons[1].name} age={this.state.persons[1].age} click={this.switchNameHandler.bind(this, 'Noct')}
          changed={this.nameChangedHandler} >My hobbies: Racing</Person>
        <Person
          name={this.state.persons[2].name} age={this.state.persons[2].age} />
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hi I\'m React appppp!!!'));
  }
}

export default App;




