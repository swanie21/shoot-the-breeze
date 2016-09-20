import React, { Component } from 'react'
import firebase, { reference, signIn } from '../firebase';
import { pick, map, extend } from 'lodash';
import NavBar from './NavBar';
import Footer from './Footer';
import UserList from './UserList';
import MessageArea from './MessageArea';

export default class Application extends Component {
  constructor() {
    super();
    this.state = {
      messages: [],
      user: null,
      reverseSort: false,
      filterText: ''
    };
    this.updateFilter = this.updateFilter.bind(this);
    this.addNewMessage = this.addNewMessage.bind(this);
    this.sortUpButton = this.sortUpButton.bind(this);
    this.sortDownButton = this.sortDownButton.bind(this);
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

  sortUpButton() {
    if(this.state.reverseSort === false){
      var reversedMessages =  this.state.messages.reverse();
      this.setState({ messages: reversedMessages, reverseSort: true });
      }
    }

  sortDownButton() {
    if (this.state.reverseSort === true){
      var reversedMessages =  this.state.messages.reverse();
      this.setState({ messages: reversedMessages, reverseSort: false });
      }
    }

  updateFilter(event) {
    this.setState({ filterText: event.target.value });
  }

  render() {
    const { user, messages, draftMessage } = this.state;

    return (
      <div className="Application">
        <NavBar
          messages={this.state.messages}
          filterText={this.state.filterText}
          reference={reference}
          sortUpButton={this.sortUpButton}
          sortDownButton={this.sortDownButton}
          updateFilter={this.updateFilter}
        />
        <MessageArea
          messages={this.state.messages}
          filterText={this.state.filterText}
          reference={reference}
        />
        <UserList
          user={user}
          messages={this.state.messages}
          reference={reference}
        />
        <Footer
          addNewMessage={this.addNewMessage}
          user={user}
          reference={reference}
        />
      </div>
    );
  }
}
