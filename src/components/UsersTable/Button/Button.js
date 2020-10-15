import React from 'react';
import Button from 'react-bootstrap/Button';
import classes from './Button.module.css';
import axios from 'axios';

const button = (props) => {
  const images = require.context('../../../assets/img', true);
  let img = images('./' + props.type + ".png");

  const confirmButtonClick = () => {
    if (props.type === 'delete' && props.selectedCheckboxes.length !== 0) {
      console.log(props.selectedCheckboxes);
      axios.delete('http://localhost:8000/api/v1/' + props.type, { params: { id: props.selectedCheckboxes.join(";") } }, { withCredentials: true })
      .then(res => {
        console.log(res)
        if (!res.data) {
          props.createFlashMessage("res.data.error");
        } else {
          props.setUsers(res.data.users)
          // props.viewHandler('userstable');
        }
      })
      .catch((err) => {
        props.createFlashMessage(err.message);
      });
    } else if (props.selectedCheckboxes.length === 0) {
      props.createFlashMessage("First you should set checkboxes");
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