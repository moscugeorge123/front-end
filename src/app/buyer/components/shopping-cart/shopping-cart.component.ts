import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { ProductsService } from 'src/app/admin/services/products.service';
import { BuyerService } from '../../services/buyer.service';
import { FinalizeCommandComponent } from '../finalize-command/finalize-command.component';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss'],
})
export class ShoppingCartComponent implements OnInit {
  public products$: Observable<any[]>;

  constructor(
    private shoppingCart: BuyerService,
    private productsService: ProductsService,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.getShoppingCart();
  }

  getShoppingCart(): void {
    let shoppingCartItems = [];
    this.products$ = this.shoppingCart.shoppingCart().pipe(
      switchMap((items: any) => {
        shoppingCartItems = items;
        const prodsIds = items.map(({ productId }) => productId);
        return this.productsService.productsByIds(prodsIds);
      }),
      map((products) =>
        products
          .map((product: any) => {
            const shoppingCartItem = shoppingCartItems.filter(
              ({ productId }) => productId === product.id
            );

            if (shoppingCartItem) {
              shoppingCartItem.forEach(
                (itemCart) => (itemCart.product = product)
              );
            }

            return shoppingCartItem;
          })
          .reduce((acc, items) => [...acc, ...items], [])
          .filter((item: any) => item)
      )
    );
  }

  removeShoppingCart(): void {
    this.shoppingCart.removeShoppingCart().subscribe(() => {
      this.getShoppingCart();
    });
  }

  getTotal(products: { product: { price: number } }[]): number {
    console.log(products);
    return products.reduce((acc, { product: { price } }) => acc + price, 0);
  }

  openQRCodeScanner(e): void {
    this.dialog
      .open(FinalizeCommandComponent)
      .afterClosed()
      .subscribe(() => this.getShoppingCart());
  }
}
