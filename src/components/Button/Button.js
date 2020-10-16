import React from 'react';
import Button from 'react-bootstrap/Button';
import classes from './Button.module.css';
import axios from 'axios';

const button = (props) => {
  const images = require.context('../../assets/img/', true);
  let img = images('./' + props.type + ".png");

  const deleteUsers = (type, selectedCheckboxes) => {
    axios.delete('http://localhost:8000/api/v1/' + type, { params: { id: selectedCheckboxes.join(";") } }, { withCredentials: true })
    .then(res => {
      if (res.data.error) {
        props.createFlashMessage(res.data.error.message, "danger");
      } else {
        props.createFlashMessage(res.data.message, "success");
        props.cleanSelectedChecboxes();
        props.setUsers(res.data.users);
      }
    })
    .catch((error) => {
      props.createFlashMessage(error.message, "danger");
    });
  }

  const changeUserStatus = (type, selectedCheckboxes) => {
    axios.patch('http://localhost:8000/api/v1/' + type, { params: { id: selectedCheckboxes.join(";") } }, { withCredentials: true })
    .then(res => {
      if (res.data.error) {
        props.createFlashMessage(res.data.error.message, "danger");
      } else {
        props.createFlashMessage(res.data.message, "success");
        props.cleanSelectedChecboxes();
        props.setUsers(res.data.users);
      }
    })
    .catch((error) => {
      props.createFlashMessage(error.message, "danger");
    });
  }

  const confirmButtonClick = () => {
    if (props.selectedCheckboxes.length !== 0) {
      if (props.type === 'delete') {
        deleteUsers(props.type, props.selectedCheckboxes);
      } else { 
        changeUserStatus(props.type, props.selectedCheckboxes);
      }
    } else {
      props.createFlashMessage("First you should set checkboxes", "warning");
    }
  }

  return (
    <Button
      className={classes.Button} 
      variant={props.variant} 
      onClick={confirmButtonClick}>
      <img src={img} alt={props.type}/>
    </Button>
  )
}

export default button;