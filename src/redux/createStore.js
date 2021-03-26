import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddle from 'redux-saga';
import logger from 'redux-logger';

import rootReducer from './rootReducer';
import rootSaga from './rootSaga';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const sagaMiddleware = createSagaMiddle();
export const middlewares = [logger, sagaMiddleware];

export const store = createStore(
    rootReducer, 
    composeEnhancers(
        applyMiddleware(...middlewares)
    ));
sagaMiddleware.run(rootSaga)