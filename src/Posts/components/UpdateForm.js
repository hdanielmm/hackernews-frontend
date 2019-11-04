import React, { useState } from 'react';
import PostsApi from '../../api';

const UpdateForm = ({ updatePost }) => {
  const [title, setTitle] = useState("");
  const [url, setUrl] = useState("");
  console.log("primer url: ", url)
  // const { updatePost } = props;

  // if (updatePost.length) {
  //   // setTitle(updatePost[0].title);
  //   // setUrl(updatePost[0].url)
  //   // setTitle(updatePost.map(e => e.title));
  //   // setUrl(updatePost.map(e => e.url));
  // }

  const handleChange = e => {
    
    const { name, value } = e.target;
    console.log("ENTRA", name + " - " + value);

    if (name === "title") {
      setTitle(value);
      console.log("setTitle: ", {title})
    }
    if (name === 'url') {
      setUrl(value);
      console.log("setUrl: ", {url})
    }
  }

  async function handleSubmit(e) {
    e.preventDefault();
    const data = { title, url }
    console.log("data: ", data);
    const id = updatePost[0]._id;
    console.log("id: ", id)
    await PostsApi.patch("/posts/" + id, data);
    console.log("Updated post successfully");

    // setTitle("");
    // setUrl("");

  }

  if (updatePost.length) {
    return (

      <>
        <h2>Update form</h2>
        <form onSubmit={handleSubmit}>
          <label>Title</label>
          <input type="text"
            id="title"
            name="title"
            // value={updatePost[0].title}
            value={title}
            onChange={handleChange}
          />
          <label>Url</label>
          <input type="text"
            id="url"
            name="url"
            // value={updatePost[0].url}
            value={url}
            onChange={handleChange}
          />
          <button type="submit">Update</button>
        </form>
      </>
    );

  } else {
    return (<h3>Nothing to update</h3>);
  }
}

export default UpdateForm;