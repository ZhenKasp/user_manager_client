import React, { Component } from 'react';
import Aux from '../../hoc/Auxiliary';
import SignIn from '../../components/SignIn/SignIn';
import SignUp from '../../components/SignUp/SignUp';
import FlashMessage from '../../components/FlashMessage/FlashMessage';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import UsersTable from '../../components/UsersTable/UsersTable';


class UserManager extends Component {
  state = {
    users: "",
    flashMessage: "",
    view: "signin",
  }

  flashMessageHandler = (message) => {
    this.setState({flashMessage: message});
    setTimeout(() => { this.setState({ flashMessage: "" }) }, 5000);
  }

  viewHandler = (view) => {
    return this.setState({view: view});
  }

  chooseViewToRender = () => {
    if (this.state.view === "signin") {
      return (
        <SignIn createFlashMessage={this.flashMessageHandler} viewHandler={this.viewHandler} />
      )
    } else if (this.state.view === "signup") {
     return (
       <SignUp createFlashMessage={this.flashMessageHandler} viewHandler={this.viewHandler} />
     )
    } else if (this.state.view === "userstable") {
     return (
       <UsersTable />
     )
    }    
  }

  render () {
    const View = this.chooseViewToRender;
    return (
      <Aux>
        <Toolbar changeView={this.viewHandler} active={this.state.view}/>
        {this.state.flashMessage &&
        <FlashMessage>
          {this.state.flashMessage}
        </FlashMessage>}
        <View />
      </Aux>
    )
  }
}

export default UserManager;