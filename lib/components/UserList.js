import React, { Component } from 'react';
import firebase, { reference, signIn } from '../firebase';
import User from './User';
import Message from './Message';
import lodash from 'lodash';


class UserList extends Component {

  renderUsers() {
    const uniqUsers = _.uniqBy(this.props.messages, (e) => {return e.user.displayName});
    return uniqUsers.map(message => {
      return (
        <section key={message.key}>
          <User
            message={message}
            user={this.props.user}
           />
        </section>
        );
      });
    }

  render() {
    return (
      <aside>
        <h2>Users</h2>
          {this.renderUsers()}
      </aside>
    );
  }
}

export default UserList;
