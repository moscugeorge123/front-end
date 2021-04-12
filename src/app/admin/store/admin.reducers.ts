import { createReducer, on } from '@ngrx/store';
import {
  productsRequestActions,
  productsSuccessActions,
  productsFailureActions,
} from './admin.actions';
import { adminInitialState } from './initial-state';

export const authReducer = createReducer(
  adminInitialState,
  on(productsRequestActions, (state) => ({
    ...state,
    products: { ...state.products, loading: true },
  })),
  on(productsSuccessActions, (state) => ({
    ...state,
    products: { ...state.products, data: [] },
  })),
  on(productsFailureActions, (state) => ({
    ...state,
    products: { ...state.products, loading: true },
  }))
);
