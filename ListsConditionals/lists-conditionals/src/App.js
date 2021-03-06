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
    otherState: 'some other value',
    showPersons: false
  }

  nameChangedHandler = (e, id) => {
    const personIndex = this.state.persons.findIndex(el => el.id === id);

    const person = {
      ...this.state.persons[personIndex]
    }
    person.name = e.target.value;

    const updatedPersons = [...this.state.persons];
    updatedPersons[personIndex].name = e.target.value;

    this.setState({persons: updatedPersons});
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
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '2px solid blue',
      padding: '8px',
      borderRadius: '25px',
      boxShadow: '2px 2px 3px',
      cursor: 'pointer',
      outline: 'none'
    };

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <Person
              click={this.deletePersonHandler.bind(this, index)}
              name={person.name}
              age={person.age}
              key={person.id}
              changed={e => this.nameChangedHandler(e, person.id)} />
          })}
        </div>
      );
    }

    const assignClasses = [];

    if (this.state.persons.length <= 2 && this.state.persons.length > 0) {
      assignClasses.push("Red");
    }
    if (this.state.persons.length === 1) {
      assignClasses.push("Bold");
    }


    return (
      <div className="App">
        <h1>Hi, I'm React app.</h1>
        <p>This is working.</p>
        <button
          className={assignClasses.join(' ')}
          onClick={this.togglePersonsHandler}>Show persons!</button>
        {persons}
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hi I\'m React appppp!!!'));
  }
}

export default App;

