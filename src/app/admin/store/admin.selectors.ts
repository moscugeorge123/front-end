import { createFeatureSelector, createSelector } from '@ngrx/store';
import { IProductState } from './initial-state';

const adminSelector = createFeatureSelector('admin');

export const productsLoadingSelector = createSelector(
  adminSelector,
  (state: IProductState) => state.products?.loading
);
export const productsDataSelector = createSelector(
  adminSelector,
  (state: IProductState) => state.products?.data
);
export const productsErrorSelector = createSelector(
  adminSelector,
  (state: IProductState) => state.products?.error
);

export const singleProductLoadingSelector = createSelector(
  adminSelector,
  (state: IProductState) => state.singleProduct?.loading
);
export const singleProductDataSelector = createSelector(
  adminSelector,
  (state: IProductState) => state.singleProduct?.data
);
export const singleProductErrorSelector = createSelector(
  adminSelector,
  (state: IProductState) => state.singleProduct?.error
);

// side panel
export const sidePanelSelector = createSelector(
  adminSelector,
  (state: IProductState) => state.sidePanel?.data
);

// side panel Product
export const sidePanelEntitySelector = createSelector(
  adminSelector,
  (state: IProductState) => state.sidePanelEntity?.data
);

// SHOPS

export const shopsLoadingSelector = createSelector(
  adminSelector,
  (state: IProductState) => state.shops?.loading
);
export const shopsDataSelector = createSelector(
  adminSelector,
  (state: IProductState) => state.shops?.data
);
export const shopsErrorSelector = createSelector(
  adminSelector,
  (state: IProductState) => state.shops?.error
);

export const singleShopLoadingSelector = createSelector(
  adminSelector,
  (state: IProductState) => state.singleShop?.loading
);
export const singleShopDataSelector = createSelector(
  adminSelector,
  (state: IProductState) => state.singleShop?.data
);
export const singleShopErrorSelector = createSelector(
  adminSelector,
  (state: IProductState) => state.singleShop?.error
);
