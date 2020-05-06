import React, { Component } from 'react';
import { connect } from 'react-redux';

import Person from '../components/Person/Person';
import AddPerson from '../components/AddPerson/AddPerson';
import * as actionTypes from '../store/actions';

class Persons extends Component {
    render () {
        return (
            <div>
                <AddPerson personAdded={this.props.onAddPersonHandler} />
                {this.props.pers.map(person => (
                    <Person
                        key={person.id}
                        name={person.name}
                        age={person.age}
                        clicked={() => this.props.onDeletePersonHandler(person.id)}/>
                ))}
            </div>
        );
    }
}

const mapStateToProps = state => {
  return {
    pers: state.persons
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onAddPersonHandler: (name, age) => dispatch({type: actionTypes.ADD, name: name, age: age}),
    onDeletePersonHandler: (id) => dispatch({type: actionTypes.DELETE, id: id})
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Persons);