import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  private api = `${environment.api}/products`;

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
}
