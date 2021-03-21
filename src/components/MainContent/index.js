import React, {Component} from 'react';
import coinURL from '../../helpers/coinID';

import CurrencyCard from '../CurrencyCard';
import MainHeader from '../MainHeader';
import './styles.scss';

class MainContent extends Component {
    constructor(props){
        super(props)
        this.state = {
            url: coinURL,
            data: []
        }
    }

    async componentDidMount() {
        try {
            const res = await fetch(this.state.url, {mode: "cors"})
            const data = await res.json()
            console.log(data)
            await this.setState({
                data: data
            })
        }catch(err){
            //console.log(err)
        }
    }

    
    render(){
        return(
            <div className="main">
                <MainHeader/>
                {this.state.data.map((id, pos) => {
                    return <CurrencyCard coinData={id} key={pos} />
                })}
            </div>
        );
    }
    
};

export default MainContent;