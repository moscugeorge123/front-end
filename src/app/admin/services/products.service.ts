import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
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

  recommended(): Observable<any> {
    const userId = JSON.parse(
      localStorage.getItem('user') || sessionStorage.getItem('user') || '{}'
    ).id;
    return this.http
      .get(`${environment.buyer}/recommendations?${userId}`)
      .pipe(switchMap((prods: any[]) => this.productsByIds(prods)));
  }

  productsByIds(ids: any[]): Observable<any> {
    return this.http.post(`${this.api}/getByArray`, { listofIds: ids });
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

  export(): void {
    this.http
      .get(`${environment.products}/ExportCsv/download`, {
        responseType: 'blob' as 'json',
      })
      .subscribe((response: Blob) => {
        const dataType = response.type;
        const binaryData = [];
        binaryData.push(response);
        const downloadLink = document.createElement('a');
        downloadLink.href = window.URL.createObjectURL(
          new Blob(binaryData, { type: dataType })
        );
        downloadLink.setAttribute('download', 'Products.csv');
        document.body.appendChild(downloadLink);
        downloadLink.click();
      });
  }
}
