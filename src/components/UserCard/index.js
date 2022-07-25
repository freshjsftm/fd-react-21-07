import React, { Component } from 'react';

class UserCard extends Component {
  render() {
    const {user:{id, fname, lname}} = this.props;
    return (
      <article>
      <h3>
        id={id}) {fname} {lname}
      </h3>
    </article>
    );
  }
}

export default UserCard;
