import React, { Component } from 'react';

class User extends Component {
  constructor({ user }) {
    super();
  }

  render() {
    return (
      <section>
        {/* <p>{this.props.user.displayName}</p>
        <p>{this.props.user.email}</p> */}
      </section>
    );
  }
}

// const User = props => {
//   const { user } = props
//
//     return (
//       <section>
//         <p>{user.displayName}</p>
//         <p>{user.email}</p>
//       </section>
//     );
//   }
// }


export default User;
