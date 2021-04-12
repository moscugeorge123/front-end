import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import {
  ProductsComponent,
  ShopsComponent,
  IngredientsComponent,
} from './components';
import { AdminComponent } from './components/admin/admin.component';
import { MaterialModule } from '../material/material.module';

@NgModule({
  declarations: [
    ProductsComponent,
    ShopsComponent,
    IngredientsComponent,
    AdminComponent,
  ],
  imports: [CommonModule, AdminRoutingModule, MaterialModule],
})
export class AdminModule {}
