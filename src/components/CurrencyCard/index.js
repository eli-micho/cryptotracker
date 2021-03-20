import React from 'react';
import chart from './../../assets/imgs/chart.svg';
import './styles.scss';

const CurrencyCard = () => {
    return(
        <div className="currencyCard">
            <h3>Bitcoin</h3>
            <div className="currencyInfo">
                <div className="chartWrap">
                    <img src={chart}/>
                </div>
                <ul className="priceData">
                   <li>Current Price: $9999</li>
                   <li>52 Week High: $10000</li>
                   <li>52 Week Low: $1000</li> 
                </ul>
            </div>
        </div>
    );
};

export default CurrencyCard;;