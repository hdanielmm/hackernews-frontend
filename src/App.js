import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Table from './Table';
import axios from 'axios';

const PostsApi = axios.create({
  baseURL: "http://hackernews-servidor.herokuapp.com",
  timeout: 1000,
});

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
        <Table 
          postsData={this.state.posts}
          removePost={this.removePost.bind(this)} 
        />
      </div>
    );
  }
}


export default App;
