import React, { Component } from 'react';
import { Route, NavLink, withRouter, Switch, Redirect } from 'react-router-dom';

import './Blog.css';
import Posts from './Posts/Posts';
import asyncComponent from '../../hoc/asyncComponent';
// import NewPost from './NewPost/NewPost';

const AsyncNewPost = asyncComponent(() => {
  return import('./NewPost/NewPost');
})

class Blog extends Component {
    state = {
      auth: true
    }

    render () {
      console.log(this.props)
        return (
            <div>
              <header className="Blog">
                <nav>
                  <ul>
                    <li><NavLink
                      exact
                      to='/posts'
                      activeClassName="active"
                      activeStyle={{
                        color: 'red'
                      }} >Posts</NavLink></li>
                    <li><NavLink
                      to={{
                        pathname: this.props.match.url + 'new-post',
                        // pathname: 'new-post',
                        hash: '#submit',
                        search: '?quick-submit=true'
                      }}
                      >New Post</NavLink></li>
                  </ul>
                </nav>
              </header>
              <Switch>
                {this.state.auth ? <Route path="/new-post" component={AsyncNewPost} /> : null}
                <Route path="/posts" component={Posts} />
                <Route render={() => <h1>Not found</h1>} />
                {/* <Redirect from="/" to="/posts" /> */}
                {/* <Route path="/" component={Posts} /> */}
              </Switch>
            </div>
        );
    }
}

export default withRouter(Blog);