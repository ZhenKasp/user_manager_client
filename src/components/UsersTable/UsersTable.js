import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Table from 'react-bootstrap/Table';
import classes from './UsersTable.module.css';
import UserColumn from './UserColumn/UserColumn';
import Form from 'react-bootstrap/Form';

const UsersTable = (props) => {
  const [users, setUsers] = useState([]);
  const [allChecked, setAllChecked] = useState(false);
  const [anyChanged, setAnyChanged] = useState(false);

  const allCheckedHandler = () => {
    setAllChecked(!allChecked);
    setAnyChanged(true);
  }

  const checkedHandler = () => {
    const checked = !allChecked
    setAllChecked(checked);
    if (!checked) setAnyChanged(false);
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
          <UserColumn
            key={user.id}
            user={user}
            allChecked={allChecked}
            anyChanged={anyChanged}
            resetAllChecked={allCheckedHandler}
          />
        ))}
      </tbody>
    </Table>
  )
}

export default UsersTable;
