import { combineReducers } from 'redux';

import userReducer from './User/user.reducer';
import currencyReducer from './Currency/currency.reducer';

export const rootReducer = combineReducers({
    currency: currencyReducer,
    user: userReducer
});

export default rootReducer