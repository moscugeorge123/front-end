import { createFeatureSelector, createSelector } from '@ngrx/store';
import { IAuthState } from './initial-state';

const authSelector = createFeatureSelector('auth');

export const loginLoadingSelector = createSelector(
  authSelector,
  (state: IAuthState) => state.login?.loading
);
export const loginDataSelector = createSelector(
  authSelector,
  (state: IAuthState) => state.login?.data
);
export const loginErrorSelector = createSelector(
  authSelector,
  (state: IAuthState) => state.login?.error
);

export const registerLoadingSelector = createSelector(
  authSelector,
  (state: IAuthState) => state.register?.loading
);
export const registerDataSelector = createSelector(
  authSelector,
  (state: IAuthState) => {
    console.log(state);
    return state?.register?.data;
  }
);
export const registerErrorSelector = createSelector(
  authSelector,
  (state: IAuthState) => {
    console.log(state);
    return state?.register?.error;
  }
);
