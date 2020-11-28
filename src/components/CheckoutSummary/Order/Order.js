import React from "react";
import styles from "./Order.module.css";
import _ from "lodash";

const Order = (props) => {
  let ingredients;
  if (props.order.ingredients) {
    ingredients = Object.entries(props.order.ingredients).map((ingredient) => {
      let [key, value] = ingredient;
      return _.capitalize(key) + " " + value;
    });
  }

  return (
    <div className={styles.Order}>
      <p>
        Ingredients:- <strong>{ingredients.join(" : ")}</strong>
      </p>
      <p>
        Price: <strong>4.53 USD</strong>
      </p>
    </div>
  );
};

export default Order;
