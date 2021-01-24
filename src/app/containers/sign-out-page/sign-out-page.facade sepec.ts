import { Action, Store } from '@ngrx/store';
import { userSignIn } from 'src/app/store/app.actions';
import { AppState } from 'src/app/store/app.reducer';
import { Mock, mockService } from 'src/test-utils';
import { SignOutPageFacade } from './sign-out-page.facade';

describe('SignOutPageFacade', () => {
  let facade: SignOutPageFacade;
  let store: Mock<Store<AppState>>;

  beforeEach(() => {
    store = mockService<Store<AppState>>(Store);

    facade = new SignOutPageFacade(store);
  });

  it('should dispatch userSignIn', () => {
    // given
    const action: Action = userSignIn();

    // when
    facade.signIn();

    // then
    expect(store.dispatch).toHaveBeenCalledWith(action);
  });
});
