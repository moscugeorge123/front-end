import { HttpErrorResponse } from '@angular/common/http';
import { createAction, props } from '@ngrx/store';

// get all
export const getCartProductsRequestAction = createAction(
  '[Cart Products] products Request'
);
export const getCartProductsSuccessAction = createAction(
  '[Cart Products] products Success',
  props<{ products: any[] }>()
);
export const getCartProductsFailureAction = createAction(
  '[Cart Products] products Failure',
  props<{ error: HttpErrorResponse }>()
);

// add product
export const addCartProductRequestAction = createAction(
  '[Cart Products] add products Request',
  props<{ product: any }>()
);
export const addCartProductSuccessAction = createAction(
  '[Cart Products] add products Success',
  props<{ products: any[] }>()
);
export const addCartProductFailureAction = createAction(
  '[Cart Products] add products Failure',
  props<{ error: HttpErrorResponse }>()
);
