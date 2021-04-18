import { createReducer, on } from '@ngrx/store';
import {
  getSingleProductRequestActions,
  getSingleProductSuccessActions,
  getSingleProductFailureActions,
  getProductsRequestActions,
  getProductsSuccessActions,
  getProductsFailureActions,
  openSidePanelAction,
  closeSidePanelAction,
  productSidePanelAction,
} from './admin.actions';
import { adminInitialState } from './initial-state';

export const adminReducer = createReducer(
  adminInitialState,
  on(getSingleProductRequestActions, (state) => ({
    ...state,
    products: { ...state.singleProduct, loading: true },
  })),
  on(getSingleProductSuccessActions, (state, { singleProduct }) => ({
    ...state,
    products: { ...state.singleProduct, data: singleProduct, loading: false },
  })),
  on(getSingleProductFailureActions, (state, { error }) => ({
    ...state,
    products: { ...state.singleProduct, loading: false, error },
  })),

  on(getProductsRequestActions, (state) => ({
    ...state,
    products: { ...state.products, loading: true },
  })),
  on(getProductsSuccessActions, (state, { products }) => ({
    ...state,
    products: { ...state.products, data: products, loading: false },
  })),
  on(getProductsFailureActions, (state, { error }) => ({
    ...state,
    products: { ...state.products, loading: false, error },
  })),

  on(openSidePanelAction, (state) => ({
    ...state,
    sidePanel: { data: true },
  })),
  on(closeSidePanelAction, (state) => ({
    ...state,
    sidePanel: { data: false },
  })),

  on(productSidePanelAction, (state, { product }) => ({
    ...state,
    sidePanelProduct: { data: product },
  }))
);
