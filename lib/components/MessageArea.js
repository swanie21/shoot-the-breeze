import React, { Component } from 'react';
import Message from './Message';

class MessageArea extends Component {

  renderMessages() {
    return this.props.messages.map(message => {
      return (
        <section key={message.key}>
          <Message
            message={message}
           />
        </section>
        );
      });
    }

  render() {
      return (
        <section>
        {this.renderMessages()}
        </section>
      );
    }
  }

export default MessageArea;
