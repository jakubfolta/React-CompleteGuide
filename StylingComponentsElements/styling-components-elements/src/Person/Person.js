import React from 'react';
import styled from 'styled-components';
import classes from './Person.css';

const person = (props) => {
  return (
    <div className={classes.Person} >
      <p onClick={props.click}>I'm a {props.name}. And I'm a it {props.age} years old.</p>
      <p>{props.children}</p>
      <input type="text" onChange={props.changed} value={props.name}/>
    </div>
  )
};

export default person;