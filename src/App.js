import React, { Component } from 'react';
import './App.css';
import PostsLists from './PostsList';
import PostsApi from './api';
import PostsForm from './Posts/components/PostsForm';


class App extends Component {
  state = {
    posts: [],
    error: null,
    loading: false
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
      const response = await PostsApi.delete("/posts/"+id);
      console.log("Deleted", response.data)
    } catch (error) {
      console.log(error)
    }   
  }

  render() {
    return (
      <div className="container">
        {console.log("return",this.state.posts)}
        <PostsForm />
        <PostsLists 
          postsData={this.state.posts}
          removePost={this.removePost.bind(this)} 
        />
      </div>
    );
  }
}

export default App;
