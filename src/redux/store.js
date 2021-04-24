import {createStore ,applyMiddleware} from 'redux';
import logger from 'redux-logger'; //used to check why errors occurred
import { persistStore } from 'redux-persist';
import thunk from 'redux-thunk';

import rootreducer from './root-reducer'

// const middlewares=[logger];
const middlewares=[thunk];

if(process.env.NODE_ENV === 'development'){
    middlewares.push(logger)
}


export const store=createStore(rootreducer,applyMiddleware(...middlewares))

export const persistor = persistStore(store);

export default {store , persistor}