import React, { Component } from 'react';
import firebase, { reference, signIn } from '../firebase';
import MessageInput from './MessageInput';
// import SignIn from './SignIn';

class Footer extends Component {
  render() {
    return (
      <footer>
        {/* <SignIn
          user={this.props.user}
        /> */}
        <MessageInput
          addNewMessage={this.props.addNewMessage}
          user={this.props.user}
          reference={reference} />
      </footer>
    );
  }
}

export default Footer;
