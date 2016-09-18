import React, { Component } from 'react';
import Message from './Message';
import Filter from './Filter';
// import SortButton from './SortButton';

class NavBar extends Component {

  sortMessages() {
    return this.props.messages.reverse().map(message => {
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
      <nav>
        <h1>Shoot the Breeze</h1>
        <Filter />
        <button
          onClick={this.sortMessages}
        >
          Sort
        </button>
        {/* <SortButton /> */}
      </nav>
    );
  }
}

export default NavBar;
