import { createAction, props } from '@ngrx/store';

export const productsRequestActions = createAction(
  '[Admin] products Request',
  props<{ username: string; password: string }>()
);
export const productsSuccessActions = createAction(
  '[Admin] products Success',
  props<{ token: string }>()
);
export const productsFailureActions = createAction(
  '[Admin] products Failure',
  props<{ token: string }>()
);
