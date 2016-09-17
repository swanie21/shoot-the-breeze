import React, { Component } from 'react';
import firebase, { reference, signIn } from '../firebase';
import MessageInput from './MessageInput';

class Footer extends Component {
  render() {
    return (
      <footer>
        <MessageInput
          addNewMessage={this.props.addNewMessage}
          user={this.props.user}
          reference={reference} />
      </footer>
    );
  }
}

export default Footer;
