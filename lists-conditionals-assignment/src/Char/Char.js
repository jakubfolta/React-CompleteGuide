import React from 'react';

import './Char.css';

const char = props => {

  return (
    <div className="Char">
      <p index={props.index}>{props.char}</p>
    </div>
  )
};


export default char;