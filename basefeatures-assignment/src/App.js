import React, { Component } from 'react';
import './App.css';

import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';

class App extends Component {
  state = {
    userName: 'Barret'
  }

  changeStateHandler = e => {
    this.setState = {
      userName: e.target.value
    }
  }

  render() {
    return (
      <div className='App'>
        <UserOutput name = 'Jaccob' />
        <UserOutput name = {this.state.userName} />
      </div>
    )
  }
}

export default App;








// import React, { Component } from 'react';
// import './App.css';
// import UserInput from './UserInput/UserInput';
// import UserOutput from './UserOutput/UserOutput';
//
// class App extends Component {
//   state = {
//     userName: 'Noctis'
//   }
//
//   changeState = e => {
//     this.setState({
//       userName: e.target.value
//     })
//   }
//
//   render() {
//     const style = {
//       backgroundColor: 'hsl(195, 100%, 50%)',
//       borderRadius: '25px',
//       border: '2px solid hsl(25, 100%, 50%)',
//       textAlign: 'center',
//       width: '10%'
//     }
//
//     return (
//       <div className="App">
//         <h1>Hello, I'm React app !!!</h1>
//         <button style={style}>Click me !</button>
//         <UserOutput userName="Ignis" />
//         <UserOutput userName="Gladio" />
//         <UserOutput userName={this.state.userName} />
//         <UserOutput userName="Promto" />
//         <UserInput nameChange={this.changeState} userName={this.state.userName}/>
//       </div>
//     );
//   }
// }
//
// export default App;
