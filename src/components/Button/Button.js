import React from "react";

import styles from "./Button.module.css";

const Button = () => {
  let buttonText = "View More >>>  ";

  return (
    <div>
      <button className={styles.button}>{buttonText}</button>
    </div>
  );
};

export default Button;
