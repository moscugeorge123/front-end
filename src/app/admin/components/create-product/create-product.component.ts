import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { NotificationsService } from 'angular2-notifications';
import { Subscription } from 'rxjs';
import { ProductsService } from '../../services/products.service';
import {
  createSingleProductRequestAction,
  getProductsRequestActions,
  singleProductFailureActions,
  singleProductSuccessActions,
} from '../../store/admin.actions';
import {
  singleProductDataSelector,
  singleProductErrorSelector,
  singleProductLoadingSelector,
} from '../../store/admin.selectors';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.scss'],
})
export class CreateProductComponent implements OnInit {
  public product: FormGroup;
  public title = 'New product';
  public loading$ = this.store.select(singleProductLoadingSelector);

  private subscription = new Subscription();

  constructor(
    private dialogRef: MatDialogRef<CreateProductComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private formBuilder: FormBuilder,
    private store: Store,
    private notifications: NotificationsService,
    private productService: ProductsService
  ) {}

  ngOnInit(): void {
    this.title = this.data ? 'Edit product' : this.title;

    this.product = this.formBuilder.group({
      name: [this.data?.name ?? '', Validators.required],
      description: [this.data?.description ?? '', Validators.required],
      price: [this.data?.price ?? '', Validators.required],
      discount: [this.data?.discount ?? '', Validators.required],
    });

    this.subscription.add(
      this.store.select(singleProductDataSelector).subscribe((product) => {
        if (product) {
          this.afterFinish();
        }
      })
    );

    this.subscription.add(
      this.store.select(singleProductErrorSelector).subscribe((error) => {
        if (error) {
          this.notifications.error('Create product', error.message, {
            timeOut: 5000,
            clickToClose: true,
          });
          this.store.dispatch(singleProductFailureActions({ error: null }));
        }
      })
    );
  }

  afterFinish(): void {
    this.store.dispatch(getProductsRequestActions());
    this.store.dispatch(singleProductSuccessActions({ singleProduct: null }));
    this.dialogRef.close();
  }

  close(): void {
    this.dialogRef.close();
  }

  create(): void {
    if (!this.data) {
      this.store.dispatch(
        createSingleProductRequestAction({ product: this.product.value })
      );
      return;
    }

    const prod = this.product.value;
    prod.id = this.data.id;

    this.productService
      .edit(this.product.value, this.data.id)
      .subscribe(() => this.afterFinish());
  }
}
