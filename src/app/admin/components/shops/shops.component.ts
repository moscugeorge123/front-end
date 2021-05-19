import { AgmMarker } from '@agm/core';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import {
  entitySidePanelAction,
  getShopsRequestActions,
  openSidePanelAction,
} from '../../store/admin.actions';
import { shopsDataSelector } from '../../store/admin.selectors';
import { CreateShopComponent } from '../create-shop/create-shop.component';

@Component({
  selector: 'app-shops',
  templateUrl: './shops.component.html',
  styleUrls: ['./shops.component.scss'],
})
export class ShopsComponent implements OnInit, OnDestroy {
  private subscription$ = new Subscription();
  public shops = [];
  public lat = 0;
  public lon = 0;

  constructor(private store: Store, private dialog: MatDialog) {}

  ngOnInit(): void {
    this.subscription$.add(
      this.store.select(shopsDataSelector).subscribe((shops) => {
        if (!shops) {
          return;
        }

        this.shops = shops;
        this.shops.forEach((shop) => {
          this.lat += shop.locationX;
          this.lon += shop.locationY;
        });

        this.lat /= shops.length;
        this.lon /= shops.length;
      })
    );
    this.store.dispatch(getShopsRequestActions());
  }

  ngOnDestroy(): void {}

  mapClick(event: { coords: { lat: number; lng: number } }): void {
    console.log(event);

    this.dialog.open(CreateShopComponent, {
      minWidth: '300px',
      width: '35%',
      data: {
        locationX: event.coords.lat,
        locationY: event.coords.lng,
      },
    });
  }

  markerClick(event: AgmMarker, shop: any): void {
    this.store.dispatch(
      entitySidePanelAction({ entity: { ...shop, type: 'shop' } })
    );
    this.store.dispatch(openSidePanelAction());
  }
}
