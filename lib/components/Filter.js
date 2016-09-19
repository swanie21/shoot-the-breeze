import React, { Component } from 'react';
import SearchInput, {createFilter} from 'react-search-input';
import Message from './Message';
const filterKeys = ['displayName', 'content', 'email'];

class Filter extends Component {
  constructor() {
    super();
      this.state = {
        filter: ''
      };
      this.handleSearchUpdated = this.handleSearchUpdated.bind(this)
    }

    handleSearchUpdated(update) {
      this.setState({ filter: update });
    }

  render() {
    const filteredMessages = this.props.messages.filter(
      createFilter(this.state.filter, filterKeys)
    );

    return (
      <section>
        <SearchInput
          className='FilterInput'
          onChange={this.handleSearchUpdated}
        />
        {filteredMessages.map(message => {
          return (
            <section>
              <div>{message.displayName}</div>
              <div>{message.content}</div>
              <div>{message.email}</div>
            </section>
          );
        })}
      </section>
    );
  }
}

export default Filter;
