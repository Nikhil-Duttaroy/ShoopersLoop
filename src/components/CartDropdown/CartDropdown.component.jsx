import React from 'react'
import { connect } from "react-redux";
import CustomButton from './../CustomButton/CustomButton.components';
import CartItem from "./../CartItem/CartItem.component";

import { selectCartItems } from "./../../redux/cart/cart.selector";

import './CartDropdown.styles.scss'



const CartDropdown = ({ cartItems }) => (
  <div className='cart-dropdown'>
    <div className='cart-items'>
      {cartItems.map(cartItem => (
        <CartItem key={cartItem.id} item={cartItem}/>
      ))}
    </div>
    <CustomButton>GO TO CHECKOUT</CustomButton>
  </div>
);

//*Removed as we are using reselect library
// const mapStateToProps =({cart:{cartItems}}) => ({
//   cartItems
// })

const mapStateToProps =(state) => ({
   cartItems:selectCartItems(state)
})

export default connect(mapStateToProps)(CartDropdown);