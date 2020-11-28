import React from "react";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";
import Burger from "../../components/Burger/Burger";
import OrderSummary from "../../components/Burger/OrderSummary/OrderSummary";
import Modal from "../../components/UI/Modal/Modal";
import Aux from "../../hoc/Auxilliary/Auxilliary";
import axios from "./../../axios-orders";
import Spinner from "./../../components/UI/Spinner/Spinner";
import withErrorHandler from "./../../hoc/withErrorHandler/withErrorHandler";
import { connect } from "react-redux";
import * as burgerActionCreator from "./../../store/actions/burgerBuilderActions";

class BurgerBuilder extends React.Component {
  state = {
    purchasing: false,
    loading: false,
  };

  componentDidMount() {
    this.props.initIngredients();
  }

  isPurchasable = (newIngredients) => {
    let itemCount = Object.values({ ...newIngredients }).reduce(
      (total, currentValue) => {
        return total + currentValue;
      },
      0
    );
    return itemCount > 0;
  };

  purchaseHandler = (bool) => {
    this.setState({ purchasing: bool });
  };

  continuePurchaseHandler = () => {
    this.props.history.push("/checkout");
  };

  render() {
    const disabledInfo = { ...this.props.ingredients };
    for (const key in disabledInfo) {
      if (disabledInfo.hasOwnProperty(key)) {
        disabledInfo[key] = disabledInfo[key] <= 0;
      }
    }

    let burger = <Spinner />;
    let orderSummary = <Spinner />;

    if (this.props.ingredients) {
      burger = (
        <Aux>
          <Burger ingredients={this.props.ingredients} />
          <BuildControls
            currentPrice={this.props.totalPrice}
            disabledInfo={disabledInfo}
            changeIngredients={this.props.changeIngredients}
            isPurchasable={this.isPurchasable(this.props.ingredients)}
            showOrderSummary={this.purchaseHandler.bind(this, true)}
          />
        </Aux>
      );

      if (!this.state.loading) {
        orderSummary = (
          <OrderSummary
            totalPrice={this.props.totalPrice}
            handlePurchasing={this.purchaseHandler}
            ingredients={this.props.ingredients}
            continuePurchaseHandler={this.continuePurchaseHandler}
          />
        );
      }
    }
    if (this.props.ingredients === undefined) {
      burger = null;
    }

    return (
      <Aux>
        <Modal
          show={this.state.purchasing}
          removeModal={this.purchaseHandler.bind(this, false)}
        >
          {orderSummary}
        </Modal>
        {burger}
      </Aux>
    );
  }
}

const mapStateToProps = (state) => ({
  ingredients: state.burgerBuilderReducer.ingredients,
  totalPrice: state.burgerBuilderReducer.totalPrice,
});

const mapDispatchToProps = {
  changeIngredients: (ingredient, changeType) =>
    burgerActionCreator.changeIngredients(ingredient, changeType),
  initIngredients: burgerActionCreator.initIngredients,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withErrorHandler(BurgerBuilder, axios));
