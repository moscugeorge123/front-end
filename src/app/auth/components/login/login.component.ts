import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { NotificationsService } from 'angular2-notifications';
import { Subscription } from 'rxjs';
import {
  loginFailureAction,
  loginRequestAction,
} from '../../store/auth.actions';
import {
  loginDataSelector,
  loginErrorSelector,
  loginLoadingSelector,
} from '../../store/auth.selectors';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit, OnDestroy {
  public form: FormGroup;
  public loading$ = this.store.select(loginLoadingSelector);

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
      remember: false,
    });

    if (sessionStorage.getItem('user') || localStorage.getItem('user')) {
      this.router.navigate(['admin']);
      return;
    }

    this.setListeners();
  }

  ngOnDestroy(): void {
    this.subscription$.unsubscribe();
  }

  login(): void {
    this.store.dispatch(loginRequestAction({ payload: this.form.value }));
  }

  private setListeners(): void {
    this.subscription$.add(
      this.store.select(loginDataSelector).subscribe((data) => {
        if (!data) {
          return;
        }

        if (this.form.value.remember) {
          localStorage.setItem('user', JSON.stringify(data));
        } else {
          sessionStorage.setItem('user', JSON.stringify(data));
        }

        this.notifications.success('Sign in', 'Sign in with success', {
          timeOut: 5000,
          clickToClose: true,
        });
        this.router.navigate(['admin']);
      })
    );
    this.subscription$.add(
      this.store.select(loginErrorSelector).subscribe((data) => {
        if (!data) {
          return;
        }

        const { error } = data;
        this.store.dispatch(loginFailureAction({ error: null }));
        this.notifications.error('Sign in', error.message, {
          timeOut: 5000,
          clickToClose: true,
        });
      })
    );
  }
}
