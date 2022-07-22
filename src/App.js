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
    };
  }
  sortById=()=>{
    //взять массив
    //отсортировать
    //изменить состояние
  }
  render() {
    const { users } = this.state;
    return (
      <>
        <h1 className="heading" title="react">Hi!</h1>
        <button onClick={this.sortById}>sort by ID</button>
        <ol>
          {users.map((user,i) => 
            <li key={i}>
              <Ciao  fname={user.fname} sname={user.lname} id={user.id} />
            </li>
          )}
        </ol>
      </>
    );
  }
}

export default App;
