import React from 'react'
import StripeCheckout from 'react-stripe-checkout'
import axios from 'axios';
import { connect } from 'react-redux';
import { checkOutSuccess } from '../../redux/cart/cart.actions';


const StripeCheckoutButton = ({ price, checkOutSuccess }) => {
  const priceForStripe = price * 100;
  const publishableKey =
    "pk_test_51IiYKkSBbaq459js3CextsJPU1LnSVmY0Eo8gHDT9zONQKCfJ2PJbLQtFFBu9QtlZ6zsYHy9EGpASnMzIKYvohYM008Mc1mNC0";
  const onToken = (token) => {
    // console.log(token);
    axios({
      url: "http://localhost:3000/payment",
      method: "post",
      data: {
        amount: priceForStripe,
        token: token,
      },
    })
      .then((response) => {
        alert("Payment Successful");
        checkOutSuccess();
      })
      .catch((error) => {
        alert("Something Went Wrong With The Payment . Please Try Again");
        console.log("Payment error: " + JSON.parse(error));
      });
  };
  return (
    <StripeCheckout
      label='Pay Now'
      name='CRWN Clothing Ltd.'
      billingAddress
      shippingAddress
      image='https://svgshare.com/i/CUz.svg'
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel='Pay Now'
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

    const mapDispatchToProps =(dispatch) => ({
      checkOutSuccess:()=>dispatch(checkOutSuccess())
    })

    export default connect(null,mapDispatchToProps)(StripeCheckoutButton)