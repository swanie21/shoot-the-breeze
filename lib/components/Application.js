import React, { Component } from 'react';
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
    this.handleIndividualUser = this.handleIndividualUser.bind(this);
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
    if(this.state.reverseSort === false) {
      var reversedMessages =  this.state.messages.reverse();
      this.setState({ messages: reversedMessages, reverseSort: true });
      }
    }

  sortDownButton() {
    if(this.state.reverseSort === true) {
      var reversedMessages =  this.state.messages.reverse();
      this.setState({ messages: reversedMessages, reverseSort: false });
      }
    }

  updateFilter(e) {
    this.setState({ filterText: e.target.value });
  }

  handleIndividualUser(name) {
    if(name !== this.state.filterText) {
      this.setState({filterText: name });
    } else {
      this.setState({ filterText: '' });
    }
  }

  render() {
    const { user, messages, draftMessage, filterText } = this.state;

    return (
      <div className="Application">
        <NavBar
          messages={messages}
          filterText={filterText}
          reference={reference}
          sortUpButton={this.sortUpButton}
          sortDownButton={this.sortDownButton}
          updateFilter={this.updateFilter}
        />
        <MessageArea
          messages={messages}
          filterText={filterText}
          reference={reference}
        />
        <UserList
          user={user}
          messages={messages}
          reference={reference}
          handleIndividualUser={(name) => this.handleIndividualUser(name)}
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
