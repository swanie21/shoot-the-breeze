import React, { Component } from 'react';

const SubmitButton = props => {
  const { draftMessage, handleNewMessage } = props

  return (
    <section>
      <button
        className='SubmitButton'
        onClick={handleNewMessage}
        disabled={!draftMessage || draftMessage.length === 140}
      >
        Submit
      </button>
    </section>
  );
}

export default SubmitButton;
