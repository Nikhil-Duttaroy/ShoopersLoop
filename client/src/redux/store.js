import {createStore ,applyMiddleware,compose} from 'redux';
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

const composeEnhancers =
  typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      })
    : compose;

const enhancer = composeEnhancers(
  applyMiddleware(...middlewares)
  // other store enhancers if any
);

export const store = createStore(
  rootreducer,enhancer
  
);

sagaMiddleware.run(rootSaga);



export const persistor = persistStore(store);

// export default {store , persistor}