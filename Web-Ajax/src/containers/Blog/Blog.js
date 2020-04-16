import React, { Component } from 'react';

import './Blog.css';
import Posts from './Posts/Posts';
import NewPost from './NewPost/NewPost';


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
            </div>
        );
    }
}

export default Blog;