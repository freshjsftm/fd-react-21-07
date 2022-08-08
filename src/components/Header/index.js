import React, { Component } from "react";
import { Link } from "react-router-dom";
import cx from "classnames";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import { UserContext, ThemeContext } from "../../contexts";
import styles from "./Header.module.scss";
import CONSTANTS from "../../constants";
const { THEMES } = CONSTANTS;

class Header extends Component {
  render() {
    return (
      <ThemeContext.Consumer>
        {([theme, setTheme]) => {
          const stylesContainer = cx(styles.container, {
            [styles.light]: theme === THEMES.LIGHT,
            [styles.dark]: theme === THEMES.DARK,
          });
          const hendlerSwitch = () => {
            const newTheme =
              theme === THEMES.LIGHT ? THEMES.DARK : THEMES.LIGHT;
            setTheme(newTheme);
          };
          return (
            <header className={stylesContainer}>
              <Link to="/">Logo</Link>
              <div>
                <span onClick={hendlerSwitch}>
                  {theme === THEMES.LIGHT ? <DarkModeIcon /> : <WbSunnyIcon />}
                </span>
                <UserContext.Consumer>
                  {({ fname }) => <p>Hi, {fname}!</p>}
                </UserContext.Consumer>
              </div>
            </header>
          );
        }}
      </ThemeContext.Consumer>
    );
  }
}

export default Header;
