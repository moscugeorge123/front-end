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
  '[Products] Single products Request',
  props<{ id: string }>()
);
export const singleProductSuccessActions = createAction(
  '[Products] Single products Success',
  props<{ singleProduct: any[] }>()
);
export const singleProductFailureActions = createAction(
  '[Products] Single products Failure',
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
export const entitySidePanelAction = createAction(
  '[Side Panel] Product',
  props<{ entity: any }>()
);

// SHOPS

// get all
export const getShopsRequestActions = createAction('[Shops] Shops GET Request');
export const getShopsSuccessActions = createAction(
  '[Shops] Shops GET Success',
  props<{ shops: any[] }>()
);
export const getShopsFailureActions = createAction(
  '[Shops] Shops GET Failure',
  props<{ error: HttpErrorResponse }>()
);

// single shop
export const getSingleShopRequestActions = createAction(
  '[Shops] Single Shop Request',
  props<{ id: string }>()
);
export const singleShopSuccessActions = createAction(
  '[Shops] Single Shop Success',
  props<{ singleShop: any[] }>()
);
export const singleShopFailureActions = createAction(
  '[Shops] Single Shop Failure',
  props<{ error: HttpErrorResponse }>()
);

// create one
export const createSingleShopRequestAction = createAction(
  '[Shops] Create Shop',
  props<{ shop: any }>()
);
