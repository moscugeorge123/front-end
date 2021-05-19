import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { NotificationsService } from 'angular2-notifications';
import { Subscription } from 'rxjs';
import {
  getProductsRequestActions,
  singleProductFailureActions,
  createSingleShopRequestAction,
  singleShopFailureActions,
  singleShopSuccessActions,
  getShopsRequestActions,
} from '../../store/admin.actions';
import {
  singleShopDataSelector,
  singleShopErrorSelector,
  singleShopLoadingSelector,
} from '../../store/admin.selectors';

@Component({
  selector: 'app-create-shop',
  templateUrl: './create-shop.component.html',
  styleUrls: ['./create-shop.component.scss'],
})
export class CreateShopComponent implements OnInit {
  public shop: FormGroup;
  public title = 'New Shop';
  public loading$ = this.store.select(singleShopLoadingSelector);

  private subscription = new Subscription();

  constructor(
    private dialogRef: MatDialogRef<CreateShopComponent>,
    private formBuilder: FormBuilder,
    private store: Store,
    private notifications: NotificationsService,
    @Inject(MAT_DIALOG_DATA) private data: any
  ) {}

  ngOnInit(): void {
    this.title = this.data ? 'Create Shop' : this.title;

    this.shop = this.formBuilder.group({
      name: [this.data?.name ?? '', Validators.required],
      locationX: [this.data?.locationX ?? 0, Validators.required],
      locationY: [this.data?.locationY ?? 0, Validators.required],
    });

    this.subscription.add(
      this.store.select(singleShopDataSelector).subscribe((shop) => {
        console.log(shop);

        if (shop) {
          this.store.dispatch(getShopsRequestActions());
          this.store.dispatch(singleShopSuccessActions({ singleShop: null }));
          this.dialogRef.close();
        }
      })
    );

    this.subscription.add(
      this.store.select(singleShopErrorSelector).subscribe((error) => {
        if (error) {
          this.notifications.error('Create product', error.error.message, {
            timeOut: 5000,
            clickToClose: true,
          });
          this.store.dispatch(singleProductFailureActions({ error: null }));
        }
      })
    );
  }

  close(): void {
    this.dialogRef.close();
  }

  create(): void {
    this.store.dispatch(
      createSingleShopRequestAction({ shop: this.shop.value })
    );
  }
}
