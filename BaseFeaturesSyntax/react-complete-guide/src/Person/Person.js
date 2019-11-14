import React from 'react';

const person = (props) => {
  return (
    <div>
      <p>I'm a {props.name}! And I'm a {props.age} years old.</p>
      <p>{props.children}</p>
    </div>
  )

};

export default person;