import React, { Component } from "react";
import { Link } from "react-router-dom";
import cx from "classnames";
import {WbSunny, DarkMode} from '@mui/icons-material';
import { UserContext, ThemeContext } from "../../contexts";
import styles from "./Header.module.scss";
import CONSTANTS from "../../constants";
const { THEMES } = CONSTANTS;

class Header extends Component {
  render() {
    return (
      <ThemeContext.Consumer>
        {([theme, setTheme]) => {
          const isLightTheme = theme === THEMES.LIGHT;
          const stylesContainer = cx(styles.container, {
            [styles.light]: isLightTheme,
            [styles.dark]: theme === THEMES.DARK,
          });
          const hendlerSwitch = () => {
            const newTheme = isLightTheme ? THEMES.DARK : THEMES.LIGHT;
            setTheme(newTheme);
          };
          return (
            <header className={stylesContainer}>
              <Link to="/">Logo</Link>
              <div>
                <span onClick={hendlerSwitch}>
                  {isLightTheme ? <DarkMode /> : <WbSunny />}
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
