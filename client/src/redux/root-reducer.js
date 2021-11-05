import {combineReducers} from 'redux';
import { persistReducer } from "redux-persist";
import storage from 'redux-persist/lib/storage'

import cartReducer from "./cart/cart.reducer";
import userReducer from "./user/user.reducer";
import directoryReducer from './directory/directory.reducer';
import shopReducer from './shop/shop.reducer';
import filterReducer from './filters/filter.reducer';


const persistConfig={
    key:"root",
    storage,
    whitelist:['cart']
}

const rootReducer = combineReducers({
  user: userReducer,
  cart: cartReducer,
  directory :directoryReducer,
  shop:shopReducer,
  filters:filterReducer,
});

export default persistReducer(persistConfig,rootReducer)
