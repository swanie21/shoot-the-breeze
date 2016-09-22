import React, { Component } from 'react';
import moment from 'moment';

class Message extends Component {
  render() {
    const { message } = this.props;
    return (
      <section>
        <section className='Message'>
          <p className='MessageDate'>{moment(message.createdAt).format('MMMM Do, h:mm a')}</p>
          <p className='MobileMessageDate'>{moment(message.createdAt).format('M/D, h:mm a')}</p>
          <p className='MessageUserName'>{message.user.displayName}</p>
        </section>
        <p className='MessageContent'>{message.content}</p>
      </section>
    );
  }
}

export default Message;
