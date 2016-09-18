import React, { Component } from 'react';
import Message from './Message';
import SortButton from './SortButton';

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
        <SortButton
          allMessages={this.props.messages}
          reverseMessages={this.props.reverseMessages}
        />
        {this.renderMessages()}
        </section>
      );
    }
  }

export default MessageArea;
