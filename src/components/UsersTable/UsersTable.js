import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Table from 'react-bootstrap/Table';
import classes from './UsersTable.module.css';
import UserTable from './UserRow/UserRow';
import Form from 'react-bootstrap/Form';
import Button from './Button/Button';

const UsersTable = (props) => {
  const [selectedCheckboxes, setSelectedCheckboxes] = useState([]);
  const [users, setUsers] = useState([]);
  const [allChecked, setAllChecked] = useState(false);
  const [anyChanged, setAnyChanged] = useState(false);
  const buttons = {block: "warning", unblock: "success", delete: "danger"};

  const allCheckedHandler = () => {
    setAllChecked(!allChecked);
    setAnyChanged(true);
  }

  const checkedHandler = () => {
    const checked = !allChecked
    if (checked) {
      setSelectedCheckboxes(users.map(user => user.id));
    } else if (!anyChanged) {
      setSelectedCheckboxes([])
    }
    setAllChecked(checked);
    if (!checked) setAnyChanged(false);
  }

  const controlButtons = (buttons) => {
    return (
      Object.keys(buttons).map(key => (
        <Button key={key} variant={buttons[key]}>
          {key}
        </Button>
      ))
    )
  }

  const setChecked = (id) => {
      selectedCheckboxes.push(id);
      setSelectedCheckboxes(selectedCheckboxes);
  }

  const unsetChecked = (id) => {
    let index = selectedCheckboxes.indexOf(id);
    selectedCheckboxes.splice(index, 1)
    setSelectedCheckboxes(selectedCheckboxes);
  }

  useEffect(() => {
    try {
      axios.get('http://localhost:8000/api/v1')
      .then(res => {
        setUsers(res.data.users);
      });
    } catch (err) {
      this.setState({flashMessage: err})
    }
  }, []);

  return (
    <div className={classes.UsersTable}>
      <div className={classes.Tools}>
        {controlButtons(buttons)}
      </div>
      <div className={classes.Table}>
        <Table striped bordered hover size="sm" className={classes.UsersTable}>
          <thead>
            <tr>
              <th><Form.Check type="checkbox" checked={allChecked} onChange={checkedHandler} /></th>
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
                resetAllChecked={allCheckedHandler}
                setChecked={setChecked}
                unsetChecked={unsetChecked}
              />
            ))}
          </tbody>
        </Table>
      </div>
    </div>
  )
}

export default UsersTable;
