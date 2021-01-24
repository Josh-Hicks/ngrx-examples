import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { RouterNavigatedAction, ROUTER_NAVIGATION } from '@ngrx/router-store';
import { select, Store } from '@ngrx/store';
import { of } from 'rxjs';
import {
  catchError,
  filter,
  map,
  switchMap,
  tap,
  withLatestFrom
} from 'rxjs/operators';
import { LocalStorageService } from '../data/local-storage.service';
import { UserService } from '../data/users.service';
import * as AppActions from './app.actions';
import { AppState } from './app.reducer';
import { selectAppUsers } from './app.selectors';

@Injectable()
export class AppEffects {
  // Example 1: Fetch Users from API
  onFetchUsers$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(AppActions.fetchUsers),
      withLatestFrom(this.store.pipe(select(selectAppUsers))),
      filter(([action, users]) => users === null),
      switchMap(() =>
        this.userService.fetchUsers().pipe(
          map((data) => AppActions.fetchUsersSuccess({ data })),
          catchError((error) => of(AppActions.fetchUsersFailure({ error })))
        )
      )
    );
  });

  // Example 4: Router Store
  onSignOut$ = createEffect(() => {
    return this.actions$.pipe(
      ofType<RouterNavigatedAction>(ROUTER_NAVIGATION),
      filter((action) => action.payload.routerState.url.includes('signout')),
      map((action) => AppActions.userSignOut())
    );
  });

  onEnroll$ = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(AppActions.userEnroll),
        tap((action) => {
          if (this.storageService && !this.storageService.getItem('enrolled')) {
            this.storageService.setItem('enrolled', JSON.stringify(Date.now()));
          }
        })
      );
    },
    {
      dispatch: false,
    }
  );

  constructor(
    private actions$: Actions,
    private userService: UserService,
    private storageService: LocalStorageService,
    private store: Store<AppState>
  ) {}
}
