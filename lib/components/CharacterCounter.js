import React, { Component } from 'react';

class CharacterCounter extends Component {
  render() {
    return (
      <section>
        <p className='CharacterCounter'>{140 - this.props.draftMessage.length}</p>
      </section>
    );
  }
}

export default CharacterCounter;
