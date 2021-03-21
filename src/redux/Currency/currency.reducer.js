import currencyTypes from './currency.types';

const INITIAL_STATE = {
    currency: 'usd'
}

const currencyReducer = ( state=INITIAL_STATE, action) => {
    switch(action.type){
        case currencyTypes.CHANGE_CURRENCY_START:
            return { 
                ...state,
                currency: action.payload
            }
        default:
            return state;
    }
}

export default currencyReducer;