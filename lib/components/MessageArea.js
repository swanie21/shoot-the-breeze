import React, { Component } from 'react';
import Message from './Message';
import Filter from './Filter';

class MessageArea extends Component {

  renderMessages() {
    const filteredMessages = this.props.messages.filter((message) => message.user.displayName.toLowerCase().indexOf(this.props.filterText) !== -1)

    return filteredMessages.map(message => {
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
        <section className='MessageArea'>
         {this.renderMessages()}
        </section>
      );
    }
  }

export default MessageArea;
