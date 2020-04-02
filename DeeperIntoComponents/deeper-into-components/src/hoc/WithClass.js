import React from 'react';

const withClass = (WrappedComponent, className) => {
  return (
    <div className={className}>
      <WrappedComponent/>
    </div>
  );
};

export default withClass;

// import React from 'react';
//
// const WithClass = props => (
//   <div className={props.classes}>{props.children}</div>
// )
//
// export default WithClass;