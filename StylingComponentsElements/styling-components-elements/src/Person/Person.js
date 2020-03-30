import React from 'react';
import styled from 'styled-components';
// import classes from './Person.css';

const StyledDiv = styled.div`           // Styled components
  background-color: hsl(129, 100%, 50%);
  width: 80%;
  margin: 10px auto;
  box-shadow: 3px 3px 10px;
  border: 2px solid hsl(180, 23%, 50%);
  padding: 16px;
  text-align: center;
  overflow: hidden;

  @media (min-width: 500px) {
    width: 30%;
    box-shadow: 0 9px 0 -6px hsl(0, 0%, 0%);
  }
`

const person = (props) => {

  return (
    <StyledDiv>
      <p onClick={props.click}>I'm a {props.name}. And I'm a it {props.age} years old.</p>
      <p>{props.children}</p>
      <input type="text" onChange={props.changed} value={props.name}/>
    </StyledDiv>
  )
};

export default person;