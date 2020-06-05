import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { ROUTER_NAVIGATION } from '@ngrx/router-store';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { Observable, of } from 'rxjs';
import { UserService } from '../data/users.service';
import * as AppActions from './app.actions';
import { AppEffects } from './app.effects';
import { AppState } from './app.reducer';

const initialState = {
  users: null,
  settings: { enrolled: false },
  signedIn: true,
  accordionOpen: false,
  error: null,
};

const mockUsers = [
  {
    id: 1,
    name: 'Leanne Graham',
    username: 'Bret',
    email: 'Sincere@april.biz',
    address: {
      street: 'Kulas Light',
      suite: 'Apt. 556',
      city: 'Gwenborough',
      zipcode: '92998-3874',
      geo: {
        lat: '-37.3159',
        lng: '81.1496',
      },
    },
    phone: '1-770-736-8031 x56442',
    website: 'hildegard.org',
    company: {
      name: 'Romaguera-Crona',
      catchPhrase: 'Multi-layered client-server neural-net',
      bs: 'harness real-time e-markets',
    },
  },
];

class MockUserService {
  fetchUsers() {
    return of(mockUsers);
  }
}

describe('AppEffects', () => {
  let actions$: Observable<any>;
  let effects: AppEffects;
  let store: MockStore<AppState>;
  let httpService: UserService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        AppEffects,
        provideMockActions(() => actions$),
        provideMockStore({ initialState }),
        { provide: UserService, useClass: MockUserService },
      ],
    });

    effects = TestBed.inject(AppEffects);
    store = TestBed.inject(MockStore);
    httpService = TestBed.inject(UserService);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });

  describe('onFetchUsers$', () => {
    it('should fire if users is null', (done) => {
      const spy = spyOn(httpService, 'fetchUsers').and.callThrough();
      actions$ = of(AppActions.fetchUsers);
      effects.onFetchUsers$.subscribe((res) => {
        expect(res).toEqual(AppActions.fetchUsersSuccess({ data: mockUsers }));
        expect(spy).toHaveBeenCalled();
        done();
      });
    });
  });

  describe('onSignOut$', () => {
    it('should dispatch userSignOut if route matches', (done) => {
      actions$ = of({
        type: ROUTER_NAVIGATION,
        payload: {
          routerState: {
            url: 'signout',
          },
        },
      });
      effects.onSignOut$.subscribe((action) => {
        expect(action).toEqual(AppActions.userSignOut());
        done();
      });
    });
  });
});
