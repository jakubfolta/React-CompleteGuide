import React, { Component } from 'react';
import Validation from './Validation/Validation';
import Char from './Char/Char';

import './App.css';

class App extends Component {
  state = {
    userInput: ''
  }

  userInputHandler = e => {
    const input = e.target.value;
    this.setState({
      userInput: input
    })
  }

  deleteCharHandler = index => {
    const inputArr = this.state.userInput.split('');
    inputArr.splice(index, 1);
    const newInput = inputArr.join('');

    this.setState({userInput: newInput})
  }

  render() {
    const inputLength = this.state.userInput.length;

    const charList = this.state.userInput.split('').map((l, index) => {
          return <Char
            letter={l}
            key={index}
            delete={() => this.deleteCharHandler(index)}></Char>
        })

    return (
      <div className="App">
        <ol>
          <li>Create an input field in App component with a change listener which outputs the length of the entered text below it (e.g. in a paragraph).</li>
          <li>Create a new component (=> ValidationComponent) which receives the text length as a prop</li>
          <li>Inside the ValidationComponent, either output "Text too short" or "Text long enough" depending on the text length (e.g. take 5 as a minimum length)</li>
          <li>Create another component (=> CharComponent) and style it as an inline box (=> display: inline-block, padding: 16px, text-align: center, margin: 16px, border: 1px solid black).</li>
          <li>Render a list of CharComponents where each CharComponent receives a different letter of the entered text (in the initial input field) as a prop.</li>
          <li>When you click a CharComponent, it should be removed from the entered text.</li>
        </ol>
        <p>Hint: Keep in mind that JavaScript strings are basically arrays!</p>
        <hr />

        <input type="text" onChange={this.userInputHandler} value={this.state.userInput}></input>
        <p>{inputLength}</p>

        <Validation input={inputLength}></Validation>
        {charList}
      </div>
    )
  }
}

export default App;