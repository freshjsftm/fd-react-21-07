import React, { Component } from "react";
import UserCard from '../UserCard/index';
const usersDB = [
  {
    id: 4,
    fname: "Elon",
    lname: "Musk",
  },
  {
    id: 1,
    fname: "Molly",
    lname: "Dolly",
  },
  {
    id: 3,
    fname: "Elen",
    lname: "Musk",
  },
  {
    id: 2,
    fname: "Tom",
    lname: "Chrom",
  },
  {
    id: 5,
    fname: "Fred",
    lname: "Bredsk",
  },
];
class UsersList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: usersDB,
    };
  }
  showUser = (user) => <UserCard key={user.id} user={user}/>;
  render() {
    const { users } = this.state;
    return (
      <section>
        <h2>Users list:</h2>
        {users.map(this.showUser)}
      </section>
    );
  }
}

export default UsersList;
