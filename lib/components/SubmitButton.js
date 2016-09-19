import React, { Component } from 'react';

const SubmitButton = props => {
  const { draftMessage, handleNewMessage } = props;

  return (
    <section>
      <input
        type='button'
        className='SubmitButton'
        onClick={handleNewMessage}
        disabled={!draftMessage || draftMessage.length >= 140}
        value='Submit'
      />
    </section>
  );
}

export default SubmitButton;
