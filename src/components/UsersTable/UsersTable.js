import React, { useEffect } from 'react';
import axios from 'axios';
import Table from 'react-bootstrap/Table';
import classes from './UsersTable.module.css';

const UsersTable = (props) => {
  useEffect(() => {
    try {
      axios.get('http://localhost:8000/api/v1')
      .then(res => {
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
          <th>First Name</th>
          <th>Last Name</th>
          <th>Username</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
        </tr>
        <tr>
          <td>3</td>
          <td colSpan="2">Larry the Bird</td>
          <td>@twitter</td>
        </tr>
      </tbody>
    </Table>
  );
}

export default UsersTable;
