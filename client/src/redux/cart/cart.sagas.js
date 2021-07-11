import { all, call, takeLatest, put, select } from "redux-saga/effects";

import UserActionTypes from "../user/user.types";
import { addItem, clearCart, setCartFromFirebase } from "./cart.actions";
import CartActionTypes from './cart.types';
import { selectCartId, selectCartItems } from './cart.selector';
import { getUserCartRef } from "../../firebase/firebase.utils";
import { selectCurrentUser } from './../user/user.selector';

export function* clearCartOnSignOut() {
  yield put(clearCart());
}

export function* clearCartItemsOnCheckout() {
  yield put(clearCart());
}

// export function* updateCartInFirebase() {
//   const currentUser = yield select(selectCurrentUser);
//   if (currentUser) {
//     try {
//       const cartRef = yield getUserCartRef(currentUser.id);
//       const cartItems = yield select(selectCartItems);
//       yield cartRef.update({ cartItems });
//     } catch (error) {
//       alert(error);
//     }
//   }
// }
export function* updateCartInFirebase() {
  const currentUser = yield select(selectCurrentUser);

  if (currentUser) {
    try {
      const cartRef = yield getUserCartRef(currentUser.id);
      const cartItems = yield select(selectCartItems);
      const currentCartId = yield select(selectCartId);
      yield cartRef.set({
        id: currentCartId,
        cartItems,
      });
    } catch (error) {
      console.log(error);
    }
  }
}
// export function* checkCartFromFirebase({ payload: user }) {
//   const cartRef = yield getUserCartRef(user.id);
//   const cartSnapshot = yield cartRef.get();
//   yield put(setCartFromFirebase(cartSnapshot.data().cartItems));
// }

export function* mergeCartWithFirebase() {
  const currentUser = yield select(selectCurrentUser);
  const currentCartId = yield select(selectCartId);

  try {
    const loggedOutCartItems = yield select(selectCartItems);
    const cartRef = yield getUserCartRef(currentUser.id);
    const cartSnapshot = yield cartRef.get();
    const cartData = yield cartSnapshot.data();

    yield put(setCartFromFirebase(cartData.cartItems));

    if (currentCartId !== cartData.id) {
      for (let i = 0; i < loggedOutCartItems.length; i++) {
        yield put(addItem(loggedOutCartItems[i]));
      }
    }
  } catch (error) {
    console.log(error);
  }
}

export function* onSignOutSuccess() {
  yield takeLatest(UserActionTypes.SIGN_OUT_SUCCESS, clearCartOnSignOut);
}
export function* onCheckoutSuccess() {
  yield takeLatest(CartActionTypes.CHECKOUT_SUCCESS, clearCartItemsOnCheckout);
}

export function* onUserSignIn() {
  yield takeLatest(UserActionTypes.SIGN_IN_SUCCESS,  mergeCartWithFirebase);
}

export function* onCartChange() {
  yield takeLatest(
    [
      CartActionTypes.ADD_ITEM,  
      CartActionTypes.REMOVE_ITEM,
      CartActionTypes.CLEAR_ITEM_FROM_CART,
    ],
    updateCartInFirebase
  );
}

export function* cartSagas() {
  yield all([call(onSignOutSuccess), call(onCartChange), call(onUserSignIn),call(onCheckoutSuccess)]);
  // yield all([call(onSignOutSuccess)],[call(onCheckoutSuccess)],[call(onCartChange)], [call(onUserSignIn)]);
}
