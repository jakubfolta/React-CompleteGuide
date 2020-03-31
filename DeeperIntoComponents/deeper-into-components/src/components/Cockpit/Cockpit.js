import React, { useEffect } from 'react';

import classes from './Cockpit.module.css';

const Cockpit = props => {
  useEffect(() => {
    console.log('[Cockpit.js] useEffect');
    // Http request...
    const timer = setTimeout(() => {
      alert('Saved data to cloud.')
    }, 1000)
    return () => {
      clearTimeout(timer);
      console.log('[Cockpit.js] cleanup work in useEffect');
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

  return [
    <h1 key='ds'>{props.title}</h1>,
    <p key='dse' className={assignClasses.join(' ')}>This is working.</p>,
    <button
      key='og'
      className={btnClass}
      onClick={props.toggle}>Show persons! </button>

  ]



}

export default React.memo(Cockpit);
