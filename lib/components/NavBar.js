import React, { Component } from 'react';
import Message from './Message';
import Filter from './Filter';

class NavBar extends Component {


  render() {
    return (
      <nav>
        <h1>Shoot the Breeze</h1>
        <Filter />
      </nav>
    );
  }
}

export default NavBar;
