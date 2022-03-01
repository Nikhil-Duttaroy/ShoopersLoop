import React from 'react'
import { connect } from "react-redux";
import { toggleCartHidden } from "./../../redux/cart/cart.actions";

import { createStructuredSelector } from "reselect";
import { selectCartItemsCount } from "../../redux/cart/cart.selector";


import {
  CartContainer,
  ShoppingIcon,
  ItemCountContainer,
} from "./CartIcon.styles";


export const CartIcon = ({ toggleCartHidden, itemCount }) => (
  <CartContainer onClick={toggleCartHidden}>
    <ShoppingIcon />
    <ItemCountContainer>{itemCount}</ItemCountContainer>
  </CartContainer>
);

//to show total number of items in the shopping bag 
//*Removed this as we are using reselect library for better performance*
// const mapStateToProps = ({ cart: { cartItems } }) => ({
//   itemCount: cartItems.reduce((accumulatedQuantity , cartItem) => accumulatedQuantity + cartItem.quantity , 0 )
// });

//to show total number of items in the shopping bag 
const mapStateToProps = createStructuredSelector ({
  itemCount: selectCartItemsCount
});

const mapDispatchToProps =(dispatch)=>({
    toggleCartHidden:()=>dispatch(toggleCartHidden())
})

export default connect(mapStateToProps,mapDispatchToProps)(CartIcon)