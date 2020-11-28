import axios from "./../../axios-orders";

export const changeIngredients = (ingredient, changeType) => ({
  type: "CHANGE_INGREDIENTS",
  ingredientName: ingredient,
  changeType: changeType,
});

export const initIngredients = () => {
  return (dispatch) => {
    axios
      .get("/ingredinets.json")
      .then((result) => {
        dispatch({ type: "INIT_INGREDIENTS", ingredients: result.data });
      })
      .catch((err) => {
        console.log(err);
      });
  };
};
