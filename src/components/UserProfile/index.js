import React, {useContext} from 'react';
import { UserContext, ThemeContext } from '../../contexts';
import CONSTANTS from "../../constants";
import styles from './UserProfile.module.scss'
const {THEMES} = CONSTANTS;

const mapStyle={
  [THEMES.LIGHT]:{backgroundColor:'#fff', color:'#222'},
  [THEMES.DARK]:{backgroundColor:'#222', color:'#fff'}
}

const UserProfile = () => {
  const [{name}] = useContext(UserContext);
  const [theme, setTheme] = useContext(ThemeContext);
  const handlerTheme = () => {
    setTheme(theme===THEMES.LIGHT?THEMES.DARK:THEMES.LIGHT);
  };
  return (
    <section className={styles.container} style={mapStyle[theme]}>
      <h2 className={styles.container_heading}>User profile</h2>
      <h3>Hi, {name}</h3>
      <button onClick={handlerTheme}>switch theme</button>
    </section>
  );
}

export default UserProfile;
