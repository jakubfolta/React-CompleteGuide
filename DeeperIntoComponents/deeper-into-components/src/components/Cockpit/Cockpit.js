import React, { useEffect, useRef, useContext } from 'react';

import classes from './Cockpit.module.css';
import AuthContext from '../../context/auth-context';

const Cockpit = props => {
  const toggleBtnRef = useRef(null);
  const authContext = useContext(AuthContext);

  useEffect(() => {
    console.log('[Cockpit.js] useEffect');
    // Http request...
    // const timer = setTimeout(() => {
    //   alert('Saved data to cloud.')
    // }, 1000)
    toggleBtnRef.current.click();
    return () => {
      // clearTimeout(timer);
      // console.log('[Cockpit.js] cleanup work in useEffect');
    };
  }, []); // [props.persons]

  useEffect(() => {
    console.log('[Cockpit.js] 2nd useEffect');
    return () => {
      console.log('[Cockpit.js] cleanup work in 2nd useEffect');
    };
  });

  const assignClasses = [];
  let btnClass = '';

  if (props.showPersons) {
    btnClass = classes.Red;
  }

  if (props.personsLength <= 2 && props.personsLength > 0) {
    assignClasses.push(classes.Red);
  }
  if (props.personsLength === 1) {
    assignClasses.push(classes.Bold);
  }

  return (
    <div className={classes.Cockpit}>
      <h1>{props.title}</h1>
      <p className={assignClasses.join(' ')}>This is working.</p>
      <button
        ref={toggleBtnRef}
        className={btnClass}
        onClick={props.toggle}>Show persons! </button>
        {context => <button onClick={context.login}>Log in</button>}
    </div>
  )
}

export default React.memo(Cockpit);
