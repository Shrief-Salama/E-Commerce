import React from "react";
import { NavLink } from "react-router-dom";

import styles from "./MainButton.module.css";

const MainButton = ({ submit, type, style, link, text, onClick }) => {
  let styleClassName =
    style === "primary"
      ? `${styles.bttn} ${styles.primary}`
      : `${styles.bttn} ${styles.secondary}`;

  const renderButton = () => {
    if (type === "link") {
      return (
        <NavLink className={styleClassName} to={link}>
          {text}
        </NavLink>
      );
    } else {
      return (
        <button type={submit} className={styleClassName} onClick={onClick}>
          {text}
        </button>
      );
    }
  };

  return <div>{renderButton()}</div>;
};

export default MainButton;
