import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { tap } from 'rxjs/operators';
import {
  closeSidePanelAction,
  entitySidePanelAction,
  getProductsRequestActions,
} from '../../store/admin.actions';
import { sidePanelEntitySelector } from '../../store/admin.selectors';

@Component({
  selector: 'app-side-panel',
  templateUrl: './side-panel.component.html',
  styleUrls: ['./side-panel.component.scss'],
})
export class ProductsSidePanelComponent {
  public entity$ = this.store
    .select(sidePanelEntitySelector)
    .pipe(tap(console.log));

  constructor(private store: Store) {}

  close(): void {
    this.store.dispatch(closeSidePanelAction());
    this.store.dispatch(entitySidePanelAction({ entity: null }));
    this.store.dispatch(getProductsRequestActions());
  }
}
