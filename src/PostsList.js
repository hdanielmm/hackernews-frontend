import React, { Component } from 'react';
import CreateButton from './Posts/components/CreateButton';

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
const ListBody = ({postsData, removePost}) => {
  const rows = postsData.map((row, index) => {
    return (
      <tr key={index}>
        <td>{row._id}</td>
        <td>{row.title}</td>
        <td>{row.url}</td>
        <td>
          <button onClick={() => removePost(row._id)}>Delete</button>
          <CreateButton />
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
    const { postsData, removePost } = this.props;
    return (
      <table>
        <ListHeader />
        <ListBody 
          postsData={postsData}
          removePost={removePost}
        />
      </table>
    )
  }
}

export default PostsLists;