import React, { Component } from "react";
import Order from "../../components/CheckoutSummary/Order/Order";
import axios from "./../../axios-orders";
import _ from "lodash";
import Spinner from "../../components/UI/Spinner/Spinner";
import withErrorHandler from "../../hoc/withErrorHandler/withErrorHandler";
import { connect } from "react-redux";
import * as ordersActionCreators from "./../../store/actions/ordersActions";

class Orders extends Component {
  componentDidMount() {
    this.props.fetchOrders();
  }

  render() {
    let orders = null;
    if (this.props.orders === undefined) {
      orders = null;
    } else if (_.isEmpty(this.props.orders)) {
      orders = <Spinner />;
    } else if (this.props.orders) {
      orders = Object.entries(this.props.orders).map((orderMain) => {
        let [key, order] = orderMain;
        return <Order key={key} order={order} />;
      });
    } else {
      orders = <p>You haven't placed any orders yet!</p>;
    }

    return <div>{orders}</div>;
  }
}

const mapStateToProps = (state) => ({
  orders: state.ordersReducer.orders,
});

const mapDispatchToProps = {
  fetchOrders: ordersActionCreators.fetchOrders,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withErrorHandler(Orders, axios));
