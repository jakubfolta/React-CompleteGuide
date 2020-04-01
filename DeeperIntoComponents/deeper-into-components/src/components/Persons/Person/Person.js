import React, { Component, Fragment } from 'react';
// import Aux from '../../../hoc/Auxiliary';
import withClass from '../../../hoc/withClass'
import classes from './Person.module.css';

class Person extends Component {
  render() {
    console.log('[Person.js] rendering')
    return (
      <Fragment>
        <p onClick={this.props.click}>I'm a {this.props.name}. And I'm a it {this.props.age} years old.</p>
        <p>{this.props.children}</p>
        <input type="text" onChange={this.props.changed} value={this.props.name}/>
      </Fragment>
    );
  }
}

export default withClass(Person, classes.Person);