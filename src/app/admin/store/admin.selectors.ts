import { createFeatureSelector, createSelector } from '@ngrx/store';
import { IAdminState } from './initial-state';

const authSelector = createFeatureSelector('auth');

export const productsLoadingSelector = createSelector(
  authSelector,
  (state: IAdminState) => state.products?.loading
);
export const productsDataSelector = createSelector(
  authSelector,
  (state: IAdminState) => state.products?.data
);
export const productsErrorSelector = createSelector(
  authSelector,
  (state: IAdminState) => state.products?.error
);
