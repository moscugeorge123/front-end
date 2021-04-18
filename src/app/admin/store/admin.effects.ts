import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { map, switchMap } from 'rxjs/operators';
import { ProductsService } from '../services/products.service';
import {
  getProductsRequestActions,
  getProductsSuccessActions,
  getSingleProductRequestActions,
  getSingleProductSuccessActions,
} from './admin.actions';

@Injectable()
export class AdminEffects {
  products$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getProductsRequestActions),
      switchMap(() =>
        this.productsService
          .products()
          .pipe(map((products) => getProductsSuccessActions({ products })))
      )
    )
  );

  constructor(
    private actions$: Actions,
    private productsService: ProductsService
  ) {}
}
