import React, { Component } from 'react';
import firebase, { reference, signIn } from '../firebase';
import User from './User';
import lodash from 'lodash';

class UserList extends Component {
  render() {
    return (
      <aside>
        <h2>Users</h2>
        <User
          user={this.props.user}
          reference={reference}
        />
      </aside>
    );
  }
}

export default UserList;
