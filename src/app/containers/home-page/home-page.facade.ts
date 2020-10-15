import { Injectable } from '@angular/core';
import { Action, Store } from '@ngrx/store';
import * as fromApp from 'src/app/store/app.reducer';
import {
  selectAppAccordionOpen,
  selectAppEnrolled,
  selectAppSignedIn,
  selectAppUsers
} from 'src/app/store/app.selectors';

@Injectable({
  providedIn: 'root',
})
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
