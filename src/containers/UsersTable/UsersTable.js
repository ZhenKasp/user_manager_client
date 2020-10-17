import React, { Component } from 'react';
import axios from 'axios';
import Table from 'react-bootstrap/Table';
import classes from './UsersTable.module.css';
import UserTable from '../../components/UserRow/UserRow';
import Form from 'react-bootstrap/Form';
import Button from '../../components/Button/Button';

class UsersTable extends Component {
  state = {
    selectedCheckboxes: [],
    users: [],
    allChecked: false,
    anyChanged: false
  }
  
  allCheckedHandler = () => {
    this.setState({ allChecked: !this.state.allChecked, anyChanged: true })
  }

  cleanSelectedChecboxes = () => {
    this.setState({selectedCheckboxes: [], allChecked: false, anyChanged: false})
  }

  checkedHandler = () => {
    const checked = !this.state.allChecked
    if (checked) {
      this.setState({ selectedCheckboxes: this.state.users.map(user => user.id) });
    } else if (!this.state.anyChanged) {
      this.setState({ selectedCheckboxes: [] });
    }
    this.setState({ allChecked: checked, anyChanged: false});
  }

  handler = (value) => {
    this.setState({ users: value });
  }

  
  setChecked = (id) => {
    let checkboxes = this.state.selectedCheckboxes
    checkboxes.push(id);
    this.setState({ selectedCheckboxes: checkboxes, anyChanged: true });
  }

  unsetChecked = (id) => {
    let checkboxes = this.state.selectedCheckboxes
    let index = checkboxes.indexOf(id);
    checkboxes.splice(index, 1);
    this.setState({ selectedCheckboxes: checkboxes });
  }

  componentDidMount(){
    try {
      axios.get('http://localhost:8000/api/v1', { headers: { authorization: localStorage.getItem('token') }})
      .then(res => {
        if (res.data.error) {
          this.props.createFlashMessage(res.data.error, res.data.variant);
          this.props.setToken({token: res.data.token});
          this.props.viewHandler("signin");
        } else {
          this.setState({ users: res.data.users });
        }
      });
    } catch (err) {
      this.props.createFlashMessage(err.message, "danger");
    }
  }

  controlButtons = (buttons) => {
    return (
      Object.keys(buttons).map(key => (
        <Button
          key={key}
          type={key}
          variant={buttons[key]}
          selectedCheckboxes={this.state.selectedCheckboxes}
          createFlashMessage={this.props.createFlashMessage} 
          viewHandler={this.props.viewHandler}
          setUsers={this.handler} 
          cleanSelectedChecboxes={this.cleanSelectedChecboxes} 
          setToken={this.props.setToken} 
        />     
      ))
    )
  }
 
  render() {
    const buttons = {block: "warning", unblock: "success", delete: "danger"};
    const { users, allChecked, anyChanged, selectedCheckboxes } = this.state;

    return (
      <div className={classes.UsersTable}>
        <div className={classes.Tools}>
          {this.controlButtons(buttons)}
        </div>
        <div className={classes.Table}>
          <Table striped bordered hover size="sm" className={classes.UsersTable}>
            <thead>
              <tr>
                <th><Form.Check type="checkbox" checked={allChecked} onChange={this.checkedHandler} /></th>
                <th>#</th>
                <th>Username</th>
                <th>Full Name</th>
                <th>Email</th>
                <th>Registration Date</th>
                <th>Last Login Date</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {users.map(user => (
                <UserTable
                  key={user.id}
                  user={user}
                  allChecked={allChecked}
                  anyChanged={anyChanged}
                  resetAllChecked={this.allCheckedHandler}
                  setChecked={this.setChecked}
                  unsetChecked={this.unsetChecked}
                  selectedCheckboxes={selectedCheckboxes}
                  checked={selectedCheckboxes.includes(user.id)}
                />
              ))}
            </tbody>
          </Table>
        </div>
      </div>
    )
  }
}

export default UsersTable;
