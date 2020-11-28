import React, { Component } from "react";

import CheckoutSummary from "./../../components/CheckoutSummary/CheckoutSummary";
import { Route } from "react-router-dom";
import ContactData from "./ContactData/ContactData";
import { connect } from "react-redux";

class Checkout extends Component {
  checkoutContinuedHandler = () => {
    this.props.history.push("/checkout/contact-data");
  };

  checkoutCancelledHandler = () => {
    this.props.history.goBack();
  };

  componentDidMount() {
    let ingredientsAreEmpty = this.areIngredientsEmpty(this.props.ingredients);
    if (ingredientsAreEmpty) {
      this.props.history.replace("/");
    }
  }

  areIngredientsEmpty = (ingredientObj) => {
    let isFilled = false;
    for (const key in ingredientObj) {
      const ingredientVal = ingredientObj[key];
      if (ingredientVal !== 0) {
        isFilled = true;
      }
    }
    return !isFilled;
  };

  render() {
    return (
      <div>
        <CheckoutSummary
          ingredients={this.props.ingredients}
          checkoutContinued={this.checkoutContinuedHandler}
          checkoutCancelled={this.checkoutCancelledHandler}
        />
        <Route
          path={this.props.match.path + "/contact-data"}
          exact
          component={ContactData}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  ingredients: state.burgerBuilderReducer.ingredients,
});

export default connect(mapStateToProps)(Checkout);
