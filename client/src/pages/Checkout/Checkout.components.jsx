import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import CheckoutItem from "../../components/CheckoutItem/CheckoutItem.component";

import {
  selectCartItems,
  selectCartTotal
} from '../../redux/cart/cart.selector';

import {
  CheckoutPageContainer,
  CheckoutHeaderContainer,
  HeaderBlockContainer,
  TotalContainer,
  WarningContainer,
} from "./Checkout.styles.jsx";
import StripeCheckoutButton from './../../components/StripeButton/StripeButton.component';
import { Helmet } from "react-helmet-async";


const CheckoutPage = ({ cartItems, total }) => (
  <>
    <Helmet>
      <title>Checkout</title>
      <meta
        name='description'
        content='Contact Support team of  Shoopers Loop.'
      />
      <link rel='canonical' href='/contact' />
    </Helmet>
    <CheckoutPageContainer>
      <h1 style={{display:"none"}}>Checkout Page for ShoopersLoop</h1>
      <CheckoutHeaderContainer>
        <HeaderBlockContainer>
          <span>Product</span>
        </HeaderBlockContainer>
        <HeaderBlockContainer>
          <span>Description</span>
        </HeaderBlockContainer>
        <HeaderBlockContainer>
          <span>Quantity</span>
        </HeaderBlockContainer>
        <HeaderBlockContainer>
          <span>Price</span>
        </HeaderBlockContainer>
        <HeaderBlockContainer>
          <span>Remove</span>
        </HeaderBlockContainer>
      </CheckoutHeaderContainer>
      {/* {console.log(cartItems)} */}
      {cartItems.map((cartItem) => (
        <CheckoutItem key={cartItem.id} cartItem={cartItem} />
      ))}
      <TotalContainer>TOTAL: ${total}</TotalContainer>
      <WarningContainer>
        *Please use the following test credit card for payments*
        <br />
        4242 4242 4242 4242 - Exp: 01/60 - CVV: 123
      </WarningContainer>
      <StripeCheckoutButton price={total} />
    </CheckoutPageContainer>
  </>
);

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal
});

export default connect(mapStateToProps)(CheckoutPage)

