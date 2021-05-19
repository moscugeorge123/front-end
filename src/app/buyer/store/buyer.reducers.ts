import { createReducer, on } from '@ngrx/store';
import {
  addCartProductFailureAction,
  addCartProductRequestAction,
  addCartProductSuccessAction,
  getCartProductsFailureAction,
  getCartProductsRequestAction,
  getCartProductsSuccessAction,
} from './buyer.actions';
import { buyerInitialState } from './initial-state';

export const buyerReducer = createReducer(
  buyerInitialState,
  on(getCartProductsRequestAction, (state) => ({
    ...state,
    cart: {
      ...state.cart,
      loading: true,
    },
  })),
  on(getCartProductsSuccessAction, (state, { products }) => ({
    ...state,
    cart: {
      ...state.cart,
      data: products,
      loading: false,
    },
  })),
  on(getCartProductsFailureAction, (state, { error }) => ({
    ...state,
    cart: {
      ...state.cart,
      data: undefined,
      error,
      loading: false,
    },
  })),
  on(addCartProductRequestAction, (state) => ({
    ...state,
    product: {
      ...state.product,
      loading: true,
    },
  })),
  on(addCartProductSuccessAction, (state, { products }) => ({
    ...state,
    product: {
      ...state.product,
      data: products,
      loading: false,
    },
  })),
  on(addCartProductFailureAction, (state, { error }) => ({
    ...state,
    product: {
      ...state.product,
      data: undefined,
      error,
      loading: false,
    },
  }))
);
