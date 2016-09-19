import React, { Component } from 'react';
import firebase, { reference, signIn } from '../firebase';

const LoginButton = props => {
  return (
    <section>
      <input
        type='button'
        className="login-button"
        onClick={()=>signIn()}
        value='Log in'
      />
    </section>
  );
}

export default LoginButton;
