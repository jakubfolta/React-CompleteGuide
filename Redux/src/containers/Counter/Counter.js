import React, { Component } from 'react';
import { connect } from 'react-redux';
import { increment } from '../../store/actions/actions';
import { decrement } from '../../store/actions/actions';
import { add } from '../../store/actions/actions';
import { subtract } from '../../store/actions/actions';
import { store } from '../../store/actions/actions';
import { remove } from '../../store/actions/actions';

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
    onIncrementCounter: () => dispatch(increment()),
    onDecrementCounter: () => dispatch(decrement()),
    onAdd5: () => dispatch(add()),
    onSubtract5: () => dispatch(subtract()),
    onStoreResult: (res) => dispatch(store(res)),
    onDeleteResult: (id) => dispatch(remove(id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);