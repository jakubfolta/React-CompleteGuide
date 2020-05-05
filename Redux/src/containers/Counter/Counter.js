import React, { Component } from 'react';
import { connect } from 'react-redux';

import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';
import * as actionTypes from './../../store/actions';

class Counter extends Component {
    render () {
        return (
            <div>
              <CounterOutput value={this.props.ctr} />
              <CounterControl label="Increment" clicked={this.props.onIncrementCounter} />
              <CounterControl label="Decrement" clicked={this.props.onDecrementCounter} />
              <CounterControl label="Add 5" clicked={this.props.onAdd5} />
              <CounterControl label="Subtract 5" clicked={this.props.onSubtract5} />
              <hr />
              <button onClick={() => this.props.onStoreResult(this.props.ctr)}>Store result</button>
              <ul style={{listStyle: 'none', padding: '0', margin: '10px 0 0'}}>
                {this.props.storedResults.map(e => (
                  <li
                    key={e.id}
                    style={{cursor: 'pointer'}}
                    onClick={() => this.props.onDeleteResult(e.id)} >
                    {e.value}</li>
                ))}

              </ul>
            </div>
        );
    }
}

const mapStateToProps = state => {
  return {
    ctr: state.ctr.counter,
    storedResults: state.res.results
  };
}

const mapDispatchToProps = dispatch => {
  return {
    onIncrementCounter: () => dispatch({type: actionTypes.INCREMENT}),
    onDecrementCounter: () => dispatch({type: actionTypes.DECREMENT}),
    onAdd5: () => dispatch({type: actionTypes.ADD, payload: { value: 5 }}),
    onSubtract5: () => dispatch({type: actionTypes.SUBTRACT, payload: { value: 5 }}),
    onStoreResult: (res) => dispatch({type: actionTypes.STORE, result: res}),
    onDeleteResult: (id) => dispatch({type: actionTypes.DELETE, elId: id})
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);