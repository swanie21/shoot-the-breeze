import React, { Component } from 'react';
import User from './User';

class UserList extends Component {
  render() {
    return (
      <aside>
        <h2>Users</h2>
        <User />
      </aside>
    );
  }
}


export default UserList;
