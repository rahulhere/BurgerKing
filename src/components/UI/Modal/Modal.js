import React from "react";
import styles from "./Modal.module.css";
import Backdrop from "./../Backdrop/Backdrop";
import Aux from "../../../hoc/Auxilliary/Auxilliary";

const modal = (props) => {
  let backdrop = props.show ? <Backdrop clicked={props.removeModal} /> : null;

  return (
    <Aux>
      {backdrop}
      <div
        className={styles.Modal}
        style={{
          opacity: props.show ? "100" : "0",
          transform: props.show ? "translateY(0)" : "translateY(-100vh)",
        }}
      >
        {props.children}
      </div>
    </Aux>
  );
};

export default modal;
