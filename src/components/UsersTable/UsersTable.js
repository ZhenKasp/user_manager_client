import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Table from 'react-bootstrap/Table';
import classes from './UsersTable.module.css';
import UserColumn from './UserColumn/UserColumn';

const UsersTable = (props) => {
   const [users, setUsers] = useState([]);

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
          <UserColumn key={user.id} user={user} />
        ))}
      </tbody>
    </Table>
  )
}

export default UsersTable;
