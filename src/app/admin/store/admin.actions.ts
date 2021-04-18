import { HttpErrorResponse } from '@angular/common/http';
import { createAction, props } from '@ngrx/store';

// get all
export const getProductsRequestActions = createAction(
  '[Products] products Request'
);
export const getProductsSuccessActions = createAction(
  '[Products] products Success',
  props<{ products: any[] }>()
);
export const getProductsFailureActions = createAction(
  '[Products] products Failure',
  props<{ error: HttpErrorResponse }>()
);

// get one
export const getSingleProductRequestActions = createAction(
  '[Products] products Request',
  props<{ id: string }>()
);
export const getSingleProductSuccessActions = createAction(
  '[Products] products Success',
  props<{ singleProduct: any[] }>()
);
export const getSingleProductFailureActions = createAction(
  '[Products] products Failure',
  props<{ error: HttpErrorResponse }>()
);

// create one
export const createSingleProductRequestAction = createAction(
  '[Products] create product',
  props<{ product: any }>()
);

// products side-panel
export const openSidePanelAction = createAction('[Side Panel] open');
export const closeSidePanelAction = createAction('[Side Panel] close');

// product for side panel
export const productSidePanelAction = createAction(
  '[Side Panel] Product',
  props<{ product: any }>()
);
