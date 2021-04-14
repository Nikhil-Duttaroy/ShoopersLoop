import React from 'react'
import { connect } from "react-redux";
import { toggleCartHidden } from "./../../redux/cart/cart.actions";

import { selectCartItemsCount } from "../../redux/cart/cart.selector";


import {ReactComponent as ShoppingIcon} from '../../assets/shopping-bag.svg'

import './CartIcon.styles.scss';




const CartIcon = ({ toggleCartHidden, itemCount }) => (
  <div className='cart-icon' onClick={toggleCartHidden}>
    <ShoppingIcon className='shopping-icon' />
    <span className='item-count'>{itemCount}</span>
  </div>
);

//to show total number of items in the shopping bag 
//*Removed this as we are using reselect library for better performance*
// const mapStateToProps = ({ cart: { cartItems } }) => ({
//   itemCount: cartItems.reduce((accumulatedQuantity , cartItem) => accumulatedQuantity + cartItem.quantity , 0 )
// });

//to show total number of items in the shopping bag 
const mapStateToProps = (state) => ({
  itemCount: selectCartItemsCount(state)
});

const mapDispatchToProps =(dispatch)=>({
    toggleCartHidden:()=>dispatch(toggleCartHidden())
})

export default connect(mapStateToProps,mapDispatchToProps)(CartIcon)