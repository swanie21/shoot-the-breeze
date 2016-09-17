import React from 'react';

const User = props => {
  const { user } = props;
    if (user !== null) return (
      <section>
        <p>{user.displayName}</p>
        <p>{user.email}</p>
      </section>
    );
    if (user === null) return(
      <section></section>
    );
  }

export default User;
