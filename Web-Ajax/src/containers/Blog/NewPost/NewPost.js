import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import axios from 'axios';

import './NewPost.css';

class NewPost extends Component {
    state = {
        title: '',
        content: '',
        author: 'Max',
        submitted: false
    }

    postDataHandler = () => {
        const post = {
          title: this.state.title,
          content: this.state.content,
          author: this.state.author
        }

        axios.post('/posts', post)
            .then(response => console.log(response));
        this.props.history.push('/posts');
        // this.setState({submitted: true})
    }

    render () {
      let redirect = null;
      if (this.state.submitted) {
        redirect = <Redirect to="/posts" />
      }
        return (
            <div className="NewPost">
                {/* <Redirect to={this.state.submitted ? "/posts" : "/new-post"} /> */}
                {redirect}
                <h1>Add a Post</h1>
                <label>Title</label>
                <input type="text" value={this.state.title} onChange={e => this.setState({title: e.target.value})}></input>
                <label>Content</label>
                <textarea rows="4" value={this.state.content} onChange={e => this.setState({content: e.target.value})}></textarea>
                <label>Author</label>
                <select value={this.state.author} onChange={(event) => this.setState({author: event.target.value})}>
                    <option value="Max">Max</option>
                    <option value="Manu">Manu</option>
                </select>
                <button onClick={this.postDataHandler}>Add Post</button>
            </div>
        );
    }
}

export default NewPost;