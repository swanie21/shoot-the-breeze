import React, { Component } from 'react';
import SearchInput, {createFilter} from 'react-search-input';
import Message from './Message';
import lodash from 'lodash';

class Filter extends Component {
  render() {
    return (
      <section>
        <input
          className='Filter'
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
