import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import { Route } from 'react-router-dom';

import './Posts.css';
import axios from '../../../axios';
import Post from '../../../components/Post/Post';
import FullPost from '../FullPost/FullPost';

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
    this.props.history.push('/posts/' + id);
  }

  render() {
    console.log(this.props);
    let postsList = this.state.error ? <p className='Error'>Something went wrong</p> :
    this.state.posts.map(post => {
      return (
        // <Link to={'/' + post.id} key={post.id}>
          <Post
            key={post.id}
            title={post.title}
            author={post.author}
            selected={() => this.selectPostHandler(post.id)} />
        // </Link>
      )
    });

    return (
      <div>
        <section className="Posts">
          {postsList}
        </section>
        <Route path={this.props.match.url + "/:id"} exact component={FullPost} />
      </div>
    )
  }
}

export default Posts;