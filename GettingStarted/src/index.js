import React from 'react';
import ReactDOM from 'react-dom';

function Person(props) {
  return (
    <div className="person">
      <h1>props.name</h1>
      <p>Age: props.age</p>
    </div>
  );
}

React.DOM.render(<Person name="Jacob" age="32"/>, document.querySelector('#p1'))