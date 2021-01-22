import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import {
  fetchUsers,
  toggleAccordion,
  userEnroll
} from 'src/app/store/app.actions';
import { AppState } from 'src/app/store/app.reducer';
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
  constructor(private store: Store<AppState>) {}

  users$ = this.store.select(selectAppUsers);
  signedIn$ = this.store.select(selectAppSignedIn);
  enrolled$ = this.store.select(selectAppEnrolled);
  accordionOpen$ = this.store.select(selectAppAccordionOpen);

  toggleAccordion() {
    this.store.dispatch(toggleAccordion());
  }

  enroll() {
    this.store.dispatch(userEnroll());
  }

  fetchUsers() {
    this.store.dispatch(fetchUsers());
  }
}
