import React from "react";
import Aux from "../../../hoc/Auxilliary/Auxilliary.js";
import Button from "./../../UI/Button/Button";

const orderSummary = (props) => {
  const ingredients = Object.entries(props.ingredients).map((ingredient) => {
    return (
      <li key={ingredient[0]}>
        <span style={{ textTransform: "capitalize" }}>{ingredient[0]}</span>:
        {ingredient[1]}
      </li>
    );
  });

  return (
    <Aux>
      <h3>Your Order</h3>
      <p>A delicious burger with the following ingredients:</p>
      <ul>{ingredients}</ul>
      <p>
        <strong>Total Price : Rs {props.totalPrice.toFixed(2)}/-</strong>
      </p>
      <p>Continue to checkout?</p>
      <Button btnType="Success" clicked={props.continuePurchaseHandler}>
        CONTINUE
      </Button>
      <Button
        btnType="Danger"
        clicked={props.handlePurchasing.bind(this, false)}
      >
        CANCEL
      </Button>
    </Aux>
  );
};

export default orderSummary;
