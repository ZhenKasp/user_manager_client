import React, { Component } from 'react';
import axios from 'axios';
import Aux from '../../hoc/Auxiliary';
import SignIn from '../../components/SignIn/SignIn';

class UserManager extends Component {
  state = {
    users: ""
  }

  
  async componentDidMount() {
    axios.defaults.headers.post['Content-Type'] ='application/x-www-form-urlencoded';
    try {
      await axios.get('http://localhost:8000/api/v1', )
      .then(res => {
        console.log(res)
        this.setState({ users: JSON.stringify(res.data.users) });
      });
    } catch (err) {
      console.log(err);
    }
  } 

  render () {
    return (
      <Aux>
        <SignIn/>
        {this.state.users}

      </Aux>
    )
  }
}

export default UserManager;