import React, { Component } from 'react';
import './App.css';

import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';

class App extends Component {
  state = {
    userName: 'Barret'
  }

  changeStateHandler = e => {
    this.setState({
        userName: e.target.value
    })
  }

  render() {
    const style = {
      padding: '5px',
      border: '1px solid black',
      borderRadius: '10px',
    };

    return (
      <div className='App'>
        <UserInput
          style={style}
          change={this.changeStateHandler}
          name={this.state.userName} />

        <UserOutput name="Jaccob" />
        <UserOutput name={this.state.userName} />
      </div>
    )
  }
}

export default App;