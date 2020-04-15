import React, { Component } from 'react';

import './Posts.css';
import axios from '../../../axios';
import Post from '../../../components/Post/Post';

class Posts extends Component {
  state = {
    posts: [],
    selectedPost: null
  }

  componentDidMount() {
  axios.get('/posts')
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
    })
    .catch(error => {
      console.log(error);
      // this.setState({error: true});
    });
  }

  selectPostHandler = id => {
    this.setState({selectedPost: id});
  }

  render() {
    let postsList = this.state.error ? <p className='Error'>Something went wrong</p> :
    this.state.posts.map(post => {
      return <Post
        key={post.id}
        title={post.title}
        author={post.author}
        selected={() => this.selectPostHandler(post.id)} />
    });

    return (
      <section className="Posts">
          {postsList};
      </section>
    )
  }
}

export default Posts;