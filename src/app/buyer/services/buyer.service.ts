import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class BuyerService {
  private api = `${environment.buyer}/ShoppingCart`;
  constructor(private http: HttpClient) {}

  addProductToCart(payload: any): Observable<any> {
    const userId = JSON.parse(localStorage.getItem('user')).id;
    return this.http.post(this.api, {
      userId,
      productId: payload.product.id,
      quantity: payload.quantity || 1,
    });
  }

  shoppingCart(): Observable<any> {
    return this.http.get(this.api);
  }
}
