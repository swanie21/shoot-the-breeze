import React, { Component } from 'react';

class MessageInput extends Component {
  constructor(user){
    super()
    this.state = {
      draftMessage: ''
    }
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
