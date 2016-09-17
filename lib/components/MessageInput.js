import React, { Component } from 'react';
import SubmitButton from './SubmitButton';
import ClearButton from './ClearButton';

class MessageInput extends Component {
  constructor({ user, addNewMessage }) {
    super();
    this.state = {
      draftMessage: ''
    };
    this.handleNewMessage = this.handleNewMessage.bind(this);
    this.clearMessage = this.clearMessage.bind(this);
  }

  handleNewMessage() {
    this.props.addNewMessage(this.props.user, this.state.draftMessage);
    this.setState( {draftMessage: ''} );
    this.clearMessage();
  }

  clearMessage() {
    this.setState( {draftMessage: ''} );
  }

  render() {
    return (
      <section>
      <input
        placeholder="Message…"
        value={this.state.draftMessage}
        onChange={e => this.setState({ draftMessage: e.target.value })}
        maxLength={140}
      />
      <SubmitButton
        handleNewMessage={this.handleNewMessage}
        draftMessage={this.state.draftMessage}
      />
      <ClearButton
        clearMessage={this.clearMessage}
        draftMessage={this.state.draftMessage}
      />
      </section>
    );
  }
}

export default MessageInput;
