import React, { Component } from 'react';

const ClearButton = props => {
  const { draftMessage, clearMessage } = props;

  return (
    <section>
      <button
        className='ClearButton'
        onClick={clearMessage}
        disabled={!draftMessage}
      >
      Clear
      </button>
    </section>
  );
}

export default ClearButton;
