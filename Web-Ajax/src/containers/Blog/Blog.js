import React, { Component } from 'react';
// import axios from 'axios';
import axios from '../../axios';

import Post from '../../components/Post/Post';
import FullPost from '../../components/FullPost/FullPost';
import NewPost from '../../components/NewPost/NewPost';
import './Blog.css';

class Blog extends Component {
    state = {
      posts: [],
      selectedPost: null,
      error: false
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
          this.setState({error: true});
        });
    }

    selectPostHandler = id => {
      this.setState({selectedPost: id});
    }

    render () {
      let postsList = this.state.error ? <p className='Error'>Something went wrong</p> :
      this.state.posts.map(post => {
        return <Post
          key={post.id}
          title={post.title}
          author={post.author}
          selected={() => this.selectPostHandler(post.id)} />
      });

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