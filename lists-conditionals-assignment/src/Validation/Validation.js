import React from 'react';

const validation = props => {
  const length = props.length;
  const lengthMessage = length >= 5 ? 'Proper length of text' : 'Too short length of text';

  return (
    <div>
      <p>{lengthMessage}</p>
    </div>
  )
};

export default validation;