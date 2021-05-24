import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {
  ProductsPageComponent,
  ShoppingCartComponent,
  ShopsComponent,
} from './components';

const routes: Routes = [
  {
    path: 'hot-dogs',
    component: ProductsPageComponent,
  },
  {
    path: 'shops',
    component: ShopsComponent,
  },
  {
    path: 'shopping-cart',
    component: ShoppingCartComponent,
  },
  {
    path: '',
    redirectTo: 'hot-dogs',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BuyerRoutingModule {}
