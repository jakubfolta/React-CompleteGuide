import React, { Component } from 'react';
import axios from 'axios';

import Post from '../../components/Post/Post';
import FullPost from '../../components/FullPost/FullPost';
import NewPost from '../../components/NewPost/NewPost';
import './Blog.css';

class Blog extends Component {
    state = {
      posts: [],
      selectedPost: null
    }

    componentDidMount() {
      axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(response => {
          const randomNum = Math.floor(Math.random() * response.data.length);
          const posts = response.data.slice((randomNum), randomNum + 4);
          const updatedPosts = posts.map(post => {
            return {
              ...post,
              author: 'Max'
            }
          })
          this.setState({
            posts: updatedPosts
          });
        });
    }

    selectPostHandler = id => {
      this.setState({selectedPost: id});
    }

    render () {
      const postsList = this.state.posts.map(post => {
        return <Post
          key={post.id}
          title={post.title}
          author={post.author}
          selected={() => this.selectPostHandler(post.id)} />
      })
        return (
            <div>
                <section className="Posts">
                    {postsList};
                </section>
                <section>
                    <FullPost
                      id={this.state.selectedPost}
                      />
                </section>
                <section>
                    <NewPost />
                </section>
            </div>
        );
    }
}

export default Blog;