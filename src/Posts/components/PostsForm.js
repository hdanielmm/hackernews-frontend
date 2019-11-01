import React, { useState } from 'react';
import axios from 'axios';
import PostsApi from '../../api';

const PostsForm = () => {
  const [title, setTitle] = useState("");
  const [url, setUrl] = useState("");

  const handleChange = e => {
    const { name, value } = e.target;

    if (name === 'title') {
      setTitle(value)
    }
    if (name === 'url') {
      setUrl(value)
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    
    const data = { title, url, Date }

    PostsApi.post("/posts", data);
    console.log("Created post successfully");

    setTitle("");
    setUrl("");

  }

  return (
    <form onSubmit={handleSubmit}>
      <label>Title</label>
      <input
        type="text"
        id="title"
        name="title"
        value={title}
        onChange={handleChange}
      />
      <label>Url</label>
      <input
        type="text"
        id="url"
        name="url"
        value={url}
        onChange={handleChange}
      />
      <button type="submit" >Send</button>
    </form>
  );
}


export default PostsForm;