import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

class Course extends Component {
  state = {
    title: null
  }

  componentDidMount() {
    const query = new URLSearchParams(this.props.location.search);
    for (let param of query.entries()) {
      this.setState({title: param[1]})
    }
  }

  render () {
    console.log(this.state);
      return (
          <div>
              <h1>{this.state.title}</h1>
              <p>You selected the Course with ID: {this.props.match.params.id}</p>
          </div>
      );
  }
}

export default withRouter(Course);