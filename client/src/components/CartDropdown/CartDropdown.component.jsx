import React from "react";
import { connect } from "react-redux";
import CustomButton from "./../CustomButton/CustomButton.components";
import CartItem from "./../CartItem/CartItem.component";

import { createStructuredSelector } from "reselect";
import { withRouter } from "react-router-dom";

import { selectCartItems } from "./../../redux/cart/cart.selector";
import { toggleCartHidden } from "../../redux/cart/cart.actions";

import "./CartDropdown.styles.scss";

const CartDropdown = ({ cartItems, history, dispatch }) => (
  <div className='cart-dropdown'>
    <div className='cart-items'>
      {cartItems.length ? (
        cartItems.map((cartItem) => (
          <CartItem key={cartItem.id} item={cartItem} />
        ))
      ) : (
        <span className='empty-message'>Your Cart is Empty</span>
      )}
    </div>
    <CustomButton
      onClick={() => {
        history.push("/checkout");
        dispatch(toggleCartHidden());
      }}
    >
      GO TO CHECKOUT
    </CustomButton>
  </div>
);

//*Removed as we are using reselect library
// const mapStateToProps =({cart:{cartItems}}) => ({
//   cartItems
// })

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
});

export default withRouter(connect(mapStateToProps)(CartDropdown));
