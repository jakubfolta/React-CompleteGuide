import React, { Component } from 'react';
import './App.css';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';

class App extends Component {
  state = {
    userName: 'Noctis'
  };

  render() {
    return (
      <div>
        <h1>Hello, I'm React app !!!</h1>
        <UserOutput userName="Ignis" />
        <UserOutput userName="Gladio" />
        <UserOutput userName={this.state.userName} />
        <UserOutput userName="Promto" />
      </div>
    );
  }
}

export default App;
