import React from 'react';
import classes from './SignIn.module.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.css';
import axios from 'axios';

const signIn = (props) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.target);
    let object = {}
    data.forEach((value, key) => {object[key] = value});
    
    try {
      axios.post('http://localhost:8000/api/v1/signin', object)
      .then(res => {
        console.log(res);
      });
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div className={classes.SignIn}>
      <h1>Please Sign In</h1>
      <Form onSubmit={(e) => handleSubmit(e)}>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control autoFocus type="email" name="email" placeholder="Enter email" />
          <Form.Text className="text-muted" />
        </Form.Group>
        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" name="password" placeholder="Password" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Sign In
        </Button>
      </Form>
    </div>
  )
}

export default signIn;