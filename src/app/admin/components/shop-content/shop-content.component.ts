import { ENTER, COMMA } from '@angular/cdk/keycodes';
import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { entitySidePanelAction } from '../../store/admin.actions';

@Component({
  selector: 'app-shop-content',
  templateUrl: './shop-content.component.html',
  styleUrls: ['./shop-content.component.scss'],
})
export class ShopContentComponent {
  @Input() shop: any;
  readonly separatorKeysCodes: number[] = [ENTER, COMMA];

  constructor(private store: Store) {}

  add(event: any): void {
    if (event.value?.trim()) {
      const prod = {
        ...this.shop,
        ingredients: [...this.shop.ingredients, { name: event.value.trim() }],
      };

      this.store.dispatch(entitySidePanelAction({ entity: prod }));
    }

    if (event.input) {
      event.input.value = '';
    }
  }
}
