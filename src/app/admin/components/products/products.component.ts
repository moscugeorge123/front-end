import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Store } from '@ngrx/store';
import {
  getProductsRequestActions,
  openSidePanelAction,
  entitySidePanelAction,
} from '../../store/admin.actions';
import { productsDataSelector } from '../../store/admin.selectors';
import { CreateProductComponent } from '../create-product/create-product.component';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit, AfterViewInit {
  public readonly displayedColumns: string[] = [
    'image',
    'name',
    'description',
    'price',
    'discount',
    'seeProduct',
  ];

  public dataSource = new MatTableDataSource([]);
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private store: Store<any>, private dialog: MatDialog) {}

  ngOnInit(): void {
    this.store.dispatch(getProductsRequestActions());
    this.store.select(productsDataSelector).subscribe((data) => {
      this.dataSource.data = data || [];
    });
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
  }

  openDetails(event: MouseEvent, product: any): void {
    event.preventDefault();
    this.store.dispatch(openSidePanelAction());
    this.store.dispatch(
      entitySidePanelAction({ entity: { ...product, type: 'product' } })
    );
  }

  createNew(): void {
    this.dialog.open(CreateProductComponent, {
      minWidth: '300px',
      width: '35%',
    });
  }
}
