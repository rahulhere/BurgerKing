import React from "react";
import styles from "./Logo.module.css";
import logoImg from "./../../assets/images/burgerlogo.png";

const logo = () => {
  return (
    <div className={styles.Logo}>
      <img src={logoImg} alt="Company's Logo" />
    </div>
  );
};

export default logo;
