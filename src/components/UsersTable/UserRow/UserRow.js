import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';

class UserRow extends Component {
  state = {
    checked: this.props.allChecked
  }
  
  componentWillReceiveProps(props) {
    if (props.allChecked) this.setState({checked: true})
    if (!props.anyChanged && !props.allChecked) this.setState({checked: false})
  }

  handleChanged = () => {
    if (this.props.allChecked) this.props.resetAllChecked();
    const newState = !this.state.checked;
    const id = this.props.user.id;
    if (newState === true) {
      this.props.setChecked(id);
    } else {
      this.props.unsetChecked(id);
    }
    this.setState({checked: newState});
  }

  render() {
    const user = this.props.user;
    const checked = this.state.checked;

    return (
      <tr>
        <th>
          <Form.Check 
            type="checkbox"
            id={user.id}
            checked={checked}
            onChange={this.handleChanged}
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
}
 
export default UserRow;