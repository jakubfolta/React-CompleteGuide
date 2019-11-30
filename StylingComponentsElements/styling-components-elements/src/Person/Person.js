import React from 'react';
import styled from 'styled-components';

// import './Person.css'

const StyledDiv = styled.div`
  width: 80%;
  margin: 10px auto;
  box-shadow: 5px 5px 10px;
  border: 2px solid hsl(100, 43%, 50%);
  padding: 16px;
  text-align: center;
`

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
    <StyledDiv style={style}>
      <p onClick={props.click}>I'm a {props.name}. And I'm a it {props.age} years old.</p>
      <p>{props.children}</p>
      <input type="text" onChange={props.changed} value={props.name}/>
    </StyledDiv>
  )
};

export default person;