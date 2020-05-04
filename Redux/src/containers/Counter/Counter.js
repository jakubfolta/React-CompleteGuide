import React, { Component } from 'react';
import { connect } from 'react-redux';

import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';

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
              <button onClick={this.props.onStoreResult}>Store result</button>
              <ul style={{padding: '0', margin: '10px 0 0'}}>
                {this.props.storedResults.map(e => (
                  <li
                    key={e.id}
                    style={{listStyle: 'none', cursor: 'pointer'}}
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
    ctr: state.counter,
    storedResults: state.results
  };
}

const mapDispatchToProps = dispatch => {
  return {
    onIncrementCounter: () => dispatch({type: 'INCREMENT'}),
    onDecrementCounter: () => dispatch({type: 'DECREMENT'}),
    onAdd5: () => dispatch({type: 'ADD', payload: { value: 5 }}),
    onSubtract5: () => dispatch({type: 'SUBTRACT', payload: { value: 5 }}),
    onStoreResult: () => dispatch({type: 'STORE'}),
    onDeleteResult: (id) => dispatch({type: 'DELETE', elId: id})
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);