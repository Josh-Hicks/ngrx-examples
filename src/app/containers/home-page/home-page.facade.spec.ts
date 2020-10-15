import { Action, Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.reducer';
import { Mock, mockService } from 'src/test-utils';
import { HomePageFacade } from './home-page.facade';

describe('HomePageFacade', () => {
  let facade: HomePageFacade;
  let store: Mock<Store<AppState>>;

  beforeEach(() => {
    store = mockService<Store<AppState>>(Store);

    facade = new HomePageFacade(store);
  });

  it('should invoke store dispatch on dispatch', () => {
    // given
    const action: Action = { type: 'Test Action' };

    // when
    facade.dispatch(action);

    // then
    expect(store.dispatch).toHaveBeenCalled();
    expect(store.dispatch).toHaveBeenCalledWith(action);
  });
});
