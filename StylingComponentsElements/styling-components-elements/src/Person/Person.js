import React from 'react';

import './Person.css'

const person = (props) => {
  const style = {
   '@media (min-width: 500px)': {
     width: '50%',
     textAlign: 'left',
     padding: '16px',
     margin: '60px auto',
   }
  };

  return (
    <div className="Person" style={style}>
      <p onClick={props.click}>I'm a {props.name}. And I'm a it {props.age} years old.</p>
      <p>{props.children}</p>
      <input type="text" onChange={props.changed} value={props.name}/>
    </div>
  )
};

export default person;