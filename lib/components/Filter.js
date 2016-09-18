import React, { Component } from 'react';

class Filter extends Component {
  render() {
    return (
      <section>
        <input className='searchMessages' type='text' placeholder='filter' onKeyUp={() => filterMessages()}/>
      </section>
    );
  }
}

export default Filter;
