import React from 'react';
import './styles.scss';

const MainHeader = () => {
    return(
        <div className="mainHeader">
            <div className="userInfo">
                <span className="userName">Welcome</span>
                <ul className="userBtns">
                    <li><button><i className="fas fa-user"></i></button></li>
                    <li><button><i className="fas fa-edit"></i></button></li>
                </ul>
            </div>
            <div className="appInfo">
                <p>Welcome to CryptoCrunch. Create an account, log in and start tracking your favourite cryptocurrencies!</p>
            </div>
        </div>
    );
};

export default MainHeader;
