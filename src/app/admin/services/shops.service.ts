import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ShopsService {
  private api = `${environment.shops}/Shop`;

  constructor(private http: HttpClient) {}

  shops(): Observable<any> {
    return this.http.get(this.api);
  }

  shop(id: string): Observable<any> {
    return this.http.get(`${this.api}/${id}`);
  }

  create(product: any): Observable<any> {
    return this.http.post(this.api, product);
  }

  addIngredient(
    name: string,
    price: any,
    quantity: number,
    shopId: any
  ): Observable<any> {
    return this.http
      .post(
        `${environment.shops}/Ingredients`,
        { name, price },
        { responseType: 'text' }
      )
      .pipe(
        switchMap((ingrdientId) =>
          this.http.post(`${environment.shops}/JoinShopIngredient`, {
            shopId,
            quantity,
            ingrdientId,
          })
        )
      );
  }

  removeIngredient(id: string): Observable<any> {
    return this.http.delete(`${environment.shops}/Ingredients/${id}`);
  }
}
