import React, { Component, Fragment } from 'react';
// import Aux from '../../../hoc/Auxiliary';
import PropTypes from 'prop-types';
import withClass from '../../../hoc/withClass'
import classes from './Person.module.css';

class Person extends Component {
  constructor(props) {
    super(props)
      this.inputElRef = React.createRef();
  }

  componentDidMount() {
    this.inputElRef.current.focus();
  }

  render() {
    console.log('[Person.js] rendering')
    return (
      <Fragment>
        {this.props.isAuth ? <p>Authenticated</p> : <p>Please Log in!</p>}
        <p onClick={this.props.click}>I'm a {this.props.name}. And I'm {this.props.age} years old.</p>
        <p>{this.props.children}</p>
        <input
          type="text"
          onChange={this.props.changed}
          // ref={inp => {this.inpElement = inp}}
          ref={this.inputElRef}
          value={this.props.name}
          />
      </Fragment>
    );
  }
}

Person.propTypes = {
  click: PropTypes.func,
  name: PropTypes.string,
  age: PropTypes.number,
  changed: PropTypes.func
}

export default withClass(Person, classes.Person);