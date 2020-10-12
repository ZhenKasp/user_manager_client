import React from 'react';
import classes from './NavigationItems.module.css';
import NavigationItem from './NavigationItem/NavigationItem';

const navigationItems = (props) => {
  const displayNavigationItems = () => {
    if (props.active === "userstable") {
      return (
        <ul className={classes.NavigationItems}>
          <NavigationItem 
            view="signin" 
            changeView={props.changeView}
            active={props.active} >LogOut
          </NavigationItem>
        </ul>
      )
    } else {
      return (
        <ul className={classes.NavigationItems}>
          <NavigationItem 
            view="signup"
            changeView={props.changeView}
            active={props.active} >SignUp
          </NavigationItem>
          <NavigationItem 
            view="signin" 
            changeView={props.changeView} 
            active={props.active} >SignIn
          </NavigationItem>
        </ul>
      )
    }
  }

  const NavigationItems = displayNavigationItems;

  return <NavigationItems />
}

export default navigationItems;