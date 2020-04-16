import React, { Component } from 'react';

import './Blog.css';
import Posts from './Posts/Posts';
import NewPost from './NewPost/NewPost';
import { Route } from 'react-router-dom';

class Blog extends Component {
    render () {
        return (
            <div>
              <header className="Blog">
                <nav>
                  <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/new-post">New post</a></li>
                  </ul>
                </nav>
              </header>
              <Route path="/" exact render={() => <Posts />} />
              <Route path="/" exact render={() => <Posts />} />
            </div>
        );
    }
}

export default Blog;