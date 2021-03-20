import React from 'react';
import CurrencyCard from '../CurrencyCard';
import MainHeader from '../MainHeader';
import './styles.scss';

const MainContent = () => {
    return(
        <div className="main">
            <MainHeader/>
            <CurrencyCard/>
        </div>
    );
};

export default MainContent;