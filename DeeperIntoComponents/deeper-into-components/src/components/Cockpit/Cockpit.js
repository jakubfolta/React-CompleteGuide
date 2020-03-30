import React from 'react';

import classes from './Cockpit.module.css';

const Cockpit = props => {

  const assignClasses = [];

  if (props.persons.length <= 2 && props.persons.length > 0) {
    assignClasses.push(classes.Red);
  }
  if (props.persons.length === 1) {
    assignClasses.push(classes.Bold);
  }

  return (
    <div className={classes.Cockpit}>
      <h1>Hi, I'm React app.</h1>
      <p className={assignClasses.join(' ')}>This is working.</p>
      <button
        onClick={props.toggle}>Show persons! </button>
    </div>
  )
}


export default Cockpit;
