import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { productsDataSelector } from 'src/app/admin/store/admin.selectors';
import { cartProductSelectorData } from '../../store/buyer.selectors';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss'],
})
export class ShoppingCartComponent implements OnInit {
  private products$: Observable<any[]>;

  constructor(private store: Store) {}

  ngOnInit(): void {
    // this.store.select(cartProductSelectorData).pipe(
    //   switchMap(products => this.store.select(productsDataSelector))
    // )
  }
}
