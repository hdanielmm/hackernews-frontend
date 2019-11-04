import React, { Component } from 'react';
// import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import './App.css';
import PostsLists from './PostsList';
import PostsApi from './api';
import PostsForm from './Posts/components/PostsForm';
import UpdateForm from './Posts/components/UpdateForm';

class App extends Component {
  state = {
    posts: [],
    post: {},
    error: null,
    loading: false,
  };

  async componentDidMount() {
    this.setState({
      loading: true
    });

    try {
      const { data } = await PostsApi.get("/posts");
      this.setState({ posts: data.posts });
    } catch (error) {
      console.log(error);
      this.setState({ error });
    } finally {
      this.setState({
        loading: false
      });
      console.log("la petición terminó");
    }
  }

  async removePost(id) {

    const { posts } = this.state

    this.setState({
      posts: posts.filter((post) => (post._id !== id))
    });

    try {
      const response = await PostsApi.delete("/posts/" + id);
      console.log("Deleted", response.data)
    } catch (error) {
      console.log(error)
    }
  }

  // Send this imformation to UpdateForm
  updatePost = (id) => {

    const { posts } = this.state;

    this.setState({
      post: posts.filter(e => e._id === id)
    });
  }

  render() {
    console.log("app", this.state.post)
    return (
      <div className="container">
        <PostsForm />
        <UpdateForm updatePost={this.state.post} />
        <PostsLists
          postsData={this.state.posts}
          removePost={this.removePost.bind(this)}
          updatePost={this.updatePost}
        />
      </div>

    );
  }
}

export default App;
