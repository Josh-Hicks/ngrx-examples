import { Injectable } from '@angular/core';
import { Action, Store } from '@ngrx/store';
import * as fromApp from 'src/app/store/app.reducer';
import { selectAppSignedIn } from 'src/app/store/app.selectors';

@Injectable()
export class SignOutPageFacade {
  constructor(private store: Store<fromApp.AppState>) {}

  signedIn$ = this.store.select(selectAppSignedIn);

  dispatch(action: Action) {
    this.store.dispatch(action);
  }
}
