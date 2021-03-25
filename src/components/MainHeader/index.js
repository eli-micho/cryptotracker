import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { signOutUserStart } from './../../redux/User/user.actions';
import { Link } from 'react-router-dom';
import './styles.scss';

const mapState = (user) => ({
    currentUser: user.currentUser
})

const MainHeader = () => {
    const dispatch = useDispatch();
    const { currentUser } = useSelector(mapState);

    const signOut = () => {
        dispatch(signOutUserStart());
    };
    
    return(
        <div className="mainHeader">
            <div className="userInfo">
                <ul className="userBtns">
                    {currentUser && [
                        <li>
                            {currentUser}
                        </li>
                    ]}
                    <li>
                        <Link className="signInBtn" to="/signin">
                            <i className="fas fa-sign-in-alt"></i>
                            <span className="editSpan" style={{display: "none"}}>Edit</span>
                        </Link>
                    </li>
                    <li>
                        <Link className="logInBtn" to="/register">
                            <i className="fas fa-user"></i>
                            <span className="profileSpan" style={{display: "none"}}>My Profile</span>
                        </Link>
                    </li>
                    
                </ul>
            </div>
            <div className="appInfo">
                <p>Welcome to CryptoCrunch. Create an account, log in and start tracking your favourite cryptocurrencies!</p>
            </div>
        </div>
    );
};

export default MainHeader;
