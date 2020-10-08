import React from 'react';
import classes from './SignUp.module.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.css';


const signUp = (props) => (
  <div className={classes.SignUp}>
    <h1>Please Sign Up</h1>
    <Form>
      <Form.Group controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control autoFocus type="email" placeholder="Enter email" />
        <Form.Text className="text-muted" />
      </Form.Group>
      <Form.Group controlId="formBasicEmail">
        <Form.Label>Username</Form.Label>
        <Form.Control autoFocus type="text" placeholder="Username" />
        <Form.Text className="text-muted" />
      </Form.Group>
      <Form.Group controlId="formBasicEmail">
        <Form.Label>First Name</Form.Label>
        <Form.Control autoFocus type="text" placeholder="First Name" />
        <Form.Text className="text-muted" />
      </Form.Group>
      <Form.Group controlId="formBasicEmail">
        <Form.Label>Last Name</Form.Label>
        <Form.Control autoFocus type="text" placeholder="Last Name" />
        <Form.Text className="text-muted" />
      </Form.Group>
      <Form.Group controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Registration
      </Button>
    </Form>
  </div>
) 

export default signUp;