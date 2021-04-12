import { createAction, props } from '@ngrx/store';

export const loginRequestAction = createAction(
  '[Auth] Login Request',
  props<{ payload: { username: string; password: string } }>()
);
export const loginSuccessAction = createAction(
  '[Auth] Login Success',
  props<{ payload: { token: string } }>()
);
export const loginFailureAction = createAction(
  '[Auth] Login Failure',
  props<{ error: any }>()
);

export const registerRequestAction = createAction(
  '[Auth] register Request',
  props<{ payload: { username: string; password: string; email: string } }>()
);
export const registerSuccessAction = createAction(
  '[Auth] register Success',
  props<{ payload: { username: string; email: string } }>()
);
export const registerFailureAction = createAction(
  '[Auth] register Failure',
  props<{ error: any }>()
);
