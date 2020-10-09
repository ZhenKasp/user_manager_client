import React, { Component } from 'react';
import axios from 'axios';
import Aux from '../../hoc/Auxiliary';
import SignIn from '../../components/SignIn/SignIn';
import SignUp from '../../components/SignUp/SignUp';
import FlashMessage from '../../components/FlashMessage/FlashMessage';

class UserManager extends Component {
  state = {
    users: "",
    flashMessage: "",
    view: "SignIn",
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

  render () {
    return (
      <Aux>
        {this.state.flashMessage &&
        <FlashMessage>
          {this.state.flashMessage}
        </FlashMessage>}

        <SignIn createFlashMessage={this.flashMessageHandler}/>
        <SignUp createFlashMessage={this.flashMessageHandler}/>
        <br />
        {this.state.users}

      </Aux>
    )
  }
}

export default UserManager;