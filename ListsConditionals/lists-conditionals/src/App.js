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
    otherState: 'some other value',
    showPersons: false
  }

  nameChangedHandler = event => {
    this.setState({
      persons: [
        { name: 'Max', age: 32 },
        { name: event.target.value, age: 28 },
        { name: 'Bryan', age: 35 }
      ]
    })
  }

  deletePersonHandler = personIndex => {
    const persons = this.state.persons;
    persons.splice(personIndex, 1);
    this.setState({persons: persons})
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  }

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

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <Person
              click={() => this.deletePersonHandler(index)}
              name={person.name}
              age={person.age} />
          })}
        </div>
      );
    }

    return (
      <div className="App">
        <h1>Hi, I'm React app.</h1>
        <p>This is working.</p>
        <button
        style={style}
        onClick={this.togglePersonsHandler}>Show list!</button>
        {persons}
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hi I\'m React appppp!!!'));
  }
}

export default App;




