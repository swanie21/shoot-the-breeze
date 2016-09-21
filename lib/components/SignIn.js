import React, { Component } from 'react';
import firebase, { reference, signIn } from '../firebase';
import LoginButton from './LoginButton';

const SignIn = props => {
  const { user } = props;
  if (user !== null)
    return (
      <section className='UserLoggedIn'>
        <p>Logged in as <span>{user.displayName}</span> ({user.email})</p>
      </section>
    );
    if (user === null)
      return (
        <section className='SignedOut'>
          <LoginButton />
        </section>
      );
    }

export default SignIn;
