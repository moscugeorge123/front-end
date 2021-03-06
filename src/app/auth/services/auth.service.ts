import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private api = `${environment.auth}/users`;

  constructor(private http: HttpClient) {}

  login({ username, password }): Observable<any> {
    return this.http.post(`${this.api}/authenticate`, { username, password });
  }

  register({ username, password, email }): Observable<any> {
    return this.http.post(`${this.api}`, { username, password, email });
  }
}
