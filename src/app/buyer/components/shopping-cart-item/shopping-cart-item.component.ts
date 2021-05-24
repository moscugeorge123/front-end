import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-shopping-cart-item',
  templateUrl: './shopping-cart-item.component.html',
  styleUrls: ['./shopping-cart-item.component.scss'],
})
export class ShoppingCartItemComponent {
  @Input() product: any;
  @Input() image: any;
  @Output() remove = new EventEmitter();
}
