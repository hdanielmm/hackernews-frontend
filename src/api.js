import axios from 'axios';

const PostsApi = axios.create({
  baseURL: "http://hackernews-servidor.herokuapp.com",
  timeout: 1000,
});

export default PostsApi;