import React from "react";
import BuildControl from "./BuildControl/BuildControl";
import styles from "./BuildControls.module.css";

const controls = [
  { label: "Meat", type: "meat" },
  { label: "Cheese", type: "cheese" },
  { label: "Salad", type: "salad" },
  { label: "Bacon", type: "bacon" },
];

const BuildControls = (props) => {
  return (
    <div className={styles.BuildControls}>
      <p>
        Current Price: <strong>Rs {props.currentPrice.toFixed(2)}/-</strong>
      </p>

      {controls.map((control) => {
        return (
          <BuildControl
            key={control.label}
            label={control.label}
            type={control.type}
            disabled={props.disabledInfo[control.type]}
            changeIngredients={props.changeIngredients}
          />
        );
      })}

      <button
        onClick={props.showOrderSummary}
        disabled={!props.isPurchasable}
        className={styles.OrderButton}
      >
        ORDER NOW
      </button>
    </div>
  );
};

export default BuildControls;
