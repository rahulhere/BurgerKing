import React from "react";
import styles from "./BuildControl.module.css";

const BuildControl = (props) => {
  return (
    <div className={styles.BuildControl}>
      <span className={styles.Label}>{props.label}</span>
      <button
        className={styles.Less}
        disabled={props.disabled}
        onClick={props.changeIngredients.bind(this, props.type, "decrease")}
      >
        Less
      </button>
      <button
        className={styles.More}
        onClick={props.changeIngredients.bind(this, props.type, "increase")}
      >
        More
      </button>
    </div>
  );
};

export default BuildControl;
