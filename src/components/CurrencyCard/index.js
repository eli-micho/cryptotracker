import React, {Component} from 'react';
import './styles.scss';

class CurrencyCard extends Component {
    constructor(props){
        super(props)
        this.state = {
            
        }
    }
    render(){
        return(
            <div className="currencyCard">
                <div className="currencyIcon">
                    <img className="currencyIcon" src={this.props.coinData.image}/>
                    <h3 className="currencyName">{this.props.coinData.name}</h3>
                </div>
                <div className="currencyInfo">
                    <ul className="priceData">
                       <li>Current Price: ${this.props.coinData.current_price}</li>
                       <li>24H High ${this.props.coinData.high_24h}</li>
                       <li>24H Low: ${this.props.coinData.low_24h}</li>
                    </ul>
                </div>
            </div>
        );
    }
    
};

export default CurrencyCard;;