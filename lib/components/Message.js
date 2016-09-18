import React, { Component } from 'react'
import moment from 'moment';

class Message extends Component {
  render() {
    const { message } = this.props;
    return (
      <ul>
        <li>
          {moment(message.createdAt).format('MMMM Do, h:mm a')}
          {message.user.displayName}:
          {message.content}
        </li>
      </ul>
    );
  }
}

export default Message;
