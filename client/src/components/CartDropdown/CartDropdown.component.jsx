import React from "react";
import { connect,useSelector} from "react-redux";
import CartItem from "./../CartItem/CartItem.component";

import { createStructuredSelector } from "reselect";
import { withRouter } from "react-router-dom";

import { selectCartItems } from "./../../redux/cart/cart.selector";
import { toggleCartHidden } from "../../redux/cart/cart.actions";



import {
  CartDropdownContainer,
  CartDropdownButton,
  EmptyMessageContainer,
  CartItemsContainer,
} from "./CartDropdown.styles";

export const CartDropdown = ({ cartItems, history, dispatch }) => {
  const user=useSelector(state=>state.user.currentUser)
  // console.log(user);
  return (
    <CartDropdownContainer>
      <CartItemsContainer>
        {cartItems.length ? (
          cartItems.map((cartItem) => (
            <CartItem key={cartItem.id} item={cartItem} />
          ))
        ) : (
          <EmptyMessageContainer>Your cart is empty</EmptyMessageContainer>
        )}
      </CartItemsContainer>
      <CartDropdownButton
        onClick={() => {
          user ? history.push("/checkout") : history.push("/signin");
          dispatch(toggleCartHidden());
        }}
      >
        {user ? "GO TO CHECKOUT" : "SignIN"}
      </CartDropdownButton>
    </CartDropdownContainer>
  );  
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
});

export default withRouter(connect(mapStateToProps)(CartDropdown));
