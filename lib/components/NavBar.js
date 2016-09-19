import React, { Component } from 'react';
import Message from './Message';
import SortUpButton from './SortUpButton';
import SortDownButton from './SortDownButton';
import Filter from './Filter';

class NavBar extends Component {

  render() {
    return (
      <nav>
        <h1>Shoot the Breeze</h1>
        {/* <Filter
          allmessages={this.props.messages}
          filterText={this.props.filterText}
          updateFilter={this.props.updateFilter}
        /> */}
        <section className='SortButtons'>
          <SortUpButton
            allMessages={this.props.messages}
            sortUpButton={this.props.sortUpButton}
          />
          <SortDownButton
            allMessages={this.props.messages}
            sortDownButton={this.props.sortDownButton}
          />
        </section>
      </nav>
    );
  }
}

export default NavBar;
