import React from 'react';
import RegisterForm from '../../components/RegisterForm';
import './styles.scss';

const Register = () => {
    return (
        <div className="page-main">
            <div className="main">
                <h2>Register</h2>
                <RegisterForm/>
            </div>
        </div>
    );
};

export default Register;