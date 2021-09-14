import React from 'react'
import StripeCheckout from 'react-stripe-checkout'
import axios from 'axios';
import { connect } from 'react-redux';
import { checkOutSuccess } from '../../redux/cart/cart.actions';


const StripeCheckoutButton = ({ price, checkOutSuccess }) => {
  const priceForStripe = price * 100;
  const publishableKey =
"pk_test_51JZYjBSGFvUNqDCVCRA0HcepI7LkueBNur7rgRJCfqgWmcVfAjN4k44d2hF8vraD6Z2bf40Q4BKshcvAWhirIgxI00dgkWnceN";

    // "pk_test_51IiYKkSBbaq459js3CextsJPU1LnSVmY0Eo8gHDT9zONQKCfJ2PJbLQtFFBu9QtlZ6zsYHy9EGpASnMzIKYvohYM008Mc1mNC0";
  const onToken = (token) => {
    // console.log(token);
    axios({
      url: "payment",
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
        console.log("Payment error: " + JSON.parse(error.response));
        alert("Something Went Wrong With The Payment . Please Try Again");
      });
  };
  return (
    <StripeCheckout
      label='Pay Now'
      name='Shopic Ltd.'
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