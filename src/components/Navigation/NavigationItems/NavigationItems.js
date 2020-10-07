import React from 'react';
import classes from './NavigationItems.module.css';
import NavigationItem from './NavigationItem/NavigationItem';

const navigationItems = () => (
    <ul className={classes.NavigationItems}>
        <NavigationItem link="/" >Block</NavigationItem>
        <NavigationItem link="/" >Unblock</NavigationItem>
        <NavigationItem link="/">Active</NavigationItem>
    </ul>
)

export default navigationItems;