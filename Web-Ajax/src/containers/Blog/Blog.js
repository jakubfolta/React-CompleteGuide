import React, { Component } from 'react';
import { Route, NavLink, withRouter } from 'react-router-dom';

import './Blog.css';
import Posts from './Posts/Posts';
import NewPost from './NewPost/NewPost';
import FullPost from './FullPost/FullPost';

class Blog extends Component {
    render () {
      console.log(this.props)
        return (
            <div>
              <header className="Blog">
                <nav>
                  <ul>
                    
                    <li><NavLink
                      to={{
                        // pathname: this.props.match.url + 'new-post',
                        pathname: 'new-post',
                        hash: '#submit',
                        search: '?quick-submit=true'
                      }}
                      >New Post</NavLink></li>
                  </ul>
                </nav>
              </header>
              <Route path="/" exact component={Posts} />
              <Route path="/new-post" component={NewPost} />
              <Route path="/:id" exact component={FullPost} />
            </div>
        );
    }
}

export default withRouter(Blog);