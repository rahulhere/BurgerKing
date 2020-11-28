import axios from "./../../axios-orders";

export const fetchOrders = () => {
  return (dispatch) => {
    axios
      .get("/orders.json")
      .then((result) => {
        dispatch({ type: "FETCH_ORDERS", orders: result.data });
      })
      .catch((err) => {
        console.log(err);
      });
  };
};
