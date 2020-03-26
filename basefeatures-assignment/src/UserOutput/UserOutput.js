import React from 'react';

import './Output.css';

const userOutput = props => {
  return (
    <div className="Output">
      <p>My name is {props.name}</p>
    </div>
  )
}

export default userOutput;











// import React from 'react';
//
// import './Output.css';
//
// const userOutput = props => {
//   return (
//     <div class='Output'>
//       <p>My name is {props.userName}.</p>
//     </div>
//   )
// }
//
//
// export default userOutput;