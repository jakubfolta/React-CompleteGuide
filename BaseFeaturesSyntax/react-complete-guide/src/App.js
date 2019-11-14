import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person';

// class App extends Component {
const app = props => {
  // render() {
  const [personsState, setPersonsState] = useState({
    persons: [
      { name: 'Max', age: 32 },
      { name: 'Dom', age: 23 },
      { name: 'Bryan', age: 35 }
    ]
  });

  const [otherState, setOtherState] = useState('some other value');

  const switchNameHandler = () => {
    // console.log('Was clicked !');
    // DON'T DO THIS this.state.persons[0].name = 'Jake';
    setPersonsState({
      persons: [
        { name: 'Maxyn', age: 32 },
        { name: 'Dom', age: 38 },
        { name: 'Bryan', age: 35 }
      ]
    });
  };

    return (
      <div className="App">
        <h1>Hi, I'm React app.</h1>
        <p>This is working.</p>
        <button onClick={switchNameHandler}>Switch name!</button>
        <Person name={personsState.persons[0].name} age={personsState.persons[0].age} />
        <Person name={personsState.persons[1].name} age={personsState.persons[1].age}>My hobbies: Racing</Person>
        <Person name={personsState.persons[2].name} age={personsState.persons[2].age} />
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hi I\'m React appppp!!!'));
  }
// }

export default app;




