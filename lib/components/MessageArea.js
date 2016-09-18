import React, { Component } from 'react';
import Message from './Message';
import SortUpButton from './SortUpButton';
import SortDownButton from './SortDownButton';


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
        <SortUpButton
          allMessages={this.props.messages}
          sortUpButton={this.props.sortUpButton}
        />
        <SortDownButton
          allMessages={this.props.messages}
          sortDownButton={this.props.sortDownButton}
        />
        {this.renderMessages()}
        </section>
      );
    }
  }

export default MessageArea;
