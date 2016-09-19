import React from 'react';

const User = props => {
  const { user } = props;
    if (user !== null) return (
      <section className='UserListDisplay'>
        <p className='UserListName'>{user.displayName}</p>
        <p className='UserListEmail'>({user.email})</p>
      </section>
    );
    if (user === null) return(
      <section></section>
    );
  }

export default User;
