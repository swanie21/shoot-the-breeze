import React, { Component } from 'react';
import Message from './Message';
import Filter from './Filter';

class MessageArea extends Component {

  // renderMessages() {
  //   if(this.props.userSelected === true) {
  //   const filteredMessages = this.props.messages.filter(message => message.user.displayName.toLowerCase().indexOf(message.user.displayName));
  //   return filteredMessages.map(message => {
  //     return (
  //       <section key={message.key}>
  //         <Message
  //           message={message}
  //          />
  //       </section>
  //       );
  //     });
  //   }
  // }
  renderMessages() {
    const filteredMessages = this.props.messages.filter((message) => message.content.toLowerCase().indexOf(this.props.filterText.toLowerCase()) !== -1
    || message.user.displayName.toLowerCase().indexOf(this.props.filterText.toLowerCase()) !== -1
    || message.user.email.toLowerCase().indexOf(this.props.filterText.toLowerCase()) !== -1)

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
