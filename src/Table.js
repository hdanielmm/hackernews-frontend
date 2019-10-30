import React, { Component } from 'react';

const TableHeader = () => {
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
const TableBody = ({postsData, removePost}) => {
  const rows = postsData.map((row, index) => {
    return (
      <tr key={index}>
        <td>{row._id}</td>
        <td>{row.title}</td>
        <td>{row.url}</td>
        <td>
          <button onClick={() => removePost(row._id)}>Delete</button>
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

class Table extends Component {
 
  
  render() {
    const { postsData, removePost } = this.props;
    return (
      <table>
        <TableHeader />
        <TableBody 
          postsData={postsData}
          removePost={removePost}
        />
      </table>
    )
  }
}

export default Table;