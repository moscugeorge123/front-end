import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { ProductsService } from '../services/products.service';
import { ShopsService } from '../services/shops.service';
import {
  createSingleProductRequestAction,
  createSingleShopRequestAction,
  getProductsRequestActions,
  getProductsSuccessActions,
  getShopsRequestActions,
  getShopsSuccessActions,
  singleProductSuccessActions,
  singleShopFailureActions,
  singleShopSuccessActions,
} from './admin.actions';
import { singleProductErrorSelector } from './admin.selectors';

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

  createProduct$ = createEffect(() =>
    this.actions$.pipe(
      ofType(createSingleProductRequestAction),
      switchMap(({ product }) =>
        this.productsService.create(product).pipe(
          map((singleProduct) =>
            singleProductSuccessActions({ singleProduct })
          ),
          catchError((error) => of(singleProductErrorSelector({ error })))
        )
      )
    )
  );

  shops$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getShopsRequestActions),
      switchMap(() =>
        this.shopsService
          .shops()
          .pipe(map((shops) => getShopsSuccessActions({ shops })))
      )
    )
  );

  createShop$ = createEffect(() =>
    this.actions$.pipe(
      ofType(createSingleShopRequestAction),
      switchMap(({ shop }) =>
        this.shopsService.create(shop).pipe(
          map((singleShop) => singleShopSuccessActions({ singleShop })),
          catchError((error) => of(singleShopFailureActions({ error })))
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private productsService: ProductsService,
    private shopsService: ShopsService
  ) {}
}
