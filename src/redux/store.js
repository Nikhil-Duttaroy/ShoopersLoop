import {createStore ,applyMiddleware} from 'redux';
import logger from 'redux-logger'; //used to check why errors occurred
import { persistStore } from 'redux-persist';
import createSagaMiddleware from "redux-saga";

import rootreducer from './root-reducer'
import rootSaga from './root-saga';



const sagaMiddleware = createSagaMiddleware();
// const middlewares=[logger];
const middlewares = [sagaMiddleware];

if(process.env.NODE_ENV === 'development'){
    middlewares.push(logger)
}

export const store=createStore(rootreducer,applyMiddleware(...middlewares))

sagaMiddleware.run(rootSaga);



export const persistor = persistStore(store);

// export default {store , persistor}