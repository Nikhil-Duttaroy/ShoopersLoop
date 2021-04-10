import React from 'react';

import './SignInAndSignUp.styles.scss'
import SignIn from './../../components/SignIn/SignIn.components';
import SignUp from './../../components/SignUp/SignUp.components';


const SignInAndSignUp = () => {
    return (
      <div className='sign-in-and-sign-up'>
        <SignIn />
        <SignUp />
      </div>
    );
}

export default SignInAndSignUp;
