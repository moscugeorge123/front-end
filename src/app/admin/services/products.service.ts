import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  private api = `${environment.products}/Products`;

  constructor(private http: HttpClient) {}

  products(): Observable<any> {
    return this.http.get(this.api);
  }

  product(id: string): Observable<any> {
    return this.http.get(`${this.api}/${id}`);
  }

  create(product: any): Observable<any> {
    return this.http.post(this.api, product);
  }

  edit(product: any, id: string): Observable<any> {
    return this.http.put(this.api, product, {
      params: { id },
    });
  }

  remove(productId: any): Observable<any> {
    return this.http.delete(`${this.api}/${productId}`);
  }

  addIngredient(ingredientId: number, productId: number): Observable<any> {
    return this.http.post(`${environment.products}/JoinProductIngredient`, {
      ingredientsId: ingredientId,
      productsId: productId,
    });
  }
}
