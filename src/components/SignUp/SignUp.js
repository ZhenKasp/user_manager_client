import React from 'react';
import classes from './SignUp.module.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.css';
import axios from 'axios';

const signUp = (props) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.target);
    let object = {}
    data.forEach((value, key) => {object[key] = value});

    axios.post('http://localhost:8000/api/v1/signup', object)
    .then(res => {
      if (res) {
        console.log(res)
        props.createFlashMessage(res.data.error);
      }
    })
    .catch((err) => {
      console.log(err)
      props.createFlashMessage(JSON.stringify(err));
    });
  }

  return (
    <div className={classes.SignUp}>
      <h1>Please Sign Up</h1>
      <Form onSubmit={(e) => handleSubmit(e)}>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control autoFocus type="email" required name="email" placeholder="Enter email" />
          <Form.Text className="text-muted" />
        </Form.Group>
        <Form.Group controlId="formBasicUsername">
          <Form.Label>Username</Form.Label>
          <Form.Control autoFocus name="username" required placeholder="Username" />
          <Form.Text className="text-muted" />
        </Form.Group>
        <Form.Group controlId="formBasicFirstName">
          <Form.Label>First Name</Form.Label>
          <Form.Control autoFocus name="firstname" required placeholder="First Name" />
          <Form.Text className="text-muted" />
        </Form.Group>
        <Form.Group controlId="formBasicLastName">
          <Form.Label>Last Name</Form.Label>
          <Form.Control autoFocus name="lastname" required placeholder="Last Name" />
          <Form.Text className="text-muted" />
        </Form.Group>
        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" required name="password" placeholder="Password" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Registration
        </Button>
      </Form>
    </div>
  )
}

export default signUp;