import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { of } from 'rxjs';
import { catchError, finalize, first, switchMap, tap } from 'rxjs/operators';
import { InterfaceService } from '../../services/ingredients.service';
import { ProductsService } from '../../services/products.service';
import {
  closeSidePanelAction,
  entitySidePanelAction,
  getProductsRequestActions,
} from '../../store/admin.actions';
import { CreateProductComponent } from '../create-product/create-product.component';

@Component({
  selector: 'app-product-content',
  templateUrl: './product-content.component.html',
  styleUrls: ['./product-content.component.scss'],
})
export class ProductContentComponent {
  @Input() product: any;
  readonly separatorKeysCodes: number[] = [ENTER, COMMA];

  constructor(
    private dialog: MatDialog,
    private store: Store,
    private productService: ProductsService,
    private ingredientsService: InterfaceService
  ) {}

  edit(product: any): void {
    this.dialog.open(CreateProductComponent, {
      minWidth: '300px',
      width: '35%',
      data: product,
    });
  }

  add(event: any, product: any): void {
    if (event.value?.trim()) {
      this.ingredientsService
        .create(event.value?.trim())
        .pipe(
          switchMap((ingredientId) =>
            this.productService.addIngredient(+ingredientId, product.id)
          )
        )
        .subscribe();

      const prod = {
        ...product,
        ingredients: [...product.ingredients, { name: event.value.trim() }],
      };

      this.store.dispatch(entitySidePanelAction({ entity: prod }));
    }

    if (event.input) {
      event.input.value = '';
    }
  }

  remove(product: any): void {
    this.productService
      .remove(product.id)
      .pipe(
        first(),
        tap(() => {
          this.store.dispatch(getProductsRequestActions());
        }),
        finalize(() => {
          this.store.dispatch(closeSidePanelAction());
        })
      )
      .subscribe();
  }
}
