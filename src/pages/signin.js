import React from 'react';
import { ScrollToTop } from 'react-scroll/modules/mixins/animate-scroll';
import SignIn from '../components/Signin';

const SigninPage = () => {
  return (
    <>
      <ScrollToTop />
      <SignIn />
    </>
  );
};

export default SigninPage;
