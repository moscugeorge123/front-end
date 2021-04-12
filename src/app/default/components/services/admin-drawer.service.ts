import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AdminDrawerService {
  private drawer$ = new BehaviorSubject(true);

  get drawerOpened$(): Observable<boolean> {
    return this.drawer$.asObservable();
  }

  toggleDrawer(): void {
    this.drawer$.next(!this.drawer$.value);
  }
}
