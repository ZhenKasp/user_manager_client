import React from 'react';
import classes from './NavigationItem.module.css';

const navigationItem = (props) => (
    <li className={classes.NavigationItem}>
        <p className={props.active === props.children.toLowerCase() ? classes.active : null}
          onClick={() => props.changeView(props.view)}>
          {props.children}
        </p>
    </li>
)

export default navigationItem;