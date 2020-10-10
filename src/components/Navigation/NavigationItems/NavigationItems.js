import React from 'react';
import classes from './NavigationItems.module.css';
import NavigationItem from './NavigationItem/NavigationItem';

const navigationItems = (props) => (
    <ul className={classes.NavigationItems}>
        <NavigationItem view="signup" changeView={props.changeView} active={props.active} >SignUp</NavigationItem>
        <NavigationItem view="signin" changeView={props.changeView} active={props.active} >SignIn</NavigationItem>
    </ul>
)

export default navigationItems;