import React, { Component } from 'react';
import axios from 'axios';
import Aux from '../../hoc/Auxiliary';
import SignIn from '../../components/SignIn/SignIn';
import SignUp from '../../components/SignUp/SignUp';
import FlashMessage from '../../components/FlashMessage/FlashMessage';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';


class UserManager extends Component {
  state = {
    users: "",
    flashMessage: "",
    view: "signin",
  }

  async componentDidMount() {
    axios.defaults.headers.post['Content-Type'] ='application/x-www-form-urlencoded';
    try {
      await axios.get('http://localhost:8000/api/v1')
      .then(res => {
        console.log(res)
        this.setState({ users: JSON.stringify(res.data.users) });
        this.flashMessageHandler("")
      });
    } catch (err) {
      console.log(err);
      this.setState({flashMessage: err})
    }
  }

  flashMessageHandler = (message) => {
    this.setState({flashMessage: message});
    setTimeout(() => { this.setState({ flashMessage: "" }) }, 5000);
  }

  viewHandler = (view) => {
    this.setState({view: view});
  }

  chooseViewToRender = () => {
    if (this.state.view === "signin") {
      return <SignIn createFlashMessage={this.flashMessageHandler} />
    } else if (this.state.view === "signup") {
      return <SignUp createFlashMessage={this.flashMessageHandler} />
    } else {
      return "404"
    }
  }

  render () {
    return (
      <Aux>
        <Toolbar changeView={this.viewHandler} active={this.state.view}/>
        {this.state.flashMessage &&
        <FlashMessage>
          {this.state.flashMessage}
        </FlashMessage>}
        {this.state.view === "signin" ? <SignIn createFlashMessage={this.flashMessageHandler} />:
        <SignUp createFlashMessage={this.flashMessageHandler} />}
      </Aux>
    )
  }
}

export default UserManager;