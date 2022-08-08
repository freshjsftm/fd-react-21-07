import React, { Component } from "react";
import { BrowserRouter } from "react-router-dom";
import Header from "./components/Header";
import Tree from "./components/Tree";
import { UserContext } from "./contexts";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {
        id: 1,
        fname: "Elon",
        lname: "Musk",
        avatar:
          "https://challengepost-s3-challengepost.netdna-ssl.com/photos/production/user_photos/000/876/317/datas/profile.jpg",
      },
    };
  }

  render() {
    console.log(UserContext);
    const { user } = this.state;
    return (
      <BrowserRouter>
        <UserContext.Provider value={user}>
          <Header />
          <Tree />
        </UserContext.Provider>
      </BrowserRouter>
    );
  }
}

export default App;
