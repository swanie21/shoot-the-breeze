import React, { Component } from 'react';
import firebase, { reference, signIn } from '../firebase';

// const SignIn = props => {
//   const { user } = props;
export default function ({ user }) {
  if (user) {
    return(
      <section className='UserLoggedIn'>
        <p>Logged in as {user.displayName} ({user.email}).</p>
      </section>
    );
  }
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
}

// export default SignIn;
