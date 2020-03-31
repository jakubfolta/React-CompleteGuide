import React, { useEffect } from 'react';

import classes from './Cockpit.module.css';

const Cockpit = props => {
  useEffect(() => {
    console.log('[Cockpit.js] useEffect');
    // Http request...
    setTimeout(() => {
      alert('Saved data to cloud.')
    }, 1000)
    return () => {
      console.log('[Cockpit.js] cleanup work in useEffect');
    };
  }, []); // [props.persons]

  const assignClasses = [];
  let btnClass = '';

  if (props.showPersons) {
    btnClass = classes.Red;
  }

  if (props.persons.length <= 2 && props.persons.length > 0) {
    assignClasses.push(classes.Red);
  }
  if (props.persons.length === 1) {
    assignClasses.push(classes.Bold);
  }

  return (
    <div className={classes.Cockpit}>
      <h1>{props.title}</h1>
      <p className={assignClasses.join(' ')}>This is working.</p>
      <button
        className={btnClass}
        onClick={props.toggle}>Show persons! </button>
    </div>
  )
}

export default Cockpit;
