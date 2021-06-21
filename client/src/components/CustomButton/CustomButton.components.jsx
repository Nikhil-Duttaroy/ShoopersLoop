import React from 'react'
import { CustomButtonContainer } from './CustomButton.styles';

// import './CustomButton.styles.scss'

// const CustomButton = (
//   /*{{
//   children,
//   isGoogleSignIn,
//   inverted,
//   ...otherProps
  
// }}*/ {
//     children,
//     ...props
//   }
// ) => (
//   // <button
//   //   className={`${inverted ? "inverted" : ""} ${
//   //     isGoogleSignIn ? "google-sign-in" : ""
//   //   } custom-button`}
//   //   {...otherProps}
//   // >
//   //   {children}
//   // </button>
//   <CustomButtonContainer {...props}>{children}</CustomButtonContainer>
// );
const CustomButton = ({ children, ...props }) => (
  <CustomButtonContainer {...props}>{children}</CustomButtonContainer>
);


export default CustomButton