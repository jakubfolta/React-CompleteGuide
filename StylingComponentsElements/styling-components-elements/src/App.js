import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { id: 'dsa', name: 'Max', age: 32 },
      { id: 'eqww', name: 'Dom', age: 23 },
      { id: 'dafc', name: 'Bryan', age: 35 }
    ],

    showPersons: false
  }

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    };
    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState( { persons: persons} )
  }

  deletePersonHandler = personIndex => {
    // const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons: persons})
  }

  togglePersonsHandler = () => {
    const showPersons = this.state.showPersons;
    this.setState({showPersons: !showPersons})
  }

  render() {
    let persons = null;
    let btnClasses = '';


    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <Person
              click={() => this.deletePersonHandler(index)}
              name={person.name}
              age={person.age}
              key={person.id}
              changed={event => this.nameChangedHandler(event, person.id)}/>
          })}
        </div>
      );
      btnClasses = 'Red';
    }

    const assignClasses = [];
    if (this.state.persons <= 2) {
      assignClasses.push('Red');
    }

    return (
      <div className="App">
        <h1>Hi, I'm React app.</h1>
        <p className={assignClasses.join(' ')}>This is working.</p>
        <button className={btnClasses} onClick={this.togglePersonsHandler}>Show persons!</button>
        {persons}
      </div>
    );
  }
}

export default App;
