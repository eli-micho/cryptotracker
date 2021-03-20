import React from 'react';
import chart from './../../assets/imgs/chart.svg';
import './styles.scss';

const CurrencyCard = (props) => {
    console.log(props.coinData[0])
    return(
        <div className="currencyCard">
            <h3 className="currencyName">{props.coinData[0].id}</h3>
            <div className="currencyInfo">
                <div className="chartWrap">
                    <img src={chart}/>
                </div>
                <ul className="priceData">
                   <li>Current Price: ${props.coinData[0].current_price}</li>
                   <li>24H High: ${props.coinData[0].high_24h}</li>
                   <li>52 Week Low: ${props.coinData[0].low_24h}</li> 
                </ul>
            </div>
        </div>
    );
};

export default CurrencyCard;;