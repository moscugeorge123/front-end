import { createReducer, on } from '@ngrx/store';
import {
  getSingleProductRequestActions,
  singleProductSuccessActions,
  singleProductFailureActions,
  getProductsRequestActions,
  getProductsSuccessActions,
  getProductsFailureActions,
  openSidePanelAction,
  closeSidePanelAction,
  entitySidePanelAction,
  getShopsRequestActions,
  getShopsSuccessActions,
  getShopsFailureActions,
  getSingleShopRequestActions,
  singleShopSuccessActions,
  singleShopFailureActions,
  createSingleShopRequestAction,
} from './admin.actions';
import { adminInitialState } from './initial-state';

export const adminReducer = createReducer(
  adminInitialState,
  on(getSingleProductRequestActions, (state) => ({
    ...state,
    singleProduct: { ...state.singleProduct, loading: true },
  })),
  on(singleProductSuccessActions, (state, { singleProduct }) => ({
    ...state,
    singleProduct: {
      ...state.singleProduct,
      data: singleProduct,
      loading: false,
    },
  })),
  on(singleProductFailureActions, (state, { error }) => ({
    ...state,
    singleProduct: { ...state.singleProduct, loading: false, error },
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

  on(entitySidePanelAction, (state, { entity: product }) => ({
    ...state,
    sidePanelEntity: { data: product },
  })),

  // SHOPS

  on(getShopsRequestActions, (state) => ({
    ...state,
    shops: { ...state.shops, loading: true },
  })),
  on(getShopsSuccessActions, (state, { shops }) => ({
    ...state,
    shops: { ...state.shops, data: shops, loading: false },
  })),
  on(getShopsFailureActions, (state, { error }) => ({
    ...state,
    shops: { ...state.shops, loading: false, error },
  })),

  on(getSingleShopRequestActions, (state) => ({
    ...state,
    singleShop: { ...state.singleShop, loading: true },
  })),
  on(createSingleShopRequestAction, (state) => ({
    ...state,
    singleShop: { ...state.singleShop, loading: true },
  })),
  on(singleShopSuccessActions, (state, { singleShop }) => ({
    ...state,
    singleShop: {
      ...state.singleShop,
      data: singleShop,
      loading: false,
    },
  })),
  on(singleShopFailureActions, (state, { error }) => ({
    ...state,
    singleShop: { ...state.singleShop, loading: false, error },
  }))
);
