import React from 'react';

const userInput = props => {
  return (
    <div>
      <input
        style={props.style}
        type="text"
        value={props.name}
        onChange={props.change} />
    </div>
  )
}

export default userInput;


















// import React from 'react';
//
// const userInput = props => {
//   return (
//     <div>
//       <input type="text" onChange={props.nameChange} value={props.userName}/>
//     </div>
//   )
// };
//
//
// export default userInput;