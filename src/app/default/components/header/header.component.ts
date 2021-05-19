import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { loginSuccessAction } from 'src/app/auth/store/auth.actions';
import { AdminDrawerService } from '../services/admin-drawer.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  get isOnAdminRoute(): boolean {
    return this.router.url.includes('/admin');
  }

  get isLoggedIn(): boolean {
    return !!(localStorage.getItem('user') || sessionStorage.getItem('user'));
  }

  constructor(
    private router: Router,
    private store: Store,
    private adminDrawerService: AdminDrawerService
  ) {}

  toggleDrawer(): void {
    this.adminDrawerService.toggleDrawer();
  }

  logOut(): void {
    sessionStorage.removeItem('user');
    localStorage.removeItem('user');
    this.store.dispatch(loginSuccessAction({ payload: undefined }));
    this.router.navigate(['auth', 'login']);
  }

  get numberOfProductsInCart(): number {
    return 15;
  }
}
