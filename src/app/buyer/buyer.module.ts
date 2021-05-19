import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './components/products/products.component';
import { ProductsPageComponent } from './components/products-page/products-page.component';
import { ProductComponent } from './components/product/product.component';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import { ShoppingCartItemComponent } from './components/shopping-cart-item/shopping-cart-item.component';
import { BuyerRoutingModule } from './buyer-routing.module';
import { MaterialModule } from '../material/material.module';
import { EffectsModule } from '@ngrx/effects';
import { BuyerEffects } from './store/buyer.effects';
import { buyerReducer } from './store/buyer.reducers';
import { StoreModule } from '@ngrx/store';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    ProductsComponent,
    ProductsPageComponent,
    ProductComponent,
    ShoppingCartComponent,
    ShoppingCartItemComponent,
  ],
  imports: [
    CommonModule,
    BuyerRoutingModule,
    MaterialModule,
    HttpClientModule,
    EffectsModule.forFeature([BuyerEffects]),
    StoreModule.forFeature('buyer', buyerReducer),
  ],
})
export class BuyerModule {}
