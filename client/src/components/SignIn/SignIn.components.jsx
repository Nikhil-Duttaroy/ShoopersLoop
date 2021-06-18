import React, { useState } from "react";

import "./SignIn.styles.scss";
import FormInput from "./../FormInput/FormInput.components";
import CustomButton from "./../CustomButton/CustomButton.components";

import {
  googleSignInStart,
  emailSignInStart,
} from "../../redux/user/user.actions";
import { connect } from "react-redux";

const  SignIn =({ emailSignInStart ,googleSignInStart}) => {
  const [ userCredentials, setCredentials ] = useState({email:'' , password:''})
  const { email, password } = userCredentials;
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    const { email, password } =userCredentials;
    emailSignInStart(email, password);
    // try {
    //   await auth.signInWithEmailAndPassword(email, password);
    //   this.setState({ email: "", password: "" });
    // } catch (error) {
    //   console.error("ERROR :" + error);
    // }
    // this.setState({ email: "", password: "" });
  };

 const handleChange = (e) => {
    const { value, name } = e.target;
    setCredentials({...userCredentials, [name]: value });
  };

    return (
      <div className='sign-in'>
        <h2>I already Have an Account</h2>
        <span>Sign in with your email and password</span>

        <form action='' onSubmit={handleSubmit}>
          <FormInput
            type='email'
            name='email'
            value={email}
            handleChange={handleChange}
            label='email'
            required
          />
          <FormInput
            type='password'
            name='password'
            value={password}
            handleChange={handleChange}
            label='password'
            required
          />
          <div className='button'>
            <CustomButton type='submit' value='Submit Form'>
              Sign In
            </CustomButton>
            <CustomButton
              onClick={googleSignInStart}
              value='Submit Form'
              isGoogleSignIn
              type='button'
            >
              Sign In With Google{" "}
            </CustomButton>
          </div>
        </form>
      </div>
    );
  }


const mapDispatchToProps = (dispatch) => ({
  googleSignInStart: () => dispatch(googleSignInStart()),
  emailSignInStart: (email, password) =>
    dispatch(emailSignInStart({ email, password })),
});

export default connect(null, mapDispatchToProps)(SignIn);
