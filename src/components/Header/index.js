import React, { Component } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../contexts";

class Header extends Component {
  render() {
    console.log(this);
    return (
      <header>
        <Link to="/">Logo</Link>
        <p>Hi, {this.context.fname}!</p>
      </header>
    );
  }
}

Header.contextType = UserContext;

export default Header;
