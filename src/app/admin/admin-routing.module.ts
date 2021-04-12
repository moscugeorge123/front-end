import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {
  IngredientsComponent,
  ProductsComponent,
  ShopsComponent,
} from './components';
import { AdminComponent } from './components/admin/admin.component';

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
      {
        path: 'products',
        component: ProductsComponent,
      },
      {
        path: 'shops',
        component: ShopsComponent,
      },
      {
        path: 'ingredients',
        component: IngredientsComponent,
      },
      {
        path: '',
        redirectTo: 'products',
        pathMatch: 'full',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
