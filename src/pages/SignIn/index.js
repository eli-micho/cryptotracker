import React from 'react';
import SignInForm from '../../components/SignInForm';
import './styles.scss';

const SignIn = () => {
    return (
        <div className="page-main">
            <div className="main">
                <h2>Sign In</h2>
                <SignInForm/>
            </div>
        </div>
    );
};

export default SignIn;