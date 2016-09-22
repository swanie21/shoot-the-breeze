import React, { Component } from 'react';
import firebase, { reference, signIn } from '../firebase';
import User from './User';
import Message from './Message';
import { uniq, sort } from 'lodash';

class UserList extends Component {

  renderUsers() {
    const sortUsers = _.sortBy(
      _.uniqBy(this.props.messages, e => e.user.displayName),
      [e => e.user.displayName]
    );
    return sortUsers.map(message => {
      return (
        <section key={message.key}>
          <User
            message={message}
            user={this.props.user}
            handleIndividualUser={(name) => this.props.handleIndividualUser(name)}
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
