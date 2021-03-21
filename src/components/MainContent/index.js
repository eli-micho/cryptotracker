import React, {Component} from 'react';

//Helper
import coinURL from '../../helpers/coinID';

//Components
import CurrencyCard from '../CurrencyCard';
import FormSelect from '../Forms/FormSelect';
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
            await this.setState({
                data: data
            })
        }catch(err){
            //console.log(err)
        }
    };

    static configCurrencies = {
        options: [{
            name: "USD",
            value: "usd"
        }, {
            name: "EUR",
            value: "eur"
        },{
            name: "CAD",
            value: "cad"
        }],
    } 

    
    render(){
        return(
            <div className="main">
                <MainHeader/>
                <FormSelect {...this.configCurrencies}/>
                {this.state.data.map((id, pos) => {
                    return <CurrencyCard coinData={id} key={pos} />
                })}
            </div>
        );
    }
    
};

export default MainContent;