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
      users: usersDB.map((user)=>({...user, isSelected:false}))
    };
  }
  setIsSelected = (id)=>{
    const { users } = this.state;
    const newUsers = users.map((user)=>({
      ...user,
      isSelected: user.id===id ? !user.isSelected : user.isSelected
    }))
    this.setState({
      users: newUsers
    })
  }
  showUser = (user) => <UserCard key={user.id} user={user} setIsSelected={this.setIsSelected}/>;
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
