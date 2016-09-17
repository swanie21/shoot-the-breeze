import React, { Component } from 'react';
import Filter from './Filter';
import SortButton from './SortButton';

class NavBar extends Component {
  render() {
    return (
      <nav>
        <h1>Shoot the Breeze</h1>
        <Filter />
        <SortButton />
      </nav>
    );
  }
}

export default NavBar;
