import { combineReducers } from 'redux';

import currencyReducer from './Currency/currency.reducer';

export const rootReducer = combineReducers({
    currency: currencyReducer
});

export default rootReducer