import React from 'react'
import StripeCheckout from 'react-stripe-checkout'

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey =
      "pk_test_51IiYKkSBbaq459js3CextsJPU1LnSVmY0Eo8gHDT9zONQKCfJ2PJbLQtFFBu9QtlZ6zsYHy9EGpASnMzIKYvohYM008Mc1mNC0";
   const onToken = token =>{
      console.log(token);
      alert("Payment Successful")
    }
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

    }


    export default StripeCheckoutButton