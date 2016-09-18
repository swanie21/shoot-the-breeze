import React, { Component } from 'react';

const SortUpButton = props => {
  const { allMessages, sortUpButton } = props;

  return (
    <section>
      <input
        className='SortUpButton'
        onClick={sortUpButton}
        type='button'
        value='Sort Up'
      />
    </section>
  );
}

export default SortUpButton;
