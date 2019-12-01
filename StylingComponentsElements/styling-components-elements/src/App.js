import React, { Component } from 'react';
import './App.css';
import styled from 'styled-components';
import Person from './Person/Person';

const StyledButton = styled.button`
  background-color: ${props => props.alt ? 'red' : 'green'};
  color: blue;
  font: inherit;
  border: 2px solid blue;
  padding: 8px;
  border-radius: 25px;
  box-shadow: 2px 2px 3px;
  cursor: pointer;
  &:hover {
    background-color: ${props => props.alt ? 'orange' : 'grey'};;
    color: black;
`

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
    }

    const classes = []

    if (this.state.persons.length <= 2 && this.state.persons.length > 0) {
      classes.push('red');
    }
    if (this.state.persons.length === 1) {
      classes.push('bold');
    }

    return (
        <div className="App">
        <h1>Hi, I'm React app.</h1>
          <p className={classes.join(' ')}>This is working.</p>
          <StyledButton alt={this.state.showPersons}
            onClick={this.togglePersonsHandler}>Show persons!</StyledButton>
          {persons}
        </div>
    );
  }
}

export default App;
