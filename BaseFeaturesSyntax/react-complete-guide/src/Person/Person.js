import React from 'react';

const person = (props) => {
  return (
    <div>
      <p onClick={props.click}>I'm a {props.name}. And I'm a {props.age} years old.</p>
      <p>{props.children}</p>
      <input type="text" onChange={} />
    </div>
  )
};

export default person;