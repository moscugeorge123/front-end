import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import {
  closeSidePanelAction,
  productSidePanelAction,
} from '../../store/admin.actions';
import { sidePanelProductSelector } from '../../store/admin.selectors';
import { CreateProductComponent } from '../create-product/create-product.component';

@Component({
  selector: 'app-products-side-panel',
  templateUrl: './products-side-panel.component.html',
  styleUrls: ['./products-side-panel.component.scss'],
})
export class ProductsSidePanelComponent {
  public product$ = this.store.select(sidePanelProductSelector);

  constructor(private store: Store, private dialog: MatDialog) {}

  ingredients(product: any): string {
    return ((product.ingredients as any[]) || [])
      .map(({ name }) => name)
      .join(', ');
  }

  close(): void {
    this.store.dispatch(closeSidePanelAction());
    this.store.dispatch(productSidePanelAction({ product: null }));
  }

  edit(product: any): void {
    this.dialog.open(CreateProductComponent, {
      minWidth: '300px',
      width: '35%',
      data: product,
    });
  }
}
