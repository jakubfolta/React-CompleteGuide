import React, { Component } from 'react';
import axios from 'axios';

import Post from '../../components/Post/Post';
import FullPost from '../../components/FullPost/FullPost';
import NewPost from '../../components/NewPost/NewPost';
import './Blog.css';

class Blog extends Component {
    state = {
      posts: []
    }
    componentDidMount() {
      axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(response => {
          this.setState({
            posts: response.data
          });
          console.log(response);
        });
    }
    render () {
      const postsList = this.state.posts.map(post => {
        return <Post key={post.id} title={post.title} author={post.userId}/>
      })
        return (
            <div>
                <section className="Posts">
                    {postsList};
                </section>
                <section>
                    <FullPost />
                </section>
                <section>
                    <NewPost />
                </section>
            </div>
        );
    }
}

export default Blog;