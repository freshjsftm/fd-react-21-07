import React, { useContext, useRef, useEffect } from "react";
import { NavLink } from "react-router-dom";
import cx from "classnames";
import CloseIcon from "@mui/icons-material/Close";
import MenuIcon  from '@mui/icons-material/Menu';
import styles from "./NavMenu.module.scss";
import { MenuContext } from "../../contexts";


const NavMenu = () => {
  const {
    state: { isMenuOpen },
    menuClose, menuOpen
  } = useContext(MenuContext);
  const navRef = useRef(null);
  const navClass = cx(styles.nav, {
    [styles.open]: isMenuOpen,
  });

  useEffect(() => {
    const handlerClick = ({target}) => {
      if (isMenuOpen && !navRef.current.contains(target)) {
        menuClose();
      }
    };
    window.addEventListener("click", handlerClick);
    return () => {
      window.removeEventListener("click", handlerClick);
    };
  }, [isMenuOpen]);

  return (
    <nav className={navClass} ref={navRef}>
      <MenuIcon  className={styles["open-btn"]} onClick={menuOpen}/>
      <CloseIcon className={styles["close-btn"]} onClick={menuClose} />
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
