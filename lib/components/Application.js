import React, { Component } from 'react'
import firebase, { reference, signIn } from '../firebase';
import { pick, map, extend } from 'lodash';
import NavBar from './NavBar';
import Footer from './Footer';
import UserList from './UserList';
import MessageInput from './MessageInput';

export default class Application extends Component {
  constructor() {
    super();
    this.state = {
      messages: [],
      user: null
    };
  }

  componentDidMount() {
    reference.limitToLast(100).on('value', (snapshot) => {
      const messages = snapshot.val() || {};
      this.setState({
        messages: map(messages, (val, key) => extend(val, { key }))
      });
    });

    firebase.auth().onAuthStateChanged(user => this.setState({ user }));
  }

  addNewMessage(user, newMessage) {
    const userInfo = pick(user, 'displayName', 'email', 'uid');
    reference.push({
      user: userInfo,
      content: newMessage,
      createdAt: Date.now()
    });
  }

  render() {
    const { user, messages, draftMessage } = this.state;

    return (
      <div className="Application">
        <NavBar />
        <ul>
          { this.state.messages.map(m => <li key={m.key}>{m.user.displayName}: {m.content}</li>) }
        </ul>
        <UserList />
        {user ? <p>Logged in as {user.displayName} {user.email}</p> : <button onClick={() => signIn()}>Sign In</button> }
        <div className="MessageInputFooter">
          <MessageInput
            addNewMessage={this.addNewMessage}
            user={this.state.user}
            reference={reference}
          />
          <button onClick={() => this.handleNewMessage}>Submit</button>
        </div>
      </div>
    );
  }
}
