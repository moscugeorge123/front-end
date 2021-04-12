import { Component, OnInit } from '@angular/core';
import { AdminDrawerService } from 'src/app/default/components/services/admin-drawer.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
})
export class AdminComponent {
  opened$ = this.adminDrawerService.drawerOpened$;

  constructor(private adminDrawerService: AdminDrawerService) {}
}
