import React, { Component } from 'react';
import MessageInput from './MessageInput';
import CharacterCounter from './CharacterCounter';
import ClearButton from './ClearButton';
import SubmitButton from './SubmitButton';

class Footer extends Component {
  render() {
    return (
      <footer>
        <MessageInput />
        <CharacterCounter />
        <ClearButton />
        {/* <SubmitButton /> */}
      </footer>
    );
  }
}

export default Footer;
