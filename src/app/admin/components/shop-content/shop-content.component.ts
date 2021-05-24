import { ENTER, COMMA } from '@angular/cdk/keycodes';
import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Store } from '@ngrx/store';
import { switchMap } from 'rxjs/operators';
import { ShopsService } from '../../services/shops.service';
import { entitySidePanelAction } from '../../store/admin.actions';

@Component({
  selector: 'app-shop-content',
  templateUrl: './shop-content.component.html',
  styleUrls: ['./shop-content.component.scss'],
})
export class ShopContentComponent implements OnInit {
  @Input() shop: any;
  public loading = false;
  public readonly displayedColumns: string[] = [
    'ingredient',
    'quantity',
    'actions',
  ];

  public dataSource = new MatTableDataSource([]);
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private shopService: ShopsService) {}

  ngOnInit(): void {
    this.dataSource.data = this.shop.ingredients;
  }

  addIngredient(
    ingredient: HTMLInputElement,
    quantity: HTMLInputElement
  ): void {
    const name = ingredient.value;
    const q = +quantity.value;

    this.loading = true;
    this.shopService
      .addIngredient(name, 0, q, this.shop.id)
      .pipe(switchMap(() => this.shopService.shops()))
      .subscribe((shops: any[]) => {
        this.shop = shops.find((shop) => shop.id === this.shop.id) || this.shop;
        this.dataSource.data = this.shop.ingredients;
        ingredient.value = '';
        quantity.value = '0';
        this.loading = false;
      });
  }

  deleteIngredient(ingredient: any): void {
    this.shopService
      .removeIngredient(ingredient.id)
      .pipe(switchMap(() => this.shopService.shops()))
      .subscribe((shops: any[]) => {
        this.shop = shops.find((shop) => shop.id === this.shop.id) || this.shop;
        this.dataSource.data = this.shop.ingredients;
      });
  }
}
