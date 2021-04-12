import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { NotificationsService } from 'angular2-notifications';
import { Subscription } from 'rxjs';
import {
  registerRequestAction,
  registerSuccessAction,
} from '../../store/auth.actions';
import {
  registerDataSelector,
  registerErrorSelector,
  registerLoadingSelector,
} from '../../store/auth.selectors';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit, OnDestroy {
  public form: FormGroup;
  public loading$ = this.store.select(registerLoadingSelector);

  private subscription$ = new Subscription();

  constructor(
    private store: Store,
    private formBuilder: FormBuilder,
    private router: Router,
    private notifications: NotificationsService
  ) {}

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]],
      email: ['', [Validators.email, Validators.required]],
    });

    this.subscription$.add(
      this.store.select(registerDataSelector).subscribe((data) => {
        if (data) {
          this.store.dispatch(registerSuccessAction({ payload: null }));
          this.notifications.success('Register', 'Successfully registered', {
            timeOut: 5000,
            clickToClose: true,
          });
          this.router.navigate(['auth', 'login']);
        }
      })
    );

    this.subscription$.add(
      this.store.select(registerErrorSelector).subscribe((data) => {
        if (data) {
          const { error } = data;
          this.notifications.error('Register', error.message, {
            timeOut: 5000,
            clickToClose: true,
          });
        }
      })
    );
  }

  ngOnDestroy(): void {
    this.subscription$.unsubscribe();
  }

  register(): void {
    this.store.dispatch(registerRequestAction({ payload: this.form.value }));
  }
}
