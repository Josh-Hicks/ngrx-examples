import { Injectable } from '@angular/core';
import { Store, Action } from '@ngrx/store';
import * as fromApp from 'src/app/store/app.reducer';
import {
  selectAppUsers,
  selectAppSignedIn,
  selectAppEnrolled,
  selectAppAccordionOpen,
} from 'src/app/store/app.selectors';

@Injectable()
export class HomePageFacade {
  constructor(private store: Store<fromApp.AppState>) {}

  users$ = this.store.select(selectAppUsers);
  signedIn$ = this.store.select(selectAppSignedIn);
  enrolled$ = this.store.select(selectAppEnrolled);
  accordionOpen$ = this.store.select(selectAppAccordionOpen);

  dispatch(action: Action) {
    this.store.dispatch(action);
  }
}
