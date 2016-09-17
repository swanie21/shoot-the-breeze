import React, { Component } from 'react';
import SubmitButton from './SubmitButton';


class MessageInput extends Component {
  constructor({ user, addNewMessage }){
    super();
    this.state = {
      draftMessage: ''
    };
    this.handleNewMessage = this.handleNewMessage.bind(this);
  }

  handleNewMessage() {
    this.props.addNewMessage(this.props.user, this.state.draftMessage);
    this.setState( {draftMessage: ''} );
  }

  render() {
    return (
      <section>
      <input
        placeholder="Message…"
        value={this.state.draftMessage}
        onChange={e => this.setState({ draftMessage: e.target.value })}
      />
      <SubmitButton
        handleNewMessage={this.handleNewMessage}
        draftMessage={this.state.draftMessage}
      />
      </section>
    );
  }
}

export default MessageInput;
