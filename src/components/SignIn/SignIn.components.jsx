import React, { Component } from 'react';


import './SignIn.styles.scss'
import FormInput from './../FormInput/FormInput.components';
import CustomButton from './../CustomButton/CustomButton.components';

import { signInWithGoogle } from './../../firebase/firebase.utils';

class SignIn extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             email:'',
             password:''
        }
    }


    handleSubmit=e => {
    e.preventDefault();
    this.setState({email:'' , password:''})
}

handleChange=e=>{
    const{value,name}=e.target;
    this.setState({[name]:value})
}


    render() {
        return (
            <div className='sign-in'>
                <h2>I already Have an Account</h2>
                <span>Sign in with your email and password</span>
                
                <form action="" onSubmit={this.handleSubmit}>
                    <FormInput type="email" name="email" value={this.state.email} handleChange={this.handleChange} label="email" required/>
                    <FormInput type="password" name="password"  value={this.state.password} handleChange={this.handleChange} label="password"required/>
                    <div className="button">
                    <CustomButton type="submit" value="Submit Form">Sign In</CustomButton>
                    <CustomButton onClick={signInWithGoogle} value="Submit Form" isGoogleSignIn >Sign In With Google </CustomButton>
                    </div>
                </form> 
            </div>
        );
    }
}

export default SignIn;
