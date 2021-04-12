import { createReducer, on } from '@ngrx/store';
import {
  loginFailureAction,
  loginRequestAction,
  loginSuccessAction,
  registerFailureAction,
  registerRequestAction,
  registerSuccessAction,
} from './auth.actions';
import { authInitialState } from './initial-state';

export const authReducer = createReducer(
  authInitialState,
  on(loginRequestAction, (state) => ({
    ...state,
    login: { ...state.login, loading: true },
  })),
  on(loginSuccessAction, (state, { payload }) => ({
    ...state,
    login: { ...state.login, data: payload, loading: false },
  })),
  on(loginFailureAction, (state, { error }) => ({
    ...state,
    login: { ...state.login, loading: false, error },
  })),
  on(registerRequestAction, (state) => ({
    ...state,
    register: { ...state.register, loading: true },
  })),
  on(registerSuccessAction, (state, { payload }) => ({
    ...state,
    register: { ...state.register, data: payload, loading: false },
  })),
  on(registerFailureAction, (state, { error }) => ({
    ...state,
    register: { ...state.register, error, loading: false },
  }))
);
