import React, { Component } from 'react'
import firebase, { reference, signIn } from '../firebase';
import { pick, map, extend } from 'lodash';
import NavBar from './NavBar';
import Footer from './Footer';
import UserList from './UserList';
import Filter from './Filter';
import MessageArea from './MessageArea';
import moment from 'moment';

export default class Application extends Component {
  constructor() {
    super();
    this.state = {
      messages: [],
      user: null,
      filter: ''
    };
    this.addNewMessage = this.addNewMessage.bind(this);
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

  filterMessages() {
  // Document.querySelector('.searchMessages').keyup(function() {
  //   var filter = $(this).val();
  //   this.state.messages.each(function() {
  //     if($(this).text().search(new RegExp(filter, 'i')) < 0) {
  //       $(this).fadeOut();
  //     }
  //     else {
  //       $(this).fadeIn();
  //     }
  //   });
  // });
  }

  render() {
    const { user, messages, draftMessage } = this.state;

    return (
      <div className="Application">
        <NavBar
          messages={this.state.messages}
          reference={reference}
        />
        {/* <ul>
          { this.state.messages.map(m => <li key={m.key}>{moment(m.createdAt).format('MMMM Do, h:mm a')} {m.user.displayName}: {m.content}</li>) }
        </ul> */}
        <MessageArea
          messages={this.state.messages}
          reference={reference}
        />
        <UserList
          user={user}
          reference={reference}
        />
        {user ? <p>Logged in as {user.displayName} {user.email}</p> : <button onClick={() => signIn()}>Sign In</button> }
        <Footer
          addNewMessage={this.addNewMessage}
          user={this.state.user}
          reference={reference}
        />
      </div>
    );
  }
}
