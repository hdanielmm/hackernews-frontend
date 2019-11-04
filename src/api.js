import axios from 'axios';

const PostsApi = axios.create({
  baseURL: "http://hackernews-servidor.herokuapp.com",
  // baseURL: "http://localhost:3001",
  timeout: 1000,
});

export default PostsApi;