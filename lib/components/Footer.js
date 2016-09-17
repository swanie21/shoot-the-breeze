import React, { Component } from 'react';
import firebase, { reference, signIn } from '../firebase';
import MessageInput from './MessageInput';
import CharacterCounter from './CharacterCounter';
import ClearButton from './ClearButton';

class Footer extends Component {
  render() {
    return (
      <footer>
        <MessageInput
          addNewMessage={this.props.addNewMessage}
          user={this.props.user}
          reference={reference} />
        <CharacterCounter />
      </footer>
    );
  }
}

export default Footer;
