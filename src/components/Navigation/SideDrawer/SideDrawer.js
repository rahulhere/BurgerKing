import React from "react";
import Logo from "../../Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";
import styles from "./SideDrawer.module.css";
import Aux from "./../../../hoc/Auxilliary/Auxilliary";
import Backdrop from "./../../UI/Backdrop/Backdrop";

const sideDrawer = (props) => {
  const backdrop = props.visible ? (
    <Backdrop clicked={props.setSideDrawerVisible.bind(this, false)} />
  ) : null;

  return (
    <Aux>
      {backdrop}

      <div
        className={[
          styles.SideDrawer,
          props.visible ? styles.Open : styles.Close,
        ].join(" ")}
      >
        <div className={styles.Logo}>
          <Logo />
        </div>
        <nav>
          <NavigationItems />
        </nav>
      </div>
    </Aux>
  );
};

export default sideDrawer;
