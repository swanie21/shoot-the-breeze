import React, { Component } from 'react';
import Message from './Message';
import Filter from './Filter';

class MessageArea extends Component {

  renderMessages() {
    // const filteredMessages = this.props.messages.filter((message) => {
    //   return message.displayName.indexOf(this.props.filterText) !== -1;
    // });

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
        <section className='MessageArea'>
         {this.renderMessages()}
        </section>
      );
    }
  }

export default MessageArea;
