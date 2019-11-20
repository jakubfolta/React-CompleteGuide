import React from 'react';

const validationComponent = props => {
  const length = props.length;
  const lengthMessage = length >= 5 ? 'Proper length of text' : 'Too short length of text';

  return (
    <div>
      <p>{lengthMessage}</p>
    </div>
  )
}

export default validationComponent;