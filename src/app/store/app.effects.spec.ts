import { ROUTER_NAVIGATION } from '@ngrx/router-store';
import { Action, ActionsSubject } from '@ngrx/store';
import { MockStore } from '@ngrx/store/testing';
import { of } from 'rxjs';
import { Mock, mockActions, mockService, mockStore } from 'src/test-utils';
import { UserService } from '../data/users.service';
import * as AppActions from './app.actions';
import { AppEffects } from './app.effects';
import { AppState } from './app.reducer';
import { selectAppUsers } from './app.selectors';

describe('AppEffects 2', () => {
  let actions: ActionsSubject;
  let effects: AppEffects;
  let store: MockStore<AppState>;
  let userService: Mock<UserService>;

  beforeEach(() => {
    store = mockStore();
    actions = mockActions();
    userService = mockService(UserService);

    effects = new AppEffects(actions, userService, store);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });

  describe('onFetchUsers$', () => {
    it('should fire if users is null', (done) => {
      // given
      const mockUsers = [{ id: 1, name: 'Leanne Graham' }];

      userService.fetchUsers.and.returnValue(of(mockUsers));
      store.overrideSelector(selectAppUsers, null);

      // when
      actions.next(AppActions.fetchUsers());

      // then
      effects.onFetchUsers$.subscribe((res) => {
        expect(res).toEqual(AppActions.fetchUsersSuccess({ data: mockUsers }));
        expect(userService.fetchUsers).toHaveBeenCalled();
        done();
      });
    });
  });

  describe('onSignOut$', () => {
    it('should dispatch userSignOut if route matches', (done) => {
      // given
      const signoutRouterAction: Action = {
        type: ROUTER_NAVIGATION,
        payload: {
          routerState: {
            url: 'signout',
          },
        },
      } as Action;

      // when
      actions.next(signoutRouterAction);

      // then
      effects.onSignOut$.subscribe((action) => {
        expect(action).toEqual(AppActions.userSignOut());
        done();
      });
    });
  });

  describe('onEnroll$', () => {
    it('should set item in local storage', (done) => {
      // given
      const spy = spyOn(localStorage, 'setItem').and.callFake(() => true);

      // when
      actions.next(AppActions.userEnroll());

      // then
      effects.onEnroll$.subscribe((action) => {
        expect(action).toEqual(AppActions.userEnroll());
        expect(spy).toHaveBeenCalled();
        done();
      });
    });
  });
});
