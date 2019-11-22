import React from 'react';

import './Char.css';

const char = props => {
  return (
    <div className="Char">
      <p onClick={props.delete}>{props.char}</p>
    </div>
  )
}

export default char;
