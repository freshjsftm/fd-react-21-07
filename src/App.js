import React, { Component } from "react";
import { BrowserRouter } from "react-router-dom";
import Header from "./components/Header";
import Tree from "./components/Tree";
import { UserContext, ThemeContext } from "./contexts";
import CONSTANTS from "./constants";
const { THEMES } = CONSTANTS;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      theme: THEMES.LIGHT,
      user: {
        id: 1,
        fname: "Elon",
        lname: "Musk",
        avatar:
          "https://challengepost-s3-challengepost.netdna-ssl.com/photos/production/user_photos/000/876/317/datas/profile.jpg",
      },
    };
  }

  setTheme = (theme) => this.setState({theme})

  render() {
    const { user, theme } = this.state;
    return (
      <BrowserRouter>
        <ThemeContext.Provider value={[theme, this.setTheme]}>
          <UserContext.Provider value={user}>
            <Header />
            <Tree />
          </UserContext.Provider>
        </ThemeContext.Provider>
      </BrowserRouter>
    );
  }
}

export default App;
