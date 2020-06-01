import { createAction, props } from '@ngrx/store';

export const fetchUsers = createAction('[App Home] Fetch Users');

export const fetchUsersSuccess = createAction(
  '[Users API] Fetch Users Success',
  props<{ data: any }>()
);

export const fetchUsersFailure = createAction(
  '[Users API] Fetch Users Failure',
  props<{ error: any }>()
);

export const userSignIn = createAction('[App Home] User Sign In');

export const userSignOut = createAction('[App Home] User Sign In');

export const userEnroll = createAction('[App Home] User Enroll');

export const userUnenroll = createAction('[App Home] User Unenroll');

export const toggleAccordion = createAction('[App Home] Toggle Accordion');
