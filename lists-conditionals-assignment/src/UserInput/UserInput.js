import React from 'react';

const userInput = props => {
  return (
    <div>
      <input type="text" onChange={props.nameChange} value={props.userName}/>
    </div>
  )
};


export default userInput;