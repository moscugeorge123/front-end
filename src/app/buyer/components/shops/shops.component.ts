import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { getShopsRequestActions } from 'src/app/admin/store/admin.actions';
import { shopsDataSelector } from 'src/app/admin/store/admin.selectors';

@Component({
  selector: 'app-shops',
  templateUrl: './shops.component.html',
  styleUrls: ['./shops.component.scss'],
})
export class ShopsComponent implements OnInit {
  public shops: any[];
  public userCoords = { lat: 47.157476089142364, lng: 27.588541162267635 };
  public selectedShop: any;

  constructor(private store: Store) {}

  ngOnInit(): void {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(({ coords }) => {
        this.userCoords.lat = coords.latitude;
        this.userCoords.lng = coords.longitude;
      });
    }

    this.store.select(shopsDataSelector).subscribe((shops) => {
      if (!shops) {
        return;
      }

      this.shops = shops;
    });
    this.store.dispatch(getShopsRequestActions());
  }

  selectShop(shop: any): void {
    this.selectedShop = shop;
  }
}
