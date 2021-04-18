import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { Store } from '@ngrx/store';
import {
  getProductsRequestActions,
  openSidePanelAction,
  productSidePanelAction,
} from '../../store/admin.actions';
import { productsDataSelector } from '../../store/admin.selectors';
import { CreateProductComponent } from '../create-product/create-product.component';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  displayedColumns: string[] = [
    'image',
    'name',
    'description',
    'price',
    'discount',
    'seeProduct',
  ];
  dataSource = new MatTableDataSource([]);

  constructor(private store: Store<any>, private dialog: MatDialog) {}

  ngOnInit(): void {
    this.store.dispatch(getProductsRequestActions());
    this.store.select(productsDataSelector).subscribe((data) => {
      this.dataSource.data = data || [];
    });
  }

  openDetails(event: MouseEvent, product: any): void {
    event.preventDefault();
    this.store.dispatch(openSidePanelAction());
    this.store.dispatch(productSidePanelAction({ product }));
  }

  createNew(): void {
    this.dialog.open(CreateProductComponent, {
      minWidth: '300px',
      width: '35%',
    });
  }
}
