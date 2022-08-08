import React, { Component } from "react";
import Tree from "./components/Tree";

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
    return <>
    <Tree />
    </>;
  }
}

export default App;
