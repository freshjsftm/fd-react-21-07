import React, { useContext, useRef, useEffect, useId } from "react";
import { NavLink } from "react-router-dom";
import cx from "classnames";
import CloseIcon from "@mui/icons-material/Close";
import MenuIcon  from '@mui/icons-material/Menu';
import styles from "./NavMenu.module.scss";
import { MenuContext } from "../../contexts";


const NavMenu = () => {
  const {
    state: { isMenuOpen },
    menuClose, menuOpen, idOpen
  } = useContext(MenuContext);
  const navRef = useRef(null);
  const navClass = cx(styles.nav, {
    [styles.open]: isMenuOpen,
  });
  const idNav = useId();

  useEffect(() => {
    const handlerClick = ({target}) => {
      console.log(target)
      //if (isMenuOpen && !navRef.current.contains(target)) {
      if (isMenuOpen && !document.getElementById(idNav).contains(target) && !document.getElementById(idOpen).contains(target) ) {
        menuClose();
      }
    };
    window.addEventListener("click", handlerClick);
    return () => {
      window.removeEventListener("click", handlerClick);
    };
  }, [isMenuOpen]);

  return (
    <nav className={navClass} ref={navRef} id={idNav}>
      {/* <MenuIcon  className={styles["open-btn"]} onClick={menuOpen}/> */}
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
