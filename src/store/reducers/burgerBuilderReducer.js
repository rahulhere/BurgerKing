const initialState = {
  ingredients: null,
  totalPrice: 300,
};

const INGREDIENT_PRICES = {
  salad: 35,
  cheese: 30,
  meat: 100,
  bacon: 60,
};

const burgerBuilderReducer = (state = initialState, actions) => {
  switch (actions.type) {
    case "CHANGE_INGREDIENTS":
      if (actions.changeType === "increase") {
        return {
          ...state,
          ingredients: {
            ...state.ingredients,
            [actions.ingredientName]:
              state.ingredients[actions.ingredientName] + 1,
          },
          totalPrice:
            state.totalPrice + INGREDIENT_PRICES[actions.ingredientName],
        };
      } else if (actions.changeType === "decrease") {
        return {
          ...state,
          ingredients: {
            ...state.ingredients,
            [actions.ingredientName]:
              state.ingredients[actions.ingredientName] - 1,
          },
          totalPrice:
            state.totalPrice - INGREDIENT_PRICES[actions.ingredientName],
        };
      }
      break;

    case "INIT_INGREDIENTS":
      return {
        ...state,
        ingredients: actions.ingredients,
      };

    default:
      return state;
  }
};

export default burgerBuilderReducer;
