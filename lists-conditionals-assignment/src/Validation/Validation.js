import React from 'react';

const validation = props => {
  const message = props.length > 5 ? 'Text OK' : 'Text too short!';

  return (
    <div>
      <p>{message}</p>
    </div>
  )
}

export default validation;