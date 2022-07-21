import React, { Component } from "react";

class Ciao extends Component{
 
  render(){
    const {fname, sname, isHi} = this.props;
    return <h2>{isHi ? 'Hello' : 'Bye'}, {fname} {sname}!</h2>;
  }
}

export default Ciao; 