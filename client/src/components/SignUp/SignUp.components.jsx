import React,{useState} from "react";
import { connect } from "react-redux";
import FormInput from "./../FormInput/FormInput.components";
import CustomButton from "./../CustomButton/CustomButton.components";
// import { auth, createUserProfileDocument } from "../../firebase/firebase.utils";

import { signUpStart } from "../../redux/user/user.actions";

import "./SignUp.styles.scss"



const SignUp = ({signUpStart}) => {
  const [userCredentials,setUserCredentials]=useState({
      displayName: "",
      email: "",
      password: "",
      confirmPassword: "",
    });

    const { displayName, email, password, confirmPassword } =userCredentials;
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("Passwords Don't Match");
      return;
    }

    signUpStart({displayName,email,password})

    // try {
    //   const { user } = await auth.createUserWithEmailAndPassword(
    //     email,
    //     password
    //   );

    //   createUserProfileDocument(user, { displayName });

        // this.setState({
        //   displayName: "",
        //   email: "",
        //   password: "",
        //   confirmPassword: "",
        // });
    
    // } catch (error) {
    //   console.error("ERROR : " + error);
    // }
  };

  const handleChange = e=>{
      const{name,value}=e.target;
      setUserCredentials({...userCredentials,[name]:value});
     }


    return (
      <div className='sign-up'>
        <h2 className='title'>I do not have account</h2>
        <span>Sign up with your email account</span>
        <form className='sign-up-form' onSubmit={handleSubmit}>
          <FormInput
            type='text'
            name='displayName'
            value={displayName}
            onChange={handleChange}
            label='Display Name'
            required
          ></FormInput>
          <FormInput
            type='email'
            name='email'
            value={email}
            onChange={handleChange}
            label='Email'
            required
          ></FormInput>
          <FormInput
            type='password'
            name='password'
            value={password}
            onChange={handleChange}
            label='Password'
            required
          ></FormInput>
          <FormInput
            type='password'
            name='confirmPassword'
            value={confirmPassword}
            onChange={handleChange}
            label='Confirm Password'
            required
          ></FormInput>
          <CustomButton type='submit'>SIGN UP</CustomButton>
        </form>
      </div>
    );
  }


const mapDispatchToProps = dispatch => ({
  signUpStart: userCredentials => dispatch(signUpStart(userCredentials)),
});

export default connect(null, mapDispatchToProps)(SignUp);
