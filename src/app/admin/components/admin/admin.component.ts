import {
  trigger,
  state,
  style,
  transition,
  animate,
} from '@angular/animations';
import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { AdminDrawerService } from 'src/app/default/components/services/admin-drawer.service';
import { sidePanelSelector } from '../../store/admin.selectors';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
  animations: [
    trigger('sidePanel', [
      state('open', style({ transform: 'translateX(0)' })),
      state('closed', style({ transform: 'translateX(100%)' })),
      transition('open => closed', [animate('.35s ease-in-out')]),
      transition('closed => open', [animate('.35s ease-in-out')]),
    ]),
  ],
})
export class AdminComponent {
  opened$ = this.adminDrawerService.drawerOpened$;
  sidePanel$ = this.store.select(sidePanelSelector);

  constructor(
    private adminDrawerService: AdminDrawerService,
    private store: Store
  ) {}
}
