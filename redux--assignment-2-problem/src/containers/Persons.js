import React, { Component } from 'react';
import { connect } from 'react-redux';

import Person from '../components/Person/Person';
import AddPerson from '../components/AddPerson/AddPerson';
import * as actionTypes from '../store/actions';

class Persons extends Component {
    render () {
        return (
            <div>
                <AddPerson personAdded={this.props.onPersonAddedHandler} />
                {this.props.persons.map(person => (
                    <Person
                        key={person.id}
                        name={person.name}
                        age={person.age}
                        clicked={() => this.props.onPersonDeleteHandler(person.id)}/>
                ))}
            </div>
        );
    }
}

const mapStateToProps = state => {
  return {
    persons: state.persons
  };
}

const mapDispatchToProps = dispatch => {
  return {
    onPersonAddedHandler: () => dispatch({type: actionTypes.ADD}),
    onPersonDeleteHandler: (id) => dispatch({type: actionTypes.DELETE, personId: id})
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Persons);