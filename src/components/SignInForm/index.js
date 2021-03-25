import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { emailSignInStart } from './../../redux/User/user.actions';

import FormButton from '../Forms/FormButton';
import FormInput from './../Forms/FormInput';
import './styles.scss';

const mapState = ({ user }) => ({
    currentUser: user.currentUser
})

const RegisterForm = (props) => {
    const dispatch = useDispatch();
    const history = useHistory();
    const { currentUser } = useSelector(mapState);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    useEffect(() => {
        if (currentUser) {
            resetForm();
            history.push('/');
        }
    }, [currentUser]);

    const resetForm = () => {

        setEmail('');
        setPassword('');
    };

    const handleFormSubmit = event => {
        event.preventDefault();
        dispatch(emailSignInStart({
            email,
            password
        }))
    };

    return(
        <form className="signInForm" onSubmit={handleFormSubmit}>

            <FormInput
                label="Email"
                placeholder="Email"
                name="email"
                type="text"
                handleChange={e => setEmail(e.target.value)}
            />

            <FormInput
                label="Password"
                placeholder="Password"
                name="password"
                type="password"
                handleChange={e => setPassword(e.target.value)}
            />

            <FormButton type="submit">
                Register
            </FormButton>
        </form>
    );
};

export default RegisterForm;