import React, { Component } from 'react';

const SubmitButton = props => {
  const { draftMessage, handleNewMessage } = props

  return (
    <section>
      <button
        onClick={handleNewMessage}
        disabled={!draftMessage}
      >
        Submit
      </button>
    </section>
  );
}

export default SubmitButton;
