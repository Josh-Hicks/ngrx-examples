import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromApp from './app.reducer';

export const selectAppState = createFeatureSelector<fromApp.AppState>(
  fromApp.appFeatureKey
);

export const selectAppUsers = createSelector(
  selectAppState,
  (state: fromApp.AppState) => (state ? state.users : null)
);

export const selectAppSignedIn = createSelector(
  selectAppState,
  (state: fromApp.AppState) => (state ? state.signedIn : null)
);

export const selectAppEnrolled = createSelector(
  selectAppState,
  (state: fromApp.AppState) => (state ? state.settings.enrolled : null)
);

export const selectAppAccordionOpen = createSelector(
  selectAppState,
  (state: fromApp.AppState) => (state ? state.accordionOpen : null)
);

export const selectAppError = createSelector(
  selectAppState,
  (state: fromApp.AppState) => (state ? state.error : null)
);
