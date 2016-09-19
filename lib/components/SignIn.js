import React, { Component } from 'react';
import firebase, { reference, signIn } from '../firebase';

const SignIn = props => {
  const { user } = props;
  if (user !== null)
    return (
      <section className='UserLoggedIn'>
        <p>Logged in as {user.displayName} ({user.email}).</p>
      </section>
    );
    if (user === null)
      return (
        <section className='SignedOut'>
          <input
            className='LoginButton'
            type='button'
            onClick={()=>signIn()}
            value='Log in'
          />
        </section>
      );
    }

export default SignIn;
