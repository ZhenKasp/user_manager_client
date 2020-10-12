import React from 'react';

const userColum = (props) => {
  const user = props.user;
  return (
    <tr>
      <td>{user.id}</td>
      <td>{user.username}</td>
      <td>{user.firstname + " " + user.lastname}</td>
      <td>{user.email}</td>
      <td>{user.username}</td>
      <td>{user.username}</td>
      <td>{user.status}</td>
    </tr>
  )
}
 

export default userColum;