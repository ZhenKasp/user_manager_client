import React from 'react';
import classes from './Toolbar.module.css';
import NavigationItems from '../NavigationItems/NavigationItems';

const toolbar = (props) => (
    <header className={classes.Toolbar}>
        <div>UserManager</div>
        <nav>
          <NavigationItems 
            changeView={props.changeView} 
            active={props.active}
            createFlashMessage={props.createFlashMessage} 
            setToken={props.setToken}
          />
        </nav>
    </header>
);

export default toolbar;