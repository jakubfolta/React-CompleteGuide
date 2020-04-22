import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

class Course extends Component {
  state = {
    id: null,
    title: null
  }

  componentDidMount() {
    this.loadData();
  }

  componentDidUpdate() {
    this.loadData();
  }

  loadData = () => {
    const id = +(this.props.match.params.id);
    if (id) {
      if (!this.state.id || (this.state.id && this.state.id !== id)) {
        const query = new URLSearchParams(this.props.location.search);
        for (let param of query.entries()) {
          this.setState({title: param[1], id: id})
        }
      }
    }
  }

    render () {
      console.log(this.state);
        return (
            <div>
                <h1>{this.state.title}</h1>
                <p>You selected the Course with ID: {this.state.id}</p>
            </div>
        );
    }
}

export default withRouter(Course);