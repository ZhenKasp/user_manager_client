import React from 'react';
import Button from 'react-bootstrap/Button';
import classes from './Button.module.css';
import axios from 'axios';

const button = (props) => {
  const images = require.context('../../assets/img/', true);
  let img = images('./' + props.type + ".png");
  const params = { id: props.selectedCheckboxes.join(";")};

  const deleteUsers = (type) => {
    axios.delete(process.env.REACT_APP_PATH_TO_SERVER + type, { headers: { authorization: localStorage.getItem('token') }, params } )
    .then(res => {
      if (res.data.error) {
        props.createFlashMessage(res.data.error, "danger");
        props.setToken(res.data.token);
      } else {
        props.createFlashMessage(res.data.message, "success");
        props.cleanSelectedChecboxes();
        props.setUsers(res.data.users);
      }
    })
    .catch((error) => {
      props.createFlashMessage(error.message, "danger");
    });
  };

  const changeUserStatus = (type) => {
    axios.patch(process.env.REACT_APP_PATH_TO_SERVER + type, params, { headers: { authorization: localStorage.getItem('token') }})
    .then(res => {
      if (res.data.error) {
        props.createFlashMessage(res.data.error, "danger");
        props.setToken(res.data.token);
      } else {
        props.createFlashMessage(res.data.message, "success");
        props.cleanSelectedChecboxes();
        props.setUsers(res.data.users);
      }
    })
    .catch((error) => {
      props.createFlashMessage(error.message, "danger");
    });
  };

  const confirmButtonClick = () => {
    if (props.selectedCheckboxes.length !== 0) {
      if (props.type === 'delete') {
        deleteUsers(props.type);
      } else { 
        changeUserStatus(props.type);
      }
    } else {
      props.createFlashMessage("First you should set checkboxes", "warning");
    }
  };

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