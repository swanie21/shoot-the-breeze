import React, { Component } from 'react';

const SortButton = props => {
  const { allMessages, sortMessages } = props;

  return (
    <section>
      <input
        className='SortButton'
        onClick={sortMessages}
        type='button'
        value='Sort'
      />
    </section>
  );
}

export default SortButton;
