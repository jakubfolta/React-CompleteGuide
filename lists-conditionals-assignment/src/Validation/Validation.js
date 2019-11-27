import React from 'react';

const validation = props => {
  const message = props.length > 5 ? 'Text length is fine' : 'Text too short';

  return (
    <div>
      {message}
    </div>
  )
};

export default validation;