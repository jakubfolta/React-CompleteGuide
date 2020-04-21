import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

class Course extends Component {
  state = {
    title: null,
    id: null
  }

  componentDidMount() {
    this.loadQuery();
  }

  componentDidUpdate() {
    this.loadQuery();
  }

  loadQuery = () => {
    const id = +(this.props.match.params.id);

    if (id) {
      if (!this.state.id || this.state.id !== +id) {
        const query = new URLSearchParams(this.props.location.search);
        let title = null;
        for (let param of query.entries()) {
          title = param[1];
        }
        this.setState({title: title, id: id});
      }
    }
  }

  render () {
    console.log(this.props);
      return (
          <div>
              <h1>{this.state.title}</h1>
              <p>You selected the Course with ID: {this.state.id}</p>
          </div>
      );
  }
}

export default withRouter(Course);