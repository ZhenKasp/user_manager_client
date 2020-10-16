import React, { Component } from 'react';
import Aux from '../../hoc/Auxiliary';
import SignIn from '../../components/SignIn/SignIn';
import SignUp from '../../components/SignUp/SignUp';
import FlashMessage from '../../components/FlashMessage/FlashMessage';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import UsersTable from '../UsersTable/UsersTable';
import logout from '../../utilities/logout';

class UserManager extends Component {
  state = {
    users: "",
    flashMessage: "",
    variant: "danger",
    view: "signin",
    email: ""
  }

  flashMessageHandler = (message, variant) => {
    this.setState({flashMessage: message, variant: variant});
    setTimeout(() => { this.setState({ flashMessage: "", variant: "danger"}) }, 5000);
  }

  viewHandler = (view) => {
    this.setState({view: view});
  }

  chooseViewToRender = () => {
    if (localStorage.getItem('user')) {
      return (
        <UsersTable 
          createFlashMessage={this.flashMessageHandler} 
          viewHandler={this.viewHandler } 
        />
       )
    } else {
      if (this.state.view === "signup") {
        return (
          <SignUp 
            createFlashMessage={this.flashMessageHandler} 
            viewHandler={this.viewHandler} 
            getUser={this.getUser}
          />
        )
      } else {
        return (
          <SignIn 
            createFlashMessage={this.flashMessageHandler} 
            viewHandler={this.viewHandler} 
            getUser={this.getUser}
          />
        )
      }
    }
  }

  getUser = user => {
    if (user.status === "active") {
      localStorage.setItem('user', user);
      console.log(JSON.stringify(user))
    } else {
      logout(this.viewHandler, this.flashMessageHandler);
      console.log("user blocked or deleted");
    }
  };

  render () {
    const View = this.chooseViewToRender;
    return (
      <Aux>
        <Toolbar
          createFlashMessage={this.flashMessageHandler} 
          changeView={this.viewHandler}
          active={this.state.view}/>
        {this.state.flashMessage &&
        <FlashMessage variant={this.state.variant}>
          {this.state.flashMessage}
        </FlashMessage>}
        <View />
      </Aux>
    )
  }
}

export default UserManager;