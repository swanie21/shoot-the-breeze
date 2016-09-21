import React, { Component } from 'react';
import SearchInput, {createFilter} from 'react-search-input';
import Message from './Message';

class Filter extends Component {
  render() {
    return (
      <section className='Filter'>
        <input
          className='FilterInput'
          type='text'
          value={this.props.filterText}
          placeholder='Filter'
          onChange={this.props.updateFilter}
        />
      </section>
    );
  }
}

export default Filter;
