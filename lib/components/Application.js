import React, { Component } from 'react'
import firebase, { reference, signIn } from '../firebase';
import { pick, map, extend } from 'lodash';
import NavBar from './NavBar';
import Footer from './Footer';
import UserList from './UserList';
import Filter from './Filter';
import MessageArea from './MessageArea';

export default class Application extends Component {
  constructor() {
    super();
    this.state = {
      messages: [],
      user: null,
      filter: ''
    };
    this.addNewMessage = this.addNewMessage.bind(this);
    this.reverseMessages = this.reverseMessages.bind(this);
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

  reverseMessages() {
    var reversedMessages =  this.state.messages.reverse()
    this.setState({ messages: reversedMessages })
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
  // Document.querySelector('Filter').keyup(function() {
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
        <MessageArea
          messages={this.state.messages}
          reverseMessages={this.reverseMessages}
          reference={reference}
        />
        <UserList
          user={user}
          reference={reference}
        />
        <h4 className='UserLoggedIn'>{user ? <p>Logged in as {user.displayName} {user.email}</p> : <button onClick={() => signIn()}>Sign In</button> }</h4>
        <Footer
          addNewMessage={this.addNewMessage}
          user={this.state.user}
          reference={reference}
        />
      </div>
    );
  }
}
