import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class InterfaceService {
  private api = `${environment.products}/Ingredients`;

  constructor(private http: HttpClient) {}

  products(): Observable<any> {
    return this.http.get(this.api);
  }

  product(id: string): Observable<any> {
    return this.http.get(`${this.api}/${id}`);
  }

  create(ingredient: any): Observable<any> {
    return this.http.post(
      this.api,
      { name: ingredient },
      { responseType: 'text' }
    );
  }

  edit(ingredient: any, id: string): Observable<any> {
    return this.http.put(this.api, ingredient, {
      params: { id },
    });
  }

  remove(productId: any): Observable<any> {
    return this.http.delete(`${this.api}/${productId}`);
  }
}
