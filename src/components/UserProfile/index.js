import React, {useContext} from 'react';
import { UserContext } from '../../contexts';

const UserProfile = () => {
  const [{name}] = useContext(UserContext);
  return (
    <>
      <h2>User profile</h2>
      <h3>Hi, {name}</h3>
    </>
  );
}

export default UserProfile;
