import React from 'react';

import './Char.css';

const char = props => {
  return (
    <div className="Char">
      <p>{props.char}</p>
    </div>
  )
}

export default char;




















































// import React from 'react';
//
// import './Char.css';
//
// const char = props => {
//
//   return (
//     <div className="Char">
//       <p index={props.index} onClick={props.click}>{props.char}</p>
//     </div>
//   )
// };
//
// export default char;