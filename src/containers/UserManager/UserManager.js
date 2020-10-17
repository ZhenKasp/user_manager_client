import React, { Component } from 'react';
import Aux from '../../hoc/Auxiliary';
import SignIn from '../../components/SignIn/SignIn';
import SignUp from '../../components/SignUp/SignUp';
import FlashMessage from '../../components/FlashMessage/FlashMessage';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import UsersTable from '../UsersTable/UsersTable';

class UserManager extends Component {
  state = {
    users: "",
    flashMessage: "",
    variant: "danger",
    view: "signin",
  }

  flashMessageHandler = (message, variant) => {
    this.setState({flashMessage: message, variant: variant});
    setTimeout(() => { this.setState({ flashMessage: "", variant: "danger"}) }, 5000);
  }

  viewHandler = (view) => {
    this.setState({view: view});
  }

  chooseViewToRender = () => {
    if (localStorage.getItem('token')) {
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
            setToken={this.setToken}
          />
        )
      } else {
        return (
          <SignIn 
            createFlashMessage={this.flashMessageHandler} 
            viewHandler={this.viewHandler} 
            setToken={this.setToken}
          />
        )
      }
    }
  }

  setToken = token => {
    if (token) {
      localStorage.setItem('token', token);
      console.log(JSON.stringify(token))
    } 
    // else {
    //   logout(this.viewHandler, this.flashMessageHandler);
    //   console.log("user blocked or deleted");
    // }
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