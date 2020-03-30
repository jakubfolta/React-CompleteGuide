import React, { Component } from 'react';
import classes from './App.module.css';
import Radium from 'radium';
import styled from 'styled-components';
import Person from './Person/Person';

const StyledButton = styled.button`
  color: ${props => props.alt ? 'black' : 'red'};
  text-transform: uppercase;
  font-weight: bold;
  font-size: 16px;
  padding: 10px;
  border: 1px solid black;
  border-radius: 10px;
  background-color: grey;
  outline: none;
  cursor: pointer;

  &:hover {
    background-color: ${props => props.alt ? 'grey' : 'lightgrey'};
  }
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
    const hClasses = [classes.Heading];

    const style = {             // RADIUM
      backgroundColor: 'blue',
      color: 'white',
      ':hover': {
        backgroundColor: 'green'
      },

      '@media screen and (max-width: 500px)': {
        backgroundColor: 'yellow'
      }
    }

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

      hClasses.push(classes.Green);
    }

    const assignClasses = [];

    if (this.state.persons.lengfth <= 2 && this.state.persons.length > 0) {
      assignClasses.push(classes.Red);
    }
    if (this.state.persons.length === 1) {
      assignClasses.push(classes.Bold);
    }

    return (
        <div className={classes.App}>
          <h1>Hi, I'm React app.</h1>
          <h2 style={style}>Hi, It's cool.</h2>
          <p className={assignClasses.join(' ')}>This is working.</p>
          <StyledButton
            alt={this.state.showPersons}
            onClick={this.togglePersonsHandler}>Show persons! </StyledButton>
            <h3 className={hClasses.join(' ')}>See you later!</h3>
          {persons}
        </div>
    );
  }
}

export default Radium(App); // RADIUM
