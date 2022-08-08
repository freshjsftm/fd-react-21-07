import React from "react";
import cx from "classnames";
import Parent from "./Parent";
import { ThemeContext } from "../../contexts";
import CONSTANTS from "../../constants";
import styles from "./Tree.module.scss";
const { THEMES } = CONSTANTS;

const Tree = (props) => {
  return (
    <ThemeContext.Consumer>
      {([theme]) => {
        const stylesContainer = cx(styles.container, {
          [styles.light]: theme === THEMES.LIGHT,
          [styles.dark]: theme === THEMES.DARK,
        });
        return (
          <div className={stylesContainer}>
            <h2>Tree</h2>
            <Parent />
          </div>
        );
      }}
    </ThemeContext.Consumer>
  );
};

export default Tree;
