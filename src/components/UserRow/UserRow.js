import React  from 'react';
import Form from 'react-bootstrap/Form';

const userRow = (props) => {
  const user = props.user;

  const handleChanged = (event) => {
    if (props.allChecked) props.resetAllChecked();

    const id = props.user.id;
    if (event.target.checked === true) {
      props.setChecked(id);
    } else {
      props.unsetChecked(id);
    }
  }

  return (
    <tr>
      <th>
        <Form.Check 
          type="checkbox"
          id={user.id}
          checked={props.checked}
          onChange={(e) => handleChanged(e)}
        />
      </th>
      <td>{user.id}</td>
      <td>{user.username}</td>
      <td>{user.firstname + " " + user.lastname}</td>
      <td>{user.email}</td>
      <td>{new Date(user.createdAt).toLocaleString()}</td>
      <td>{new Date(user.lastSignInAt).toLocaleString()}</td>
      <td>{user.status}</td>
    </tr>
  )
}
 
export default userRow;