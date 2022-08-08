import React from "react";
import { UserContext } from "../../../contexts";

const UserProfile = (props) => {
  const renderProps = ({ fname, lname, avatar }) => (
    <div>
      USER:
      <h2>
        {fname} {lname}
      </h2>
      <img src={avatar} alt={lname} />
    </div>
  );
  return <UserContext.Consumer>{renderProps}</UserContext.Consumer>;
};

export default UserProfile;
