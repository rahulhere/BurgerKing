const ordersReducer = (state = { orders: {} }, actions) => {
  switch (actions.type) {
    case "FETCH_ORDERS":
      return {
        ...state,
        orders: actions.orders,
      };
    default:
      return state;
  }
};

export default ordersReducer;
