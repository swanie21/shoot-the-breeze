import React, { Component } from 'react';

class MessageInput extends Component {
  constructor({ user, addNewMessage }){
    super();
    this.state = {
      draftMessage: ''
    };
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
        onChange={(e) => this.setState({ draftMessage: e.target.value })}
      />
      </section>
    );
  }
}

export default MessageInput;
