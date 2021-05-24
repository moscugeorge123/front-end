import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { ProductsService } from 'src/app/admin/services/products.service';
import { getProductsRequestActions } from 'src/app/admin/store/admin.actions';
import { productsDataSelector } from 'src/app/admin/store/admin.selectors';
import { getCartProductsRequestAction } from '../../store/buyer.actions';

@Component({
  selector: 'app-products-page',
  templateUrl: './products-page.component.html',
  styleUrls: ['./products-page.component.scss'],
})
export class ProductsPageComponent implements OnInit {
  public products$ = this.store.select(productsDataSelector);
  public recommended$ = this.productsService.recommended();

  constructor(private store: Store, private productsService: ProductsService) {}

  ngOnInit(): void {
    this.store.dispatch(getProductsRequestActions());
    this.store.dispatch(getCartProductsRequestAction());
  }
}
