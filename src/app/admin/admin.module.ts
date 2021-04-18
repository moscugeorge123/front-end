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
import { StoreModule } from '@ngrx/store';
import { adminReducer } from './store/admin.reducers';
import { EffectsModule } from '@ngrx/effects';
import { AdminEffects } from './store/admin.effects';
import { ProductsSidePanelComponent } from './components/products-side-panel/products-side-panel.component';
import { CreateProductComponent } from './components/create-product/create-product.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ProductsComponent,
    ShopsComponent,
    IngredientsComponent,
    AdminComponent,
    ProductsSidePanelComponent,
    CreateProductComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AdminRoutingModule,
    MaterialModule,
    StoreModule.forFeature('admin', adminReducer),
    EffectsModule.forFeature([AdminEffects]),
  ],
})
export class AdminModule {}
