import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { BuyerService } from '../services/buyer.service';
import {
  addCartProductFailureAction,
  addCartProductRequestAction,
  addCartProductSuccessAction,
  getCartProductsFailureAction,
  getCartProductsRequestAction,
  getCartProductsSuccessAction,
} from './buyer.actions';

@Injectable()
export class BuyerEffects {
  addProductToCart$ = createEffect(() =>
    this.actions$.pipe(
      ofType(addCartProductRequestAction),
      switchMap((payload) =>
        this.buyerService.addProductToCart(payload).pipe(
          map((response) =>
            addCartProductSuccessAction({ products: response })
          ),
          catchError((error) => of(addCartProductFailureAction({ error })))
        )
      )
    )
  );

  shoppingCart$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getCartProductsRequestAction),
      switchMap(() =>
        this.buyerService.shoppingCart().pipe(
          map((products) => getCartProductsSuccessAction({ products })),
          catchError((error) => of(getCartProductsFailureAction({ error })))
        )
      )
    )
  );

  constructor(private actions$: Actions, private buyerService: BuyerService) {}
}
