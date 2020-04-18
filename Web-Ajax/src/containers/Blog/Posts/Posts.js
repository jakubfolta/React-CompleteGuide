import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './Posts.css';
import axios from '../../../axios';
import Post from '../../../components/Post/Post';

class Posts extends Component {
  state = {
    posts: []
  }

  componentDidMount() {
    console.log(this.props);
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
      return (
        
      )
    });

    return (
      <section className="Posts">
          {postsList}
      </section>
    )
  }
}

export default Posts;