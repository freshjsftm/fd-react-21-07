import React, {useContext} from "react";
import { NavLink } from "react-router-dom";
import cx from "classnames";
import CloseIcon from '@mui/icons-material/Close';
import styles from "./NavMenu.module.scss";
import { MenuContext } from "../../contexts";

const NavMenu = () => {
  const {state:{isMenuOpen}, menuClose} = useContext(MenuContext);
  const navClass = cx(styles.nav,{
    [styles.open]:isMenuOpen
  });
  return (
    <nav className={navClass}>
      <CloseIcon  className={styles['close-btn']} onClick={menuClose}/>
      <ul className={styles.list}>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/signup">SignUp</NavLink>
        </li>
        <li>
          <NavLink to="/chat">Chat</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavMenu;
