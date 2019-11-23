import React, { Component } from 'react';
import './App.css';
import Radium from 'radium';
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

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => p.id === id);

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
    const style = {
      backgroundColor: 'green',
      color: 'white',
      font: 'inherit',
      border: '2px solid blue',
      padding: '8px',
      borderRadius: '25px',
      boxShadow: '2px 2px 3px',
      cursor: 'pointer',
      ':hover': {
        backgroundColor: 'lightgreen',
        color: 'black'
      }
    };

    let persons = null;

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

      style.backgroundColor = "yellow";
      style[':hover'] = {
        backgroundColor: 'gold',
        color: 'black'
      }
    }

    let classes = [];

    if (this.state.persons.length <= 2 && this.state.persons.length !== 0) {
      classes.push('red');
    }
    if (this.state.persons.length === 1) {
      classes.push('bold');
    }

    classes = classes.join(' ');

    return (
      <div className="App">
        <h1>Hi, I'm React app.</h1>
        <p className={classes}>This is working.</p>
        <button
          style={style}
          onClick={this.togglePersonsHandler}>Show persons!</button>
        {persons}
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hi I\'m React appppp!!!'));
  }
}

export default Radium(App);

