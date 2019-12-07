import React from 'react';
import classes from './Cockpit.module.css';

const cockpit = props => {
  const assignClasses = [];
  let btnClasses = '';

  if (props.persons.length <= 2 && props.persons.length > 0) {
    assignClasses.push(classes.Red);
  }
  if (props.persons.length === 1) {
    assignClasses.push(classes.Bold);
  }
  if (props.showPersons) {
    btnClasses = classes.Red;
  }

  return (
    <div className={classes.Cockpit}>
      <h1>Hi, I'm React app.</h1>
      <p className={assignClasses.join(' ')}>This is working.</p>
      <button className={btnClasses} onClick={props.toggle}>Show persons!</button>
    </div>
  )
};

export default cockpit;