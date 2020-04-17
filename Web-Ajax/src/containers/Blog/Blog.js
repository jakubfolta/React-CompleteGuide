import React, { Component } from 'react';
import { Route, Link, withRouter } from 'react-router-dom';

import './Blog.css';
import Posts from './Posts/Posts';
import NewPost from './NewPost/NewPost';

class Blog extends Component {
    render () {
      console.log(this.props)
        return (
            <div>
              <header className="Blog">
                <nav>
                  <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to={{
                      pathname: this.props.match.url + 'new-post',
                      hash: '#submit',
                      search: '?quick-submit=true'
                    }}>New post</Link></li>
                  </ul>
                </nav>
              </header>
              <Route path="/" exact component={Posts} />
              <Route path="/new-post" component={NewPost} />
            </div>
        );
    }
}

export default withRouter(Blog);