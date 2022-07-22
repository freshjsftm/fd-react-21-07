import React, { Component } from "react";
import Ciao from "./components/Ciao";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [
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
      ],
      isUpSortById:true
    };
  }
  sortById=()=>{
    const { users, isUpSortById } = this.state;
    //const copyUsers = [...users];
    const copyUsers = JSON.parse(JSON.stringify(users));
    copyUsers.sort((a, b) =>{
      return isUpSortById ? a.id - b.id : b.id - a.id ;
    })
    this.setState({
      users:copyUsers,
      isUpSortById: !isUpSortById
    })
  }
  render() {
    const { users, isUpSortById } = this.state;
    return (
      <>
        <h1 className="heading" title="react">Hi!</h1>
        <button onClick={this.sortById}>sort by ID {isUpSortById?'DN':'UP'}</button>
        <ol>
          {users.map((user) => 
            <li key={user.id}>
              <Ciao  fname={user.fname} sname={user.lname} id={user.id} />
            </li>
          )}
        </ol>
      </>
    );
  }
}

export default App;
