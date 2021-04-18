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
export const sidePanelProductSelector = createSelector(
  adminSelector,
  (state: IProductState) => state.sidePanelProduct?.data
);
