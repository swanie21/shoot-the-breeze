import React from 'react';
import Message from './Message';

const User = props => {
  const { user, message, handleIndividualUser } = props;
    if (user !== null)
      return (
      <section className='UserListDisplay'>
        <p
          className='UserListName'
          onClick={handleIndividualUser}
          >{message.user.displayName}</p>
        <p className='UserListEmail'>({message.user.email})</p>
      </section>
    );
    if (user === null) return (
      <section></section>
    );
  }

export default User;
