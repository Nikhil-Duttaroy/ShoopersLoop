// import SHOP_DATA from "./Shop.data.jsx";
import ShopActionTypes from "./shop.types";



export const INITIAL_STATE = {
  collections: null,
  // collections:SHOP_DATA,
  isFetching: false,
  errorMessage:undefined
};

const shopReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ShopActionTypes.FETCH_COLLECTIONS_START:
      return {
        ...state,
        isFetching: true,
      };

    case ShopActionTypes.FETCH_COLLECTIONS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        collections: action.payload,
        // collections:state.collections
      };

    case ShopActionTypes.FETCH_COLLECTIONS_FAILURE:
      return {
        ...state,
        isFetching: false,
        errorMessage: action.payload,
      };

    default:
      return state;
  }
};

export default shopReducer;



