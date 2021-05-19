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
import { ProductsSidePanelComponent } from './components/side-panel/side-panel.component';
import { CreateProductComponent } from './components/create-product/create-product.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AgmCoreModule } from '@agm/core';
import { ProductContentComponent } from './components/product-content/product-content.component';
import { ShopContentComponent } from './components/shop-content/shop-content.component';
import { CreateShopComponent } from './components/create-shop/create-shop.component';

@NgModule({
  declarations: [
    ProductsComponent,
    ShopsComponent,
    IngredientsComponent,
    AdminComponent,
    ProductsSidePanelComponent,
    CreateProductComponent,
    ProductContentComponent,
    ShopContentComponent,
    CreateShopComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AdminRoutingModule,
    MaterialModule,
    StoreModule.forFeature('admin', adminReducer),
    EffectsModule.forFeature([AdminEffects]),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyD7AcOr33Na-vSmoauocqbmugJ1bgKVIPM',
    }),
  ],
})
export class AdminModule {}
