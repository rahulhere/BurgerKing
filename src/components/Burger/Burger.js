import React from "react";
import styles from "./Burger.module.css";
import BurgerIngredient from "./BurgerIngredient/BurgerIngredient";

const burger = (props) => {
  let ingredientsObj = props.ingredients;

  let ingredients = [];

  for (const ingredientName in ingredientsObj) {
    if (ingredientsObj.hasOwnProperty(ingredientName)) {
      const element = ingredientsObj[ingredientName];
      for (let i = 0; i < element; i++) {
        ingredients.push(
          <BurgerIngredient key={ingredientName + i} type={ingredientName} />
        );
      }
    }
  }

  if (ingredients.length === 0) {
    ingredients = <p>Please start adding ingredients!</p>;
  }

  return (
    <div className={styles.Burger}>
      <BurgerIngredient type="bread-top" />
      {ingredients}
      <BurgerIngredient type="bread-bottom" />
    </div>
  );
};

export default burger;
