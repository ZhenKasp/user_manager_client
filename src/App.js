import React, { Component } from 'react';
import Layout from './components/Layout/Layout';
import UserManager from './containers/UserManager/UserManager';

class App extends Component {
  render () {
    return (
      <div>
        <Layout>
          <UserManager />
        </Layout>
      </div>
    );
  }
}

export default App;
