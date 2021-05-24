import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NotificationsService } from 'angular2-notifications';
import { Observable, of } from 'rxjs';
import { tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class BuyerService {
  private api = `${environment.buyer}/ShoppingCart`;
  constructor(
    private http: HttpClient,
    private notifications: NotificationsService
  ) {}

  addProductToCart(payload: any): Observable<any> {
    console.log(payload);
    console.log(localStorage.getItem('user'));
    const userId = JSON.parse(
      localStorage.getItem('user') || sessionStorage.getItem('user') || '{}'
    ).id;
    return this.http
      .post(this.api, {
        userId,
        productId: payload.product.id,
        quantity: 1,
      })
      .pipe(
        tap(() => {
          this.notifications.success('Sign in', 'Sign in with success', {
            timeOut: 1500,
            clickToClose: true,
          });
        })
      );
  }

  shoppingCart(): Observable<any> {
    const userId = JSON.parse(
      localStorage.getItem('user') || sessionStorage.getItem('user') || '{}'
    ).id;
    return this.http.get(`${this.api}/${userId}`);
  }

  removeShoppingCart(): Observable<any> {
    const userId = JSON.parse(
      localStorage.getItem('user') || sessionStorage.getItem('user') || '{}'
    ).id;
    return this.http.delete(`${this.api}/${userId}`);
  }

  payForProducts(shopId: string): Observable<any> {
    const userId = JSON.parse(
      localStorage.getItem('user') || sessionStorage.getItem('user') || '{}'
    ).id;
    return this.http.post(`${environment.buyer}/SalesHistory`, null, {
      params: {
        UserId: userId,
        ShopId: shopId,
      },
    });
  }
}
