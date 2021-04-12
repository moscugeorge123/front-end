import { Component } from '@angular/core';
import { Router } from '@angular/router';
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

  constructor(private router: Router, private adminDrawerService: AdminDrawerService) {}

  toggleDrawer(): void {
    this.adminDrawerService.toggleDrawer();
  }
}
