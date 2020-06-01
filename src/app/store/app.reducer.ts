import { createReducer, on, State, Action } from '@ngrx/store';
import * as AppActions from './app.actions';

export const appFeatureKey = 'app';

export interface Settings {
  enrolled: boolean;
}

export interface AppState {
  users: any;
  settings: Settings;
  signedIn: boolean;
  accordionOpen: boolean;
  error: any;
}

export const initialState: AppState = {
  users: null,
  settings: { enrolled: false },
  signedIn: true,
  accordionOpen: false,
  error: null,
};

export const appReducer = createReducer(
  initialState,

  on(AppActions.userSignIn, (state) => ({ ...state, signedIn: true })),
  on(AppActions.userSignOut, (state) => ({ ...state, signedIn: false })),
  on(AppActions.toggleAccordion, (state) => ({
    ...state,
    accordionOpen: !state.accordionOpen,
  })),
  on(AppActions.userEnroll, (state) => ({
    ...state,
    settings: { ...state.settings, enrolled: true },
  })),
  on(AppActions.userUnenroll, (state) => ({
    ...state,
    settings: { ...state.settings, enrolled: false },
  })),
  on(AppActions.fetchUsersSuccess, (state, action) => ({
    ...state,
    users: action.data,
  })),
  on(AppActions.fetchUsersFailure, (state, action) => ({
    ...state,
    error: action.error,
  }))
);

export function reducer(state: AppState | undefined, action: Action) {
  return appReducer(state, action);
}
