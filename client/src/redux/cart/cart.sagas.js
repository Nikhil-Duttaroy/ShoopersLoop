import { all, call, takeLatest, put } from "redux-saga/effects";

import UserActionTypes from "../user/user.types";
import { clearCart } from "./cart.actions";
import CartActionTypes from './cart.types';

export function* clearCartOnSignOut() {
  yield put(clearCart());
}

export function* clearCartItemsOnCheckout() {
  yield put(clearCart());
}

export function* onSignOutSuccess() {
  yield takeLatest(UserActionTypes.SIGN_OUT_SUCCESS, clearCartOnSignOut);
}
export function* onCheckoutSuccess() {
  yield takeLatest(CartActionTypes.CHECKOUT_SUCCESS, clearCartItemsOnCheckout);
}

export function* cartSagas() {
  yield all([call(onSignOutSuccess)],[call(onCheckoutSuccess)]);
}