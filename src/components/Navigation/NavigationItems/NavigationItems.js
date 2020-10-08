import React from 'react';
import classes from './NavigationItems.module.css';
import NavigationItem from './NavigationItem/NavigationItem';

const navigationItems = (props) => (
    <ul className={classes.NavigationItems}>
        <NavigationItem link="/SignUp" active>SignUp</NavigationItem>
        <NavigationItem link="/SignIn" >SignIn</NavigationItem>
    </ul>
)

export default navigationItems;