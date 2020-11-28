import React from "react";
import Logo from "../../Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";
import SideDrawerToggle from "./SideDrawerToggle/SideDrawerToggle";
import styles from "./Toolbar.module.css";

const toolbar = (props) => {
  return (
    <header className={styles.Toolbar}>
      <SideDrawerToggle clicked={props.setSideDrawerVisible.bind(this, true)} />
      <Logo />
      <nav className={styles.desktopOnly}>
        <NavigationItems />
      </nav>
    </header>
  );
};

export default toolbar;
