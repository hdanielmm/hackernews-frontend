import React, { Component } from 'react';

const ListHeader = () => {
  return (
    <thead>
      <tr>
        <th>Id</th>
        <th>Post</th>
        <th>Url</th>
      </tr>
    </thead>
  );
}
const ListBody = ({postsData, removePost, updatePost}) => {
  const rows = postsData.map((row, index) => {
    return (
      <tr key={index}>
        <td>{row._id}</td>
        <td>{row.title}</td>
        <td>{row.url}</td>
        <td>
          <button onClick={() => removePost(row._id)}>Delete</button>
          <button onClick={() => updatePost(row._id)}>Update</button>
        </td>
      </tr>
    );
  });
  return (
    <tbody>
      {rows}
    </tbody>
  );
}

class PostsLists extends Component {

  render() {

    const { postsData, removePost, updatePost } = this.props;

    return (
      <table>
        <ListHeader />
        <ListBody 
          postsData={postsData}
          removePost={removePost}
          updatePost={updatePost}
        />
      </table>
    )
  }
}

export default PostsLists;