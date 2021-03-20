import React, {Component} from 'react';
import CurrencyCard from '../CurrencyCard';
import MainHeader from '../MainHeader';
import './styles.scss';

import returnCurrencyData from './../../helpers/getCurrencyData';

class MainContent extends Component {
    constructor(props){
        super(props)
        this.state = { data: []}
    }

    async componentDidMount() {
        const url = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=bitcoin'
        try{
            const res = await fetch(url, {mode: "cors"});
            const data = await res.json();
            this.setState({ data: data})

        }catch(err){
            //console.log(err)
        }
      }
    
    render(){
        return(
            <div className="main">
                <MainHeader/>
                <CurrencyCard coinData={this.state.data}/>
            </div>
        );
    }
    
};

export default MainContent;