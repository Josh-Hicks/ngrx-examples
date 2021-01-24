import { ROUTER_NAVIGATION } from '@ngrx/router-store';
import { Action, ActionsSubject } from '@ngrx/store';
import { MockStore } from '@ngrx/store/testing';
import { of } from 'rxjs';
import { Mock, mockActions, mockService, mockStore } from 'src/test-utils';
import { LocalStorageService } from '../data/local-storage.service';
import { UserService } from '../data/users.service';
import * as AppActions from './app.actions';
import { AppEffects } from './app.effects';
import { AppState } from './app.reducer';
import { selectAppUsers } from './app.selectors';

describe('AppEffects', () => {
  let actions: ActionsSubject;
  let store: MockStore<AppState>;
  let userService: Mock<UserService>;
  let localStorageService: Mock<LocalStorageService>;

  let effects: AppEffects;

  const signoutRouterAction: Action = {
    type: ROUTER_NAVIGATION,
    payload: {
      routerState: {
        url: 'signout',
      },
    },
  } as Action;

  beforeEach(() => {
    store = mockStore();
    actions = mockActions();
    userService = mockService(UserService);
    localStorageService = mockService(LocalStorageService);

    effects = new AppEffects(actions, userService, localStorageService, store);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });

  it('should fire if users is null onFetchUsers$', () => {
    // given
    const mockUsers = [{ id: 1, name: 'Leanne Graham' }];
    userService.fetchUsers.and.returnValue(of(mockUsers));
    store.overrideSelector(selectAppUsers, null);

    // when
    actions.next(AppActions.fetchUsers());

    // then
    effects.onFetchUsers$.subscribe((users) => {
      expect(users).toEqual(AppActions.fetchUsersSuccess({ data: mockUsers }));
      expect(userService.fetchUsers).toHaveBeenCalled();
    });
  });

  it('should dispatch userSignOut if route matches onSignOut$', () => {
    // given & when
    actions.next(signoutRouterAction);

    // then
    effects.onSignOut$.subscribe((action) => {
      expect(action).toEqual(AppActions.userSignOut());
    });
  });

  it('should set item in local storage onEnroll$', () => {
    // given & when
    actions.next(AppActions.userEnroll());

    // then
    effects.onEnroll$.subscribe((action) => {
      expect(action).toEqual(AppActions.userEnroll());
    });
  });
});
