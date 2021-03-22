import React, {Component} from 'react';
import './styles.scss';

//Components
import TrendingHeader from '../TrendingHeader';
import CurrencyCard from './../CurrencyCard';

class TrendingContent extends Component {
    constructor(props){
        super(props);
        this.state = {
            url: 'https://api.coingecko.com/api/v3/search/trending',
            coinIDs: [],
            data: []
        }
    }

    async componentDidMount() {
        try {
            const res = await fetch(this.state.url, {mode: "cors"});
            const data = await res.json()
            var coins = []
            data.coins.forEach(el => {
                coins.push(el.item.id)
            })
            this.setState({
                coinIDs: coins
            })

            const coinURL = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=${this.state.coinIDs.join()}`
            const res2 = await fetch(coinURL, {mode: "cors"});
            const data2 = await res2.json()
            this.setState({
                data: data2
            })

            console.log(this.state.data)
        }catch(err){
            console.log(err)
        }
    }

    render(){
        return (
            <div className="main">
                <TrendingHeader/>
                {this.state.data.map((id, pos) => {
                    return <CurrencyCard coinData={id} key={pos} />
                })}
            </div>
    
        );
    }  
};

export default TrendingContent;