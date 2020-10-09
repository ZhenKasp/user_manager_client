import React from 'react';
import classes from './FlashMessage.module.css';

const flashMessage = (props) => (
  <div className={classes.FlashMessage}>
    {props.children}
  </div>
)

export default flashMessage;