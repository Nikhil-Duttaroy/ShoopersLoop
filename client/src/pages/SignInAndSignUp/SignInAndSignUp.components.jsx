import React from 'react';

import './SignInAndSignUp.styles.scss'
import SignIn from './../../components/SignIn/SignIn.components';
import SignUp from './../../components/SignUp/SignUp.components';
import {Helmet} from 'react-helmet-async';


const SignInAndSignUp = () => {
    return (
      <>
        <Helmet>
          <title>Login or Sign Up</title>
          <meta
            name='description'
            content='Login or Sign up to Shoopers Loop.'
          />
          <link rel='canonical' href='/signin' />
        </Helmet>
        <div className='sign-in-and-sign-up'>
          <SignIn />
          <SignUp />
        </div>
      </>
    );
}

export default SignInAndSignUp;
