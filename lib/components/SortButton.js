import React, { Component } from 'react';

const SortButton = props => {
  const { allMessages, reverseMessages } = props;

  return (
    <section>
      <input
        className='SortUpButton'
        onClick={reverseMessages}
        type='button'
        value='Sort Up'
      />
      <input
        className='SortDownButton'
        onClick={reverseMessages}
        type='button'
        value='Sort Down'
      />
    </section>
  );
}

export default SortButton;
