import React, { Component } from 'react';
import { Route, NavLink, withRouter } from 'react-router-dom';

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
                    <li><NavLink to="/">Home</NavLink></li>
                    <li><NavLink to={{
                      pathname: this.props.match.url + 'new-post',
                      hash: '#submit',
                      search: '?quick-submit=true'
                    }}>New post</NavLink></li>
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