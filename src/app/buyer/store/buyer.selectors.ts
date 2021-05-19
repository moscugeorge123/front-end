import { createFeatureSelector, createSelector } from '@ngrx/store';
import { IBuyerState } from './initial-state';

const buyerSelector = createFeatureSelector('buyer');

export const cartSelectorData = createSelector(
  buyerSelector,
  (state: IBuyerState) => state.cart.data
);
export const cartSelectorLoading = createSelector(
  buyerSelector,
  (state: IBuyerState) => state.cart.loading
);
export const cartSelectorError = createSelector(
  buyerSelector,
  (state: IBuyerState) => state.cart.error
);

// add product
export const cartProductSelectorData = createSelector(
  buyerSelector,
  (state: IBuyerState) => state.product.data
);
export const cartProductSelectorLoading = createSelector(
  buyerSelector,
  (state: IBuyerState) => state.product.loading
);
export const cartProductSelectorError = createSelector(
  buyerSelector,
  (state: IBuyerState) => state.product.error
);
