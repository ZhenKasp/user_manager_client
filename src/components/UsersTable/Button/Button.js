import React from 'react';
import Button from 'react-bootstrap/Button';
import classes from './Button.module.css';

const button = (props) => {
  const images = require.context('../../../assets/img', true);
  let img = images('./' + props.children + ".png");

  return (
    <Button className={classes.Button} variant={props.variant} >
      {console.log(props)}
      <img src={img} alt={props.children}/>
    </Button>
  )
}

export default button;