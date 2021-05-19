import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { combineLatest } from 'rxjs';
import { combineAll, filter } from 'rxjs/operators';
import { addCartProductRequestAction } from '../../store/buyer.actions';
import {
  cartProductSelectorData,
  cartProductSelectorLoading,
} from '../../store/buyer.selectors';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit {
  @Input() product: any;
  @Input() image: string;

  public loading: boolean;

  constructor(private store: Store) {}

  ngOnInit(): void {
    combineLatest([
      this.store.select(cartProductSelectorLoading),
      this.store.select(cartProductSelectorData),
    ]).subscribe(([loading, product]) => {
      if (product?.id === this.product?.id) {
        console.log(product);
        this.loading = loading;
      }
    });
  }

  getIngredients(ingredients: any[]): string {
    return ingredients
      .map(({ name }) => name)
      .join(', ')
      .substr(123);
  }

  addProductToCart(product: any): void {
    this.store.dispatch(addCartProductRequestAction({ product }));
  }
}
