import React from "react";
// import logo from "../../logo.png";
import { Link, useLocation } from "react-router-dom";
const HeaderTask = () => {
  const {pathname} = useLocation();
  return (
    <div>
      {/* <Link to="/"><img src={logo} alt="logo"/></Link> */}
      <Link to="/"><img src="/static/images/logo.png" alt="logo"/></Link>    
      {pathname==='/login'?<Link to="/signup">Signup</Link>:<Link to="/login">Login</Link>}
    </div>
  );
};
export default HeaderTask;
