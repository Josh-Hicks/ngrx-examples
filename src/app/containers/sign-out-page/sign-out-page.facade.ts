import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { userSignIn } from 'src/app/store/app.actions';
import * as fromApp from 'src/app/store/app.reducer';
import { selectAppSignedIn } from 'src/app/store/app.selectors';

@Injectable()
export class SignOutPageFacade {
  constructor(private store: Store<fromApp.AppState>) {}

  signedIn$ = this.store.select(selectAppSignedIn);

  signIn() {
    this.store.dispatch(userSignIn());
  }
}
