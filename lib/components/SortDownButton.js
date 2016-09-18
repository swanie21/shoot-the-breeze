import React, { Component } from 'react';

const SortDownButton = props => {
  const { allMessages, sortDownButton } = props;

  return (
    <section>
      <input
        className='SortDownButton'
        onClick={sortDownButton}
        type='button'
        value='Sort Down'
      />
    </section>
  );
}

export default SortDownButton;
