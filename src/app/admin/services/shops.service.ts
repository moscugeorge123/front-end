import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
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
}
