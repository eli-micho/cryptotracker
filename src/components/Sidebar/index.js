import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './styles.scss';

//images
import logo from './../../assets/imgs/crypto_logo.svg';

const Sidebar = () => {
    return (
        <div className="sidebar">
            <div className="logoWrap">
                <img src={logo} alt="logo" className="logo"/>
                <h2 className="appTitle">CryptoCrunch</h2>
            </div>

            <div className="userActionsWrap">
                <ul>
                    <li><NavLink exact={true} activeClassName="isActive" to="/"><i className="fas fa-home"></i>Home</NavLink></li>
                    <li><NavLink exact={true} activeClassName="isActive" to="/trending"><i className="fas fa-fire"></i>Trending</NavLink></li>
                    <li><NavLink exact={true} activeClassName="isActive" to="/nft"><i className="fab fa-hacker-news"></i>NFTs Portal</NavLink></li>
                </ul>
            </div>

            <div className="suggestionsWrap">
                <h4>Suggestions</h4>
                <p>Do you have suggestions on how to improve the user experience? Feel free to contact us!</p>
            </div>
        </div>
    );
};

export default Sidebar;
